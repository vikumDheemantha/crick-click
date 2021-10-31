import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "./main";

/**
 * adding new game
 * @param {*} game
 * @returns Id on success, -1 on failure
 */
export const addGame = async (game) => {
  try {
    const docRef = await addDoc(collection(db, "games"), game);
    return docRef.id;
  } catch (error) {
    console.error("Error adding data to the firebase: ", error);
  }
  return -1;
};

/**
 * Update game
 * @param {*} game
 * @returns true on succes false on failure
 */
export const updateGame = async (game) => {
  try {
    const docRef = doc(db, "games", game.id);
    await updateDoc(docRef, game);
    return true;
  } catch (error) {
    console.error("Error updating data to the firebase: ", error);
    return false;
  }
};

/**
 * Delete game
 * @param {*} gameId
 * @returns true on succes false on failure
 */
export const deleteGame = async (gameId) => {
  try {
    await deleteDoc(doc(db, "games", gameId));
    return true;
  } catch (error) {
    console.error("Error deleteing data to the firebase: ", error);
    return false;
  }
};

export const getAllGames = async () => {
  let games = [];
  try {
    const queryGamesSnapshot = await getDocs(collection(db, "games"));
    return passGames(queryGamesSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
  return games;
};

export const getGamesByTeam = async (teamId) => {
  let games = [];
  try {
    const gamesPlayedByQuery = query(
      collection(db, "games"),
      where("teams", "array-contains", `/teams/${teamId}`)
    );

    const queryGamesSnapshot = await getDocs(gamesPlayedByQuery);
    return passGames(queryGamesSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
  return games;
};

function passGames(gamesSnapshot) {
  let games = [];
  gamesSnapshot.forEach(async (doc) => {
    games.push({
      id: doc.id,
      name: doc.name,
      status: doc.status,
    });
  });

  return games;
}

export const createGameWithBasicInfo = async (basicInfo) => {
  let id = "game_" + new Date().getTime();
  let gameObj = {
    ...basicInfo,
    orgRef: doc(db, "organisations", basicInfo.organizationId),
  };

  try {
    let newGameRef = doc(db, "games", id);
    await setDoc(newGameRef, gameObj);
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating Game step 1: ", error);
    return {
      success: false,
      message: "Could not update data base, Please try again",
    };
  }
};

export const addTeams = async (id, teams) => {
  try {
    console.log("Array of Players: ", teams);
    console.log("Game creation ID returned from the previous: ", id);
    let newGameRef = doc(db, "games", id);
    console.log("reference created successfully");
    await setDoc(newGameRef, { teams: teams }, { merge: true });
    console.log("Document Retrieved successfully");
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating team step 2: ", error);
    return {
      success: false,
      message: "Could not update team players, Please try again",
    };
  }
};
