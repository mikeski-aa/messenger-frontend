async function getConvo(convoid, userid) {
  // const url = `http://localhost:3000/api/convo?convoid=${convoid}&userid=${userid}`;
  const url = `https://dm-me.adaptable.app/api/convo?convoid=${convoid}&userid=${userid}`;

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

export default getConvo;
