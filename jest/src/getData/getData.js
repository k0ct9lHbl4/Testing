const axios = require("axios");
const mapArrToString = require("../mapArrToString/mapArrToString");

const getData = async () => {
  try {
    const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userIds = users.map((user) => user.id);
    // return mapArrToString(userIds);
    return userIds;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getData;
