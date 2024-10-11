import { LOCAL_URL } from "../../../utils/url.const";

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

export default updateUserStatus;
