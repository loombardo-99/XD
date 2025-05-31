<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWySSJMKxrUyXsmPVEbR8vY9sl50Sd5oI",
    authDomain: "xd-ai-9bcd0.firebaseapp.com",
    projectId: "xd-ai-9bcd0",
    storageBucket: "xd-ai-9bcd0.firebasestorage.app",
    messagingSenderId: "13121722784",
    appId: "1:13121722784:web:585d2c93489798ac79ecc5",
    measurementId: "G-JQ9DSZCR6Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>