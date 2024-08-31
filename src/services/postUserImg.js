async function postUserImg(file) {
  // const url = `http://localhost:3000/api/profileimg`;
  const url = `https://dm-me.adaptable.app/api/profileimg`;

  const headerinfo = {
    Authorization: "bearer " + localStorage.getItem("token"),
  };
  const formData = new FormData();
  formData.append("profpic", file);
  console.log(formData);
  console.log(typeof formData);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default postUserImg;
