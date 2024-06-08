// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBiCkxPadpUzxXFy0pl0VHgsji8-ndcTfg',
  authDomain: 'on-demand-tutor-b39e2.firebaseapp.com',
  projectId: 'on-demand-tutor-b39e2',
  storageBucket: 'on-demand-tutor-b39e2.appspot.com',
  messagingSenderId: '669593609839',
  appId: '1:669593609839:web:14febb93fae46bb59c4f9a',
  measurementId: 'G-6CPY8G5C74',
};

export const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
