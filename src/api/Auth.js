import axios from "axios";

const REACT_APP = "https://comm-auth.kapo.dev";

async function SignUp(user) {
  const response = await axios.post(`${REACT_APP}/auth/signup`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

async function SignIn({ username, password }) {
  const response = await axios.post(
    `${REACT_APP}/auth/signin`,
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export { SignUp, SignIn };
