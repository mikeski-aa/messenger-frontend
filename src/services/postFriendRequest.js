async function postFriendRequest(targetId, userId) {
  // const url = `http://localhost:3000/api/request?target=${targetId}&user=${userId}`;
  const url = `https://dm-me.adaptable.app/api/request?target=${targetId}&user=${userId}`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  try {
    const response = await fetch(url, { method: "POST", headers: headerinfo });

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

export default postFriendRequest;
