import axios from "axios";

const KEY = "AIzaSyAE9Khc-pPqGQYLy9hN73rbUtqz7P0mHyI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
