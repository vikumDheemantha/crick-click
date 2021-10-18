import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "./main";
import { passSocialMedioa } from "./socialmedia.firebase.js";

/* Get all teams*/
export const getAllTeams = async () => {
  try {
    const queryTeamsSnapshot = await getDocs(collection(db, "teams"));
    return passTeams(queryTeamsSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

/* Get team by ID*/
export const getTeamBy = async (id) => {
  const docRef = doc(db, "teams", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    let socicalMedia = passSocialMedioa(docSnap.socicalMedia);

    return { id: docSnap.id, socicalMedia: socicalMedia, ...docSnap.data() };
  } else {
    return {};
  }
};

/* Get Teams owned by*/
export const getTeamsByOwner = async (id) => {
  const teamsOwnedByQuery = query(
    collection(db, "teams"),
    where("owner", "==", `/users/${id}`)
  );

  try {
    const queryTeamsSnapshot = await getDocs(teamsOwnedByQuery);
    return passTeams(queryTeamsSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

function passTeams(teamsSnapshot) {
  let teams = [];
  teamsSnapshot.forEach(async (doc) => {
    teams.push({
      id: doc.id,
      name: doc.name,
      logo: doc.logoUrl,
      description: doc.description,
      type: doc.type,
    });
  });

  return teams;
}
