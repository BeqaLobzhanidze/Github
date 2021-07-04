import axios from "axios";

const ACCESS_TOKEN = "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";
const EACH_USER = "https://api.github.com/users/";

async function FetchRepos(username) {
  const response = await axios.get(
    `${EACH_USER}${username}/repos?per_page=10`,
    {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    }
  );

  return response.data;
}

export default FetchRepos;
