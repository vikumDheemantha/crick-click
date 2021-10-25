import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./main";
import { passSocialMedioa } from "./socialmedia.firebase.js";
import { getTeamBy } from "./teams.firebase.js";

export const getAllPlayers = async () => {
  let players = [];
  try {
    const queryPlayersSnapshot = await getDocs(collection(db, "players"));
    queryPlayersSnapshot.forEach(async (doc) => {
      players.push({
        id: doc.id,
        displayName: doc.displayName,
        image: doc.image_url,
        introduction: doc.introduction,
      });
    });
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
  return players;
};

export const getPlayerById = async (id) => {
  const docRef = doc(db, "players", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    let socialMedia = await passSocialMedioa(docSnap.data().socialMedia);
    let playerInfo = { id: docSnap.id, ...docSnap.data() };
    playerInfo["socialMedia"] = socialMedia;
    return playerInfo;
    //return { id: docSnap.id, socialMedia: socialMedia, ...docSnap.data() };
  } else {
    return {};
  }
};

export const getPlayerlayersByTeam = async (teamId) => {
  const team = getTeamBy(teamId);
  return team["players"] ?? {};
};

export const createPlayerWithBasicInfo = async (basicInfo) => {
  let id = "player_" + new Date().getTime();
  try {
    let newPlayerRef = doc(db, "players", id);
    await setDoc(newPlayerRef, basicInfo);
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating player step 1: ", error);
    return {
      success: false,
      message: "Could not update data base, Please try again",
    };
  }
};

export const addAcievementList = async (id, achievements) => {
  try {
    let newPlayerRef = doc(db, "players", id);
    await setDoc(newPlayerRef, { achievements: achievements }, { merge: true });
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating player step 2: ", error);
    return {
      success: false,
      message: "Could not update achievements, Please try again",
    };
  }
};

export const addSocialMedia = async (id, socialMedia) => {
  try {
    let newPlayerRef = doc(db, "players", id);
    await setDoc(newPlayerRef, { socialMedia: socialMedia }, { merge: true });
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating player step 3: ", error);
    return {
      success: false,
      message: "Could not update achievements, Please try again",
    };
  }
};
