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

export default deleteConvo;
