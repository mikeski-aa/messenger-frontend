const url = "http://localhost:3000/api/validate";
const headerinfo = {
  Authorization: "bearer " + localStorage.getItem("token"),
};

async function validateUser() {
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
