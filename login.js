import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRd-nKwNcPbTh9mR2RklYb4xx_0fdMYk0",
  authDomain: "ptoject99.firebaseapp.com",
  projectId: "ptoject99",
  storageBucket: "ptoject99.firebasestorage.app",
  messagingSenderId: "326620617032",
  appId: "1:326620617032:web:760c3e0f4ce45a59dcfb7d",
  measurementId: "G-TNCD10W3TY"
};

console.log("1. تم بدء تشغيل ملف الـ JS"); // للتأكد أن الملف يعمل

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
    console.log("2. الزر موجود في الصفحة وتم العثور عليه");
    
    loginBtn.onclick = async function() {
        console.log("3. تم الضغط على الزر، جاري محاولة الدخول...");
        
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const errorElement = document.getElementById('error');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pass);
            console.log("4. نجح Firebase في التحقق من المستخدم!");
            
            // محاولة التحويل بأكثر من طريقة لضمان العمل
            console.log("5. جاري التحويل لصفحة Home.html...");
            window.location.assign("Home.html");

        } catch (e) {
            console.error("خطأ من Firebase:", e.code);
            errorElement.style.display = "block";
            errorElement.innerText = "خطأ: " + e.message;
        }
    };
} else {
    console.error("خطأ: لم يتم العثور على زر باسم loginBtn في صفحة الـ HTML!");
}
