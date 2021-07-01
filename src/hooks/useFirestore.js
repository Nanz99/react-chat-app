import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'

export default function useFirestore(collection,condition) {
   const [documents,setDocuments] = useState([])
   useEffect(() => {
      // db.collection('rooms').onSnapshot((snapshot) => {
         let collectionRef = db.collection(collection).orderBy('createdAt')
         if(condition){
            if(!condition.compareValue  || condition.compareValue.length){
               setDocuments([])
            }
            collectionRef.where(condition.fieldName,condition.operator,condition.compareValue)
         }
         const unsub
         
         const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
         }))
         console.log({ data, snapshot, docs: snapshot.docs })
      })
   })
}
