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
import { passSocialMedioa } from "./socialmedia.firebase.js";
import { getPlayerById } from "./players.firebase";

/**
 * Create new team
 * @param {*} team
 * @returns team id
 */
export const addTeam = async (team) => {
  try {
    const docRef = await addDoc(collection(db, "teams"), team);
    return docRef.id;
  } catch (error) {
    console.error("Error adding data to the firebase: ", error);
  }
  return -1;
};

/**
 * Update team
 * @param {*} team
 * @returns true on succes false on failure
 */
export const updateTeam = async (team) => {
  try {
    const docRef = doc(db, "teams", team.id);
    await updateDoc(docRef, team);
    return true;
  } catch (error) {
    console.error("Error updating data to the firebase: ", error);
    return false;
  }
};

/**
 * Get all teams
 * @returns all teams
 */
export const getAllTeams = async () => {
  try {
    const queryTeamsSnapshot = await getDocs(collection(db, "teams"));
    return passTeams(queryTeamsSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

/**
 * Get team by ID
 * @param {*} id
 * @returns team
 */
export const getTeamById = async (id) => {
  const docRef = doc(db, "teams", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists) {
    //let socialMedia = await passSocialMedioa(docSnap.data().socialMedia);
    
    let promises = [];
    promises.push(passSocialMedioa(docSnap.data().socialMedia));
    //promises.push(getDoc(docSnap.data().captain.reference));
    let teamInfo = { id: docSnap.id, ...docSnap.data() };

    // teamInfo.data().players.forEach((player) => {

    // });
    let data = await Promise.all(promises);
    let socialMedia = data[0];
    //console.log("captain", data[1]);
    teamInfo["socialMedia"] = socialMedia;
    
    return teamInfo;  
  } else {
    return {};
  }
};

/**
 * Get Teams owned by
 * @param {*} userId
 * @returns list of teams
 */
export const getTeamsByOwner = async (userId) => {
  const teamsOwnedByQuery = query(
    collection(db, "teams"),
    where("owner", "==", `/users/${userId}`)
  );

  try {
    const queryTeamsSnapshot = await getDocs(teamsOwnedByQuery);
    return passTeams(queryTeamsSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

/**
 * Get Teams by player
 * @param {*} plyerId
 * @returns List of teams
 */
export const getTeamsByPlayer = async (plyerId) => {
  const teamsOwnedByQuery = query(
    collection(db, "teams"),
    where("players", "array-contains", `/players/${plyerId}`)
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

/**
 *
 * @param {*} playerId
 * @param {*} teamId
 * @returns true on success and false on failure
 */
export const addPlayerToTheTeam = async (playerId, teamId) => {
  try {
    const docRef = doc(db, "teams", teamId);
    await updateDoc(docRef, {
      players: arrayUnion(`/players/${playerId}`),
    });
    return true;
  } catch (error) {
    console.error("Error updating from the firebase: ", error);
    return false;
  }
};

/**
 *
 * @param {*} playerId
 * @param {*} teamId
 * @returns true on success and false on failure
 */
export const removePlayerFromTheTeam = async (playerId, teamId) => {
  try {
    const docRef = doc(db, "teams", teamId);
    await updateDoc(docRef, {
      players: arrayRemove(`/players/${playerId}`),
    });
    return true;
  } catch (error) {
    console.error("Error updating from the firebase: ", error);
    return false;
  }
};
