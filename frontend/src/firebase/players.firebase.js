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
    let socicalMedia = passSocialMedioa(docSnap.socicalMedia);
    return { id: docSnap.id, socicalMedia: socicalMedia, ...docSnap.data() };
  } else {
    return {};
  }
};

export const getPlayerlayersByTeam = async (teamId) => {
  const team = getTeamBy(teamId);
  return team["players"] ?? {};
};
