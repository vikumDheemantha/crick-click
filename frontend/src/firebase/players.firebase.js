import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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
        displayName: doc.data().displayName,
        image: doc.data().image_url,
        introduction: doc.data().introduction,
        skills: doc.data().skills,
        city: doc.data().city,
        region: doc.data().region,
        matchCount: doc.data().matchCount,
        personalBest: doc.data().personalBest,
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
  } else {
    return {};
  }
};

export const getPlayerlayersByTeam = async (teamId) => {
  const team = getTeamBy(teamId);
  return team["players"] ?? {};
};
