import axios from "axios";
const url = "http://localhost:3000/api/user";
// function for calling my api and creating a new user
async function postUser(username, email, password, confirmPassword) {
  const body = {
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  };

  try {
    const response = await axios({
      method: "POST",
      url: url,
      data: body,
    });

    console.log(response);

    if (!response.status != 200) {
      throw new Error(`Error: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log("try, catch ERROR!");

    return console.log(error);
  }
}

export default postUser;
