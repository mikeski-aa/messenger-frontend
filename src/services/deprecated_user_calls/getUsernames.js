import { LOCAL_URL } from "../../../utils/url.const";

async function getUsernames(username, id) {
  const query = `uname=${username}&id=${id}`;
  // const url = "http://localhost:3000/api/users?" + query;
  const url = LOCAL_URL + "users?" + query;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  try {
    const response = await fetch(url, { method: "GET", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default getUsernames;
