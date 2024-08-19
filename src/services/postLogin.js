const url = "http://localhost:3000/api/login";
const headerinfo = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

async function postLogin(email, password) {
  const newbody = {
    email: email,
    password: password,
  };
  console.log(newbody);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headerinfo,
      body: JSON.stringify(newbody),
    });
    console.log(newbody);
    console.log(response);

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}

export default postLogin;
