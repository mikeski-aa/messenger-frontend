const url = "http://localhost:3000/api/login";
const headerinfo = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// const headerTest = {
//   Authorization: "bearer " + localStorage.getItem("token"),
// };

async function postLogin(email, password) {
  const newbody = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: JSON.stringify(newbody),
    });

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const json = await response.json();

    // saves token in localstorage
    localStorage.setItem("token", json.token);

    return json;
  } catch (error) {
    console.log("Error caught: ");
    console.log(error);
  }
}

export default postLogin;
