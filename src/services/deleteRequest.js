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

export default deleteRequest;
