import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "./main";

/**
 * adding new match
 * @param {*} match
 * @returns Id on success, -1 on failure
 */
export const addMatch = async (match) => {
  try {
    const docRef = await addDoc(collection(db, "matches"), match);
    return docRef.id;
  } catch (error) {
    console.error("Error adding data to the firebase: ", error);
  }
  return -1;
};

/**
 * Update match
 * @param {*} match
 * @returns true on succes false on failure
 */
export const updateMatch = async (match) => {
  try {
    const docRef = doc(db, "matches", match.id);
    await updateDoc(docRef, match);
    return true;
  } catch (error) {
    console.error("Error updating data to the firebase: ", error);
    return false;
  }
};

/**
 * Delete match
 * @param {*} matchId
 * @returns true on succes false on failure
 */
export const deleteMatch = async (matchId) => {
  try {
    await deleteDoc(doc(db, "matches", matchId));
    return true;
  } catch (error) {
    console.error("Error deleteing data to the firebase: ", error);
    return false;
  }
};

/* Create seperate function to get all matches, this is not a listner to live
 update this only fetch the data when it triggered and provide it to 
 the frontend */
export const getAllMatches = async () => {
  let matches = []; // tempararly created to assign data later
  try {
    const querySnapshot = await getDocs(collection(db, "matches")); // connect to the firebase and get query snapshot
    querySnapshot.forEach(async (doc) => {
      // itterate through all the document of the collection
      let teamPromise1 = getDoc(doc.data().team1.reference); // get the teams by the refernece
      let teamPromise2 = getDoc(doc.data().team2.reference);

      let teamValues = await Promise.all([teamPromise1, teamPromise2]); // actually wait for the reference to load
      let teamd1 = teamValues[0].exists() ? teamValues[0].data() : false;
      let teamd2 = teamValues[1].exists() ? teamValues[1].data() : false;

      matches.push({
        id: doc.id,
        type: doc.data().type,
        name: doc.data().name,
        location: doc.data().locations,
        time: doc.data().date,
        startedAt: doc.data().startedTime.toDate().toLocaleTimeString("en-US"), // convert timstamp to datetime
        team1: teamd1
          ? {
              name: teamd1.name,
              description: teamd1.description,
              url: teamd1.logoUrl,
            }
          : {},
        team2: teamd2
          ? {
              name: teamd2.name,
              description: teamd2.description,
              url: teamd2.logoUrl,
            }
          : {},
      });
    });
    return matches;
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

export const getOngoingMatches = async () => {
  const ongoingMatchQuery = query(
    collection(db, "matches"),
    where("status", "==", 2) //TODO: change this to 1
  );

  let matches = []; // tempararly created to assign data later
  try {
    const querySnapshot = await getDocs(ongoingMatchQuery); // connect to the firebase and get query snapshot
    querySnapshot.forEach(async (doc) => {
      // itterate through all the document of the collection
      let teamPromise1 = getDoc(doc.data().team1.reference); // get the teams by teh refernece
      let teamPromise2 = getDoc(doc.data().team1.reference);

      let teamValues = await Promise.all([teamPromise1, teamPromise2]); // actually wait for the reference to load
      let teamd1 = teamValues[0].exists() ? teamValues[0].data() : false;
      let teamd2 = teamValues[1].exists() ? teamValues[1].data() : false;

      matches.push({
        id: doc.id,
        type: doc.data().type,
        name: doc.data().name,
        location: doc.data().locations,
        time: doc.data().date,
        startedAt: doc.data().startedTime.toDate().toLocaleTimeString("en-US"), // convert timstamp to datetime
        team1: teamd1
          ? {
              name: teamd1.name,
              description: teamd1.description,
              url: teamd1.logoUrl,
            }
          : {},
        team2: teamd2
          ? {
              name: teamd2.name,
              description: teamd2.description,
              url: teamd2.logoUrl,
            }
          : {},
      });
    });
    return matches;
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

export const getPastMatches = async () => {
  const ongoingMatchQuery = query(
    collection(db, "matches"),
    where("status", "==", 2)
  );

  let matches = []; // tempararly created to assign data later
  try {
    const querySnapshot = await getDocs(ongoingMatchQuery); // connect to the firebase and get query snapshot
    querySnapshot.forEach(async (doc) => {
      // itterate through all the document of the collection
      let teamPromise1 = getDoc(doc.data().team1.reference); // get the teams by teh refernece
      let teamPromise2 = getDoc(doc.data().team1.reference);
      let teamWinner = getDoc(doc.data().winner);

      let teamValues = await Promise.all([
        teamPromise1,
        teamPromise2,
        teamWinner,
      ]); // actually wait for the reference to load

      let team1 = teamValues[0].exists() ? teamValues[0].data() : false;
      let team2 = teamValues[1].exists() ? teamValues[1].data() : false;
      let winner = teamValues[2].exists() ? teamValues[2].data() : false;

      matches.push({
        id: doc.id,
        type: doc.data().type,
        name: doc.data().name,
        location: doc.data().locations,
        time: doc.data().date,
        startedAt: doc.data().startedTime.toDate().toLocaleTimeString("en-US"), // convert timstamp to datetime
        numberOfOvers: doc.data().numberOfOvers,
        team1: team1
          ? {
              name: team1.name,
              description: team1.description,
              url: team1.logoUrl,
              balls: doc.data().team1.numberOfBalls,
              score: doc.data().team1.score,
              wickets: doc.data().team1.wickets,
            }
          : {},
        team2: team2
          ? {
              name: team2.name,
              description: team2.description,
              url: team2.logoUrl,
              balls: doc.data().team2.numberOfBalls,
              score: doc.data().team2.score,
              wickets: doc.data().team2.wickets,
            }
          : {},
        winner: winner
          ? {
              name: winner.name,
            }
          : {},
        wonBy: doc.data().wonBy,
      });
    });
    return matches;
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};

export const getMatchesByTeam = async (teamId) => {
  // TODo: Query should be modified to look in to both team1 and team2
  const ongoingMatchQuery = query(
    collection(db, "matches"),
    where("team1", "==", `/teams/${teamId}`)
  );

  let matches = []; // tempararly created to assign data later
  try {
    const querySnapshot = await getDocs(ongoingMatchQuery); // connect to the firebase and get query snapshot
    querySnapshot.forEach(async (doc) => {
      // itterate through all the document of the collection
      let teamPromise1 = getDoc(doc.data().team1.reference); // get the teams by teh refernece
      let teamPromise2 = getDoc(doc.data().team1.reference);

      let teamValues = await Promise.all([teamPromise1, teamPromise2]); // actually wait for the reference to load
      let teamd1 = teamValues[0].exists() ? teamValues[0].data() : false;
      let teamd2 = teamValues[1].exists() ? teamValues[1].data() : false;

      matches.push({
        id: doc.id,
        type: doc.data().type,
        name: doc.data().name,
        location: doc.data().locations,
        time: doc.data().date,
        startedAt: doc.data().startedTime.toDate().toLocaleTimeString("en-US"), // convert timstamp to datetime
        team1: teamd1
          ? {
              name: teamd1.name,
              description: teamd1.description,
              url: teamd1.logoUrl,
            }
          : {},
        team2: teamd2
          ? {
              name: teamd2.name,
              description: teamd2.description,
              url: teamd2.logoUrl,
            }
          : {},
      });
    });
    return matches;
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
    return [];
  }
};
export const createSetOfMatches = async (matches) => {
  console.log("matches: ", matches);
  let res;
  for (const match of matches) {
    let res = await creatematch(match);
  }
  return { success: true };
};

const creatematch = async (match) => {
  let id = "match_" + new Date().getTime();
  try {
    let newmatchRef = doc(db, "match", id);
    await setDoc(newmatchRef, match);
    return { success: true, id: id };
  } catch (error) {
    console.error("Error creating Team step 1: ", error);
    return {
      success: false,
      message: "Could not update data base, Please try again",
    };
  }
};
