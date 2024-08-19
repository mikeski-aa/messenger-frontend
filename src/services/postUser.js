const url = "http://localhost:3000/api/register";
const headerinfo = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
// function for calling my api and creating a new user
async function postUser(username, email, password, confirmPassword) {
  const body = {
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headerinfo,
    });

    console.log(response);

    if (!response.ok) {
      console.log("response NOT OK!");
      console.log(response.body);
      throw new Error(response.status);
    }

    const json = await response.json();
    console.log(json);
    console.log(json.body);

    return json;
  } catch (error) {
    console.log("try, catch ERROR!");
    console.log(error);

    return error;
  }
}

export default postUser;
