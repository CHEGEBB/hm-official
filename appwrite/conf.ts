import { Client } from "appwrite";

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  projectId: '6704d37c003c8a2f6a36',
  databaseId: '670a2468000caae299eb',
  userCollectionId: '670a248800049761218e',
  appoinmentsCollectionId: '670a254100339e546aa4',
  doctorsCollectionId: '673dfed1003665290768'
};

export const appwriteClient = new Client().setEndpoint(config.endpoint).setProject(config.projectId)
