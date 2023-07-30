import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '64b1949b76e876729fa7'
export const DATABASE_ID = '64b19657c5ec0024f59c'
export const COLLECTION_ID_MESSAGES = '64b196798dce7d815ebb'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64b1949b76e876729fa7');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;