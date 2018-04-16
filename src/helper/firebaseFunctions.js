import * as firebase from 'firebase';
import { config } from '../firebase/firebase';
export const firebaseApp = firebase.initializeApp(config);


export const writeCurrency = (user, curr) => {
  try {
    firebaseApp.database().ref(user).update({
      [curr.name]: curr.amount
    });
  } catch (err) {
    throw new Error(`Could not add currency: ${err}`)
  }
}

export const getUserData = async (userId) => {
  try {
    const ref = firebase.database().ref(`${userId}`)
    const userData = await ref.once('value');
    const userPortfolio = await userData.val();
    return userPortfolio;
  } catch (err) {
    throw new Error('Could not get user data')
  }  
}

