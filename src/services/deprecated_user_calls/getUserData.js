import { LOCAL_URL } from "../../../utils/url.const";

async function getUserData(id) {
  // const url = `http://localhost:3000/api/userdata?id=${id}`;
  const url = LOCAL_URL + `userdata?id=${id}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  try {
    const response = await fetch(url, { method: "GET", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();

    console.log("testing user data:");
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default getUserData;
