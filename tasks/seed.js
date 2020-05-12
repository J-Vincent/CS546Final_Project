const DBFunc = require("../data/index");
const connection = require("../data/config/mongoConnection");
const DOGS = DBFunc.dogs;
const USERS = DBFunc.users;
const ADVERTISERS = DBFunc.advertisers;
const COMMENTS = DBFunc.comments;

async function main() {
  const db = await connection();

  console.log(`SEEDING DONE.`);
  await db.serverConfig.close();
}

main();
