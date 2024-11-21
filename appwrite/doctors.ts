import { Databases } from 'appwrite';
import { config, appwriteClient } from './conf';
import appwriteAuth from './auth';

export const db = new Databases(appwriteClient);

export interface UserType {
  userAccount: {
    email: string;
  };
  doctor: {
    $id: string;
    firstName: string;
    lastName: string;
    specialization: string;
    avatar: string;
    email?: string;
    bio?: string;
    phone?: string;
    licenseNumber?: string;
    address?: string;
    smsNotifications?: boolean;
    emailNotifications?: boolean;
  };
}

class AppwriteDoctors {
  async getDoctors() {
    try {
      const data = await db.listDocuments(
        config.databaseId,
        config.doctorsCollectionId,
      );
      return data.documents;
    } catch (error) {
      console.error('Error getting doctors:', error);
      throw error;
    }
  }

  async getDoctorById(doctorId: string) {
    try {
      const data = await db.getDocument(
        config.databaseId,
        config.doctorsCollectionId,
        doctorId,
      );
      return data as unknown as UserType['doctor'];
    } catch (error) {
      console.error('Error getting doctor:', error);
      return null
    }
  }

  async updateSelf(doctor: UserType["doctor"]) {
    try {
      const currentUser = await appwriteAuth.getCurrentUser()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {  firstName, lastName, bio, email, avatar, specialization, phone, licenseNumber, address, emailNotifications, smsNotifications} = doctor
      return await db.updateDocument(
        config.databaseId,
        config.doctorsCollectionId,
        currentUser?.doctor.$id || '',
        {
          firstName,
          lastName,
          bio,
          email,
          avatar,
          specialization,
          phone,
          licenseNumber,
          address,
          emailNotifications,
          smsNotifications
        }
      );
    } catch (error) {
      console.error('Error updating user info:', error);
      return null
    }
  }

  async updateDoctor(doctor: UserType) {
    try {
      const { $id, firstName, lastName, bio, email, avatar, specialization, phone, licenseNumber, address, emailNotifications, smsNotifications} = doctor.doctor
      await db.updateDocument(
        config.databaseId,
        config.doctorsCollectionId,
        $id || '',
        {
          firstName,
          lastName,
          bio,
          email,
          avatar,
          specialization,
          phone,
          licenseNumber,
          address,
          emailNotifications,
          smsNotifications
        },
      );
    } catch (error) {
      console.error('Error updating user info:', error);
      throw error;
    }
  }
}

const appwriteDoctor = new AppwriteDoctors();
export default appwriteDoctor