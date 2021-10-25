import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "./main";

export const passSocialMedioa = async (socilMedias) => {
  try {
    const querySocialMediasSnapshot = await getDocs(
      collection(db, "socialMedia")
    );

    let socialMediaTypes = [];
    querySocialMediasSnapshot.forEach(async (item) => {
      socialMediaTypes.push({
        type_id: item.id,
        info: item.data(),
      });
    });

    let socialMediaList = [];
    socilMedias.forEach(async (socialMedia) => {
      let res = socialMediaTypes.find(
        (element) => element.type_id == socialMedia.type_id
      );

      if (res != null) {
        socialMediaList.push({
          id: socialMedia.type_id,
          type: socialMedia.type_id,
          icon: res.info.icon,
          text: res.info.name,
          url: socialMedia.url,
          color: res.info.color,
        });
      }
    });
    //console.log("Return", socialMediaList);
    return socialMediaList;
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
};

export const getAllSocialMedias = async () => {
  try {
    const socialMediaListSnapshot = await getDocs(
      collection(db, "socialMedia")
    );

    let socialMediaList = socialMediaListSnapshot.docs.map((smDoc) => ({
      id: smDoc.id,
      color: smDoc.data().color,
      icon: smDoc.data().icon,
      name: smDoc.data().name,
    }));

    return socialMediaList;
  } catch (error) {
    console.error("Error fetching social medias from the databse: ", error);
    return [];
  }
};
