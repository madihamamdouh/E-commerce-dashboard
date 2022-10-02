import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGI2NjcwYmZiMmJmNDFlOTAzYWQ1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjU3MzkxNSwiZXhwIjoxNjYyODMzMTE1fQ.fRy4nB1JDed4R6sbgYtqypBy69js8wAdro4jqZqk4CY";
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//.currentUser.accessToken
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
