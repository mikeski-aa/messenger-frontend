import { LOCAL_URL } from "../../utils/url.const";

async function deleteFriend(userA, userB) {
  // const url = `http://localhost:3000/api/friends?userA=${userA}&userB=${userB}`;

  const url = LOCAL_URL + `friends?userA=${userA}&userB=${userB}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: headerinfo,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default deleteFriend;
