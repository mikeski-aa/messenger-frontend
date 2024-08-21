const headerinfo = {
  Authorization: "bearer " + localStorage.getItem("token"),
};

async function getUsernames(username, id) {
  const query = `uname=${username}&id=${id}`;
  const url = "http://localhost:3000/api/users?" + query;
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

export default getUsernames;
