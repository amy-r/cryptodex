import * as firebase from 'firebase';
import { config } from '../firebase/firebase';
export const firebaseApp = firebase.initializeApp(config);

export const writeCurrency = (curr) => {
  try {
    firebaseApp.database().ref('currency/' ).set({
      name: curr.name,
      amount: curr.amount
    });
  } catch (error) {
    throw new Error(`error adding currency : ${error}` )
  }
}

