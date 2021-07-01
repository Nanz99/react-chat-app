import firebase,{ db } from '../firebase/config'

export const addDocument = (collection,data) => {
   const query = db.collection(collection)

   query.add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
   })
}