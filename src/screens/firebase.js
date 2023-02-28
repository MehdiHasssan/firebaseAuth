import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9oBjg5s7irMHvHUaVB1AApAM4IwMFjN4',
  authDomain: 'task-14672.firebaseapp.com',
  databaseURL: 'https://task-14672-default-rtdb.firebaseio.com',
  projectId: 'task-14672',
  storageBucket: 'task-14672.appspot.com',
  messagingSenderId: '770696893301',
  appId: '1:770696893301:web:644de7caf01bbe9838793c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default {auth};
