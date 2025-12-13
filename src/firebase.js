import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6Cxh915YWm1Hy3XktdHuNVbeNn4a9voM",
  authDomain: "broker-copilot-7799b.firebaseapp.com",
  projectId: "broker-copilot-7799b",
  storageBucket: "broker-copilot-7799b.firebasestorage.app",
  messagingSenderId: "66759780980",
  appId: "1:66759780980:web:68997398550bf936fb3f21",
  measurementId: "G-7EE8SJP7BK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };