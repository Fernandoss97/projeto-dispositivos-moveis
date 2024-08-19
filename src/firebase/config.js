import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";

const apiKey = API_KEY;
const authDomain = AUTH_DOMAIN;
const projectId = PROJECT_ID;
const storageBucket = STORAGE_BUCKET;
const messagingSenderId = MESSAGING_SENDER_ID;
const appId = APP_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export {auth_mod};
