async function getRequestOwnerInfo(id) {
  const url = `http://localhost:3000/api/reqowner?id=${id}`;
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

export default getRequestOwnerInfo;
