import { LOCAL_URL } from "../../utils/url.const";

async function getUserGroups(userid) {
  // const url = `http://localhost:3000/api/group?userid=${userid}`;
  const url = LOCAL_URL + `group?userid=${userid}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  try {
    const response = await fetch(url, { method: "GET", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}

async function postNewGroup(users, name) {
  // const url = `http://localhost:3000/api/group`;
  const url = LOCAL_URL + `group`;

  const headerinfo = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  const body = {
    users: users,
    name: name,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}

export { getUserGroups, postNewGroup };
