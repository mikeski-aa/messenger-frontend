async function postConverastion(users) {
  const url = `http://localhost:3000/api/convo`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const newBody = {
    users: users,
  };

  console.log(newBody);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: JSON.stringify(newBody),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default postConverastion;
