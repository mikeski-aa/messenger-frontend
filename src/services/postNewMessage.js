async function postNewMessage(convoid, authorid, authorname, message) {
  const url = `http://localhost:3000/api/message?convoid=${convoid}&userid=${authorid}`;
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

  console.log(body);

  try {
    const response = fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}

export default postNewMessage;
