import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const upladProfileImage = async (type, image, ext) => {
  let typePrefix = type == 1 ? "player_" : type == 2 ? "team_" : "org_";
  let fileName = `${typePrefix}${new Date().getTime()}.${ext}`;

  try {
    const storage = getStorage();
    const storageRef = ref(storage, `profileImgs/${fileName}`);

    await uploadBytes(storageRef, image);
    console.log("Image Uplaod successfull");
    const downLoadUrl = await getDownloadURL(storageRef);
    return {
      success: true,
      message: "Image Uploaded Successfully",
      url: downLoadUrl,
    };
  } catch (error) {
    console.error("Error Uploading Image: ", error);
    return { success: false, message: "Error uploading image" };
  }
};
