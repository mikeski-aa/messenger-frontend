import { LOCAL_URL } from "../../utils/url.const";
// const url = "http://localhost:3000/api/validate";
// const url = `https://dm-me.adaptable.app/api/validate`;

async function validateUser() {
  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  const url = LOCAL_URL + "validate";
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

export default validateUser;
