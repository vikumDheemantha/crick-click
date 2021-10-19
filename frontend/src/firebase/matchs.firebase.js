import { collection, getDocs, getDoc, query, where } from "firebase/firestore";
import { db } from "./main";

/* Create seperate function to get all matches, this is not a listner to live
 update this only fetch the data when it triggered and provide it to 
 the frontend */
export const getAllMatches = async () => {
  let matches = []; // tempararly created to assign data later
  try {
    const querySnapshot = await getDocs(collection(db, "matches")); // connect to the firebase and get query snapshot
    querySnapshot.forEach(async (doc) => {
      // itterate through all the document of the collection
      let teamPromise1 = getDoc(doc.data().team1); // get the teams by the refernece
      let teamPromise2 = getDoc(doc.data().team2);

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
    where("status", "==", 1)
  );

  let matches = []; // tempararly created to assign data later
  try {
    const querySnapshot = await getDocs(ongoingMatchQuery); // connect to the firebase and get query snapshot
    querySnapshot.forEach(async (doc) => {
      // itterate through all the document of the collection
      let teamPromise1 = getDoc(doc.data().team1); // get the teams by teh refernece
      let teamPromise2 = getDoc(doc.data().team1);

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
      let teamPromise1 = getDoc(doc.data().team1); // get the teams by teh refernece
      let teamPromise2 = getDoc(doc.data().team1);

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
      let teamPromise1 = getDoc(doc.data().team1); // get the teams by teh refernece
      let teamPromise2 = getDoc(doc.data().team1);

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
