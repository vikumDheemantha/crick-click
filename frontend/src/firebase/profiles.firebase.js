import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./main";

export const getProfileById = async (id) => {
  const docRef = doc(db, "players", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return {};
  }
};
