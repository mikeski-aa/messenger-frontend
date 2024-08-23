async function convoPermissionCheck(convoid, userid) {
  const url = `http://localhost:3000/api/convopermission?convoid=${convoid}&userid=${userid}`;
  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };

  try {
    const response = await fetch(url, { method: "GET", headers: headerinfo });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.JSON();
    console.log(response);
    return json();
  } catch (error) {
    console.log(error);
  }
}

export default convoPermissionCheck;
