import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRd-nKwNcPbTh9mR2RklYb4xx_0fdMYk0",
  authDomain: "ptoject99.firebaseapp.com",
  projectId: "ptoject99",
  storageBucket: "ptoject99.firebasestorage.app",
  messagingSenderId: "326620617032",
  appId: "1:326620617032:web:760c3e0f4ce45a59dcfb7d",
  measurementId: "G-TNCD10W3TY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signUpBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        // ظهور رسالة النجاح
        alert("🎉 مبروك ! تم إنشاء حسابك بنجاح في قاعدة بيانات NoSQL.");
        
        // التحويل فوراً لصفحة تسجيل الدخول بعد الضغط على OK
        window.location.href = "index.html"; 
    } catch (e) {
        alert("خطأ: تأكد من كتابة البريد بشكل صحيح وكلمة مرور قوية");
    }
};
