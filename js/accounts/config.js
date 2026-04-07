import { Client, Account } from 'appwrite';

const getEndpoint = () => {
    const local = localStorage.getItem('monochrome-appwrite-endpoint');
    if (local) return local;

    if (window.__APPWRITE_ENDPOINT__) return window.__APPWRITE_ENDPOINT__;

    return 'https://nyc.cloud.appwrite.io/v1';
};

const getProject = () => {
    const local = localStorage.getItem('monochrome-appwrite-project');
    if (local) return local;

    if (window.__APPWRITE_PROJECT_ID__) return window.__APPWRITE_PROJECT_ID__;

    return '69d4887b0031e2cfe0ba';
};

const client = new Client().setEndpoint(getEndpoint()).setProject(getProject());

const account = new Account(client);
export { client, account as auth };
