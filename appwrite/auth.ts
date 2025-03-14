import { config, appwriteClient } from './conf';
import { Account, ID, Avatars, Databases } from 'appwrite';
import AppwriteDoctors from '@/appwrite/doctors';
import { UserType } from '@/appwrite/doctors';

const account = new Account(appwriteClient);
const avatar = new Avatars(appwriteClient);
const databases = new Databases(appwriteClient);

class AppwriteAuth {
  async createUser({
    email,
    password,
    fullName,
    phone,
  }: {
    email: string;
    password: string;
    fullName: string;
    phone: number;
  }) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        fullName,
      );
      if (!newAccount) return newAccount;

      await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        newAccount.$id,
        {
          email,
          username: fullName,
          phone,
          avatar: avatar.getInitials(email),
        },
      );

      return this.login({ email, password });
    } catch (e) {
      throw e;
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      if (await this.isLoggedIn()) await this.logout();
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }
  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();

      return Boolean(data);
    } catch (error) {
      console.log(error)
    }

    return false;
  }

  async getCurrentUser() {
    try {
      const userAccount = await account.get();
      const doctor = await AppwriteDoctors.getDoctorById(userAccount.$id);
      return { userAccount, doctor } as unknown as  UserType;
    } catch (error) {
      console.log('getcurrentUser error: ' + error);
    }

    return null;
  }

  async logout() {
    try {
      return await account.deleteSession('current');
    } catch (error) {
      console.log('logout error: ' + error);
    }
  }

  async updatePassword(oldPassword: string, newpassword: string) {
    try {
      return await account.updatePassword(newpassword, oldPassword)
      
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async updateEmail(email: string, password: string) {
    try {
      return await account.updateEmail(email, password)
      
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;
