import { doc, getDoc } from "firebase/firestore";
import { db } from "./main";

export const passSocialMedioa = async (socilMedias) => {
  let promise = [];
  socilMedias.forEach(async (socialMedia) => {
    promise.push(getDoc(doc(db, "socialMedia", socialMedia.typeID)));
  });

  let socialMediaValues = await Promise.all(promise);
  let socialMediaList = [];
  socialMediaValues.forEach(async (item) => {
    let info = socilMedias.find((element) => element.typeId == item.id);
    socialMediaList.push({
      socialMedia: item,
      url: info.url,
    });
  });
  return socialMediaList;
};
