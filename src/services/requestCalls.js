import { LOCAL_URL } from "../../utils/url.const";

async function deleteRequest(id) {
  // const url = `http://localhost:3000/api/request?reqId=${id}`;
  const url = LOCAL_URL + `request?reqId=${id}`;

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

async function getRequestOwnerInfo(id) {
  // const url = `http://localhost:3000/api/reqowner?id=${id}`;
  const url = LOCAL_URL + `reqowner?id=${id}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  try {
    const response = await fetch(url, { method: "GET", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    console.log("JSON FROM OWNER REQ");
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
async function postFriendRequest(targetId, userId) {
  // const url = `http://localhost:3000/api/request?target=${targetId}&user=${userId}`;
  const url = LOCAL_URL + `request?target=${targetId}&user=${userId}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  try {
    const response = await fetch(url, { method: "POST", headers: headerinfo });

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
export { deleteRequest, getRequestOwnerInfo, postFriendRequest };
