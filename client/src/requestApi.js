import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmE3YjdiZmFlYzNlY2IzNmQxMjJjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDg5ODI4OCwiZXhwIjoxNjYxMTU3NDg4fQ.Y8R7pLnDLvyjevasUwOTIASahFaaiqzy6JIxzljcYI8";
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//.currentUser.accessToken
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
