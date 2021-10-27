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
  setDoc,
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

export const createOrganizationWithBasicInfo = async (basicInfo) => {
  let id = "org_" + new Date().getTime();
  try {
    let newPlayerRef = doc(db, "organisations", id);
    await setDoc(newPlayerRef, basicInfo);
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating organization step 1: ", error);
    return {
      success: false,
      message: "Could not update data base, Please try again",
    };
  }
};

export const addSocialMedia = async (id, socialMedia) => {
  try {
    let newPlayerRef = doc(db, "organisations", id);
    await setDoc(newPlayerRef, { socialMedia: socialMedia }, { merge: true });
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating organization step 3: ", error);
    return {
      success: false,
      message: "Could not update achievements, Please try again",
    };
  }
};
