import { LOCAL_URL } from "../../utils/url.const";

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

async function getUserDms(userid) {
  // const url = `http://localhost:3000/api/userdms?userid=${userid}`;
  const url = LOCAL_URL + `userdms?userid=${userid}`;

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

async function updateUserStatus(status) {
  // const url = `http://localhost:3000/api/userstatus?status=${status}`;
  const url = LOCAL_URL + `userstatus?status=${status}`;

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

export {
  getUserData,
  getUserDms,
  getUsernames,
  updateUserName,
  updateUserStatus,
};
