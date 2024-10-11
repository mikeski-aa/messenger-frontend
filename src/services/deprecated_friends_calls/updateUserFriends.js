import { LOCAL_URL } from "../../../utils/url.const";

async function updateUserFriends(idA, idB, reqId) {
  // const url = `http://localhost:3000/api/friends?userA=${idA}&userB=${idB}&reqId=${reqId}`;
  const url = LOCAL_URL + `friends?userA=${idA}&userB=${idB}&reqId=${reqId}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  try {
    const response = await fetch(url, { method: "PUT", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default updateUserFriends;
