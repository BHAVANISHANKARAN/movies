import { UserTable } from "../models/users.model.js";

async function createUserQuery({ username, password }) {
  try {
    // console.log(username, password);
    return await UserTable.create({ username, password });
  } catch (error) {
    // return { msg: error.errors.map((val) => val.message).join() };
    return { msg: error.errors.map((val) => val.message).join() };
  }
}

async function getUserByName({ username }) {
  return await UserTable.findOne({
    where: { username },
  });
}

async function getUserService() {
  return await UserTable.findAll();
}

export default { createUserQuery, getUserByName, getUserService };
