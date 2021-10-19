import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { db } from "./main";
//import { passSocialMedioa } from "./socialmedia.firebase.js";

/**
 * adding new organisation
 * @param {*} organisation
 * @returns Id on success, -1 on failure
 */
export const addOrganisation = async (organisation) => {
  try {
    const docRef = await addDoc(collection(db, "organisations"), organisation);
    return docRef.id;
  } catch (error) {
    console.error("Error adding data to the firebase: ", error);
  }
  return -1;
};

/**
 * Update organisation
 * @param {*} organisation
 * @returns true on succes false on failure
 */
export const updateOrganisation = async (organisation) => {
  try {
    const docRef = doc(db, "organisation", organisation.id);
    await updateDoc(docRef, organisation);
    return true;
  } catch (error) {
    console.error("Error updating data to the firebase: ", error);
    return false;
  }
};
