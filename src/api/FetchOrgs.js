import axios from "axios";

const ACCESS_TOKEN = "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";
const EACH_USER = "https://api.github.com/users/";

async function FetchOrgs(username) {
  const response = await axios.get(`${EACH_USER}${username}/orgs?per_page=3`, {
    headers: {
      Authorization: `token ${ACCESS_TOKEN}`,
    },
  });

  return response.data;
}

export default FetchOrgs;
