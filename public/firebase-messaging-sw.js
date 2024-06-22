importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDpuXkqVW5Liw9bHh25eB8Y64smV-pUvXU",
    projectId: "roomrental-4bbd5",
    messagingSenderId: "646833758197",
    appId: "1:646833758197:web:1b7c132b88889e23c8cabc",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});