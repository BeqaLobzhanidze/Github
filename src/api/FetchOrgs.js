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
