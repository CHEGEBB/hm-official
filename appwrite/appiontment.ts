import appwriteAuth from './auth';
import { Databases, ID, Query } from 'appwrite';
import { config, appwriteClient } from './conf';
import { isSameDay } from '@/utils/time';

const databases = new Databases(appwriteClient);

export interface AppointmentType {
  $id: string;
  userId: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialization: string;
  reason?: string;
  date: Date;
  type: 'Check-up' | 'Follow-up' | 'Consultation' | 'Emergency';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  duration: number;
  location: 'In-person' | 'Video Call';
  conditions: string[];
  medications: string[];
}

class Appiontments {
  async createAppiontment(appionment: AppointmentType) {
    await databases.createDocument(
      config.databaseId,
      config.appoinmentsCollectionId,
      ID.unique(),
      appionment,
    );
  }

  async getAllAppiontments() {
    const user = await appwriteAuth.getCurrentUser();
    if (!user) return null;
    const { doctor } = user;
    const data = await databases.listDocuments(
      config.databaseId,
      config.appoinmentsCollectionId,
      [Query.equal('doctorId', doctor.$id)],
    );
    return data.documents as unknown as AppointmentType[];
  }

  async getTodaysAppiontment() {
    const appiontments =
      ((await this.getAllAppiontments()) as unknown as AppointmentType[]) ||
      null;
    if (!appiontments) return null;

    const todayAppiiontments = appiontments.filter((appiontment) => {
      const date = new Date(appiontment.date);
      const isToday = isSameDay(date, new Date());
      if (isToday) return appiontment;
      return;
    });

    return todayAppiiontments;
  }

  async updateAppiontment(appiontmentId: string, data: {[x:string]: string}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await databases.updateDocument(
      config.databaseId,
      config.appoinmentsCollectionId,
      appiontmentId,
      data,
    );
  }
}

const appiontments = new Appiontments()

export default appiontments;
