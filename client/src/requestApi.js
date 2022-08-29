import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGI2NjcwYmZiMmJmNDFlOTAzYWQ1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTY5MjMxNCwiZXhwIjoxNjYxOTUxNTE0fQ.L9Ai_vbPtpP_rWX4btjqcqlLAAwmK7TyItIvDUKTO9k";
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//.currentUser.accessToken
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
