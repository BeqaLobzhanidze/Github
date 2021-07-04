import axios from "axios";

//const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const access_token = "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";

async function FetchUsers(number) {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=followers:%3E=1000&per_page=${number}`,
      {
        headers: {
          Authorization: `token ${access_token}`,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    throw new Error(error);
  }
}

export default FetchUsers;
