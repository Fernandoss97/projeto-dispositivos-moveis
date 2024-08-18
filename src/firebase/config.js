import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIZRZQ8P1mOeH7UhXSuhgLMm-H1ZLmp28',
  authDomain: 'projeto-mobile-as65d.firebaseapp.com',
  projectId: 'projeto-mobile-as65d',
  storageBucket: 'projeto-mobile-as65d.appspot.com',
  messagingSenderId: '131611808684',
  appId: '1:131611808684:web:0ef5c8d58ffa294342e009',
};

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export {auth_mod};
