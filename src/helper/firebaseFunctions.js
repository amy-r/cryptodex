import * as firebase from 'firebase';
import { config } from '../firebase/firebase';
export const firebaseApp = firebase.initializeApp(config);

export const writeCurrency = (user, curr) => {
  try {
    firebaseApp.database().ref(user).update({
      [curr.name]: curr.amount,
    });
  } catch (error) {
    throw new Error(`error adding currency : ${error}` )
  }
}

