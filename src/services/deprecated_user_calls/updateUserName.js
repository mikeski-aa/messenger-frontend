import { LOCAL_URL } from "../../../utils/url.const";

async function updateUserName(username) {
  // const url = `http://localhost:3000/api/username?name=${username}`;
  const url = LOCAL_URL + `username?name=${username}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  try {
    console.log(url);
    const response = await fetch(url, { method: "PUT", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return { error: "Error changing name" };
  }
}

export default updateUserName;
