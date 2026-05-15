import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const collections = {
  faculties:'faculties', departments:'departments', groups:'groups', teachers:'teachers',
  subjects:'subjects', rooms:'rooms', buildings:'buildings', lessons:'lessons', workloads:'workloads'
};

export function listenCollection(name, cb){
  const q = query(collection(db, name), orderBy('createdAt','desc'));
  return onSnapshot(q, snap => cb(snap.docs.map(d=>({id:d.id,...d.data()}))));
}
export function createItem(name, data){return addDoc(collection(db,name),{...data,createdAt:serverTimestamp(),updatedAt:serverTimestamp()});}
export function updateItem(name,id,data){return updateDoc(doc(db,name,id),{...data,updatedAt:serverTimestamp()});}
export function deleteItem(name,id){return deleteDoc(doc(db,name,id));}
