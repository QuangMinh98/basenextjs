import axios from "axios";

export const getUsers = async () => {
  const result = await axios.get("https://reqres.in/api/users");

  return result.data;
};
