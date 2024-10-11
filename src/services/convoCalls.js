import { LOCAL_URL } from "../../utils/url.const";

async function deleteConvo(convoId, userId) {
  // const url = `http://localhost:3000/api/convo/${convoId}?convoid=${convoId}&userid=${userId}`;
  const url =
    LOCAL_URL + `convo/${convoId}?convoid=${convoId}&userid=${userId}`;

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

async function getConvo(convoid, userid) {
  // const url = `http://localhost:3000/api/convo?convoid=${convoid}&userid=${userid}`;
  const url = LOCAL_URL + `convo?convoid=${convoid}&userid=${userid}`;

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
    return { error: error };
  }
}

async function postConverastion(users) {
  // const url = `http://localhost:3000/api/convo`;
  const url = LOCAL_URL + `convo`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const newBody = {
    users: users,
  };

  console.log(newBody);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: JSON.stringify(newBody),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function postNewMessage(convoid, authorid, authorname, message) {
  // const url = `http://localhost:3000/api/message?convoid=${convoid}&userid=${authorid}`;
  const url = LOCAL_URL + `message?convoid=${convoid}&userid=${authorid}`;

  const headerinfo = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  const body = {
    convoid: convoid,
    authorid: authorid,
    authorname: authorname,
    message: message,
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

export { deleteConvo, getConvo, postConverastion, postNewMessage };
