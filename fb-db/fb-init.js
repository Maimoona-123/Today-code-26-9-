  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCdJ9glpxaUpLf6YqAH5c_NY-0i3pxaIIY",
    authDomain: "test-project-26990.firebaseapp.com",
    projectId: "test-project-26990",
    storageBucket: "test-project-26990.firebasestorage.app",
    messagingSenderId: "614050176512",
    appId: "1:614050176512:web:d0ce250224eeb5aac282e5",
    measurementId: "G-M483SQFXW7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);