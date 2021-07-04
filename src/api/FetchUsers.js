import axios from "axios";

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
