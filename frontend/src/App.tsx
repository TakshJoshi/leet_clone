import './App.css'
import { Landing } from './components/landing'
import { initializeApp } from "firebase/app";
import { Singin } from './components/Sighin';
const firebaseConfig = {
  apiKey: "AIzaSyB2_WuyHV6YnqQyIomtbtb1zDC9smJKRds",
  authDomain: "leetcode-clone-d16a4.firebaseapp.com",
  projectId: "leetcode-clone-d16a4",
  storageBucket: "leetcode-clone-d16a4.appspot.com",
  messagingSenderId: "913903970672",
  appId: "1:913903970672:web:cd30d1d2cf7281238d07b5",
  measurementId: "G-DK92KJ05GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <div>
        <Singin />
      </div>
    </>
  )
}

export default App
