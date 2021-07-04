import axios from "axios";

const ACCESS_TOKEN = "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";
const EACH_USER = "https://api.github.com/users/";

async function FetchEachUser(login) {
  try {
    const response = await axios.get(`${EACH_USER}${login}`, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("");
  }
}

export default FetchEachUser;
