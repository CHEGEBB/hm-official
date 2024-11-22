import { Client } from "appwrite";

export const config = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_URL!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  userCollectionId: '670a248800049761218e',
  appoinmentsCollectionId: '670a254100339e546aa4',
  medicationCollectionId: process.env.NEXT_PUBLIC_APPWRITE_MEDICATIONS_COLLECTION_ID!,
  doctorsCollectionId: '673dfed1003665290768',
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID!,
  avatarId : process.env.NEXT_PUBLIC_APPWRITE_AVATAR_ID!,
};

export const appwriteClient = new Client().setEndpoint(config.endpoint).setProject(config.projectId)
