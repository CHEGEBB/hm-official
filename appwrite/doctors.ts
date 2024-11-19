import { Databases, ID } from 'appwrite';
import { config, appwriteClient } from './conf';
import { User } from '@/contexts/doctorContext';
import { SpellCheck } from 'lucide-react';
import appwriteAuth from './auth';

export const doctors = new Databases(appwriteClient);
const databases = new Databases(appwriteClient);

class AppwriteDoctors {
  async getDoctors() {
    try {
      const data = await doctors.listDocuments(
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
      const data = await doctors.getDocument(
        config.databaseId,
        config.doctorsCollectionId,
        doctorId,
      );
      return data;
    } catch (error) {
      console.error('Error getting doctor:', error);
      throw error;
    }
  }

  async updateSelf(doctor: User.doctor) {
    try {
      const currentUser = await appwriteAuth.getCurrentUser()
      const { firstName, lastName, bio, email, avatar, specialization, phone, licenseNumber, address, emailNotifications, smsNotifications} = doctor
      await databases.updateDocument(
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
        },
      );
    } catch (error) {
      console.error('Error updating user info:', error);
      throw error;
    }
  }

  async updateDoctor(doctorId: string, doctor: User) {
    try {
      const { $id, firstName, lastName, bio, email, avatar, specialization, phone, licenseNumber, address, emailNotifications, smsNotifications} = doctor.doctor
      await databases.updateDocument(
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

export default new AppwriteDoctors();