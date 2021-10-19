import { collection, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "./main";

/**
 * Adds new profile
 * @param {*} profile
 * @returns profile Id on success -1 on fail
 */
export const addProfile = async (profile) => {
  try {
    const docRef = await addDoc(collection(db, "players"), profile);
    return docRef.id;
  } catch (error) {
    console.error("Error adding data to the firebase: ", error);
  }
  return -1;
};

/**
 * uptating existing profile
 * @param {*} profile
 * @returns true on success, false on fail
 */
export const updateProfle = async (profile) => {
  try {
    const docRef = doc(db, "players", profile.id);
    await updateDoc(docRef, profile);
    return true;
  } catch (error) {
    console.error("Error updating data to the firebase: ", error);
    return false;
  }
};

/**
 * Get player details by ID
 * @param {*} id
 * @returns player
 */
export const getProfileById = async (id) => {
  const docRef = doc(db, "players", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return {};
  }
};
