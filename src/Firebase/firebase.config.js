// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwN9FATm2Um9dL_ozVbJ6qAIV1Vht57L8",
  authDomain: "social-event-manager.firebaseapp.com",
  projectId: "social-event-manager",
  storageBucket: "social-event-manager.appspot.com",
  messagingSenderId: "693205668169",
  appId: "1:693205668169:web:378225c3f6cb18c5a4ca98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app