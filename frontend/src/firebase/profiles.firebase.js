import { collection, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "./main";

/**
 * Adds new profile
 * @param {*} profile
 * @returns profile Id
 */
export const addProfile = async (profile) => {
  const docRef = await addDoc(collection(db, "players"), profile);
  return docRef.id;
};

/**
 * uptating existing profile
 * @param {*} profile
 */
export const updateProfle = async (profile) => {
  const docRef = doc(db, "players", profile.id);
  await updateDoc(docRef, profile);
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
