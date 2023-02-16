import React from 'react'
import { db } from '../firebase/app'
import { collection, getDocs } from "firebase/firestore";

const Crud = () => {
  const getClientes = async () => {
    const querySnapshot = await getDocs(collection(db, "clientes"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  getClientes()
  return (
    <div>Crud</div>
  )
}

export default Crud