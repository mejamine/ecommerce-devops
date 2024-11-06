// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJw47tmzfbY-NnAwCHMJwn_pc4ri_8Jc4",
  authDomain: "ecommerce-403d4.firebaseapp.com",
  projectId: "ecommerce-403d4",
  storageBucket: "ecommerce-403d4.appspot.com",
  messagingSenderId: "213113546685",
  appId: "1:213113546685:web:13c6bc4f5110d0ef8754d4",
  measurementId: "G-X5KMNR2JFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = app;  // Assurez-vous d'exporter l'instance d'application correcte
export const firebaseAnalytics = analytics;  // Exportez l'instance d'Analytics si nécessaire