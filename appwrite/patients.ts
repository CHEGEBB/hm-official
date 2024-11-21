import { Databases } from 'appwrite';
import { config, appwriteClient } from './conf';

export interface PatientType {
  username: string;
  email: string;
  avatar: string;
  accountId: string;
  dateofBirth: string;
  gender: string;
  bloodType: string;
  height: string;
  weight: string;
  allergies: string;
  emergencyContact: string;
  phone: string;
  address: string;
  occupation: string;
  emergencyPhone: string;
}

const db = new Databases(appwriteClient);

class Patients {

  async getPatientById(patientId: string) {
    try {
      const data = await db.getDocument(
        config.databaseId,
        config.userCollectionId,
        patientId,
      );
      return data as unknown as PatientType; 
    } catch (e) {
      console.log(e)
      return null
    }
  }

}

const patient = new Patients()
export default patient