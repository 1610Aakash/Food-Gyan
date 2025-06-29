const neo4j = require('neo4j-driver');
require('dotenv').config();

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

async function connectDB() {
  const session = driver.session();
  try {
    await session.run("RETURN 1");
    console.log("✅ Connected to Neo4j");
  } catch (error) {
    console.error("❌ Neo4j connection failed:", error);
    process.exit(1);
  } finally {
    await session.close();
  }
}

module.exports = { connectDB, driver };



// const neo4j = require("neo4j-driver");
// require("dotenv").config();

// const driver = neo4j.driver(
//   process.env.NEO4J_URI,
//   neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
// );

// async function connectDB() {
//   const session = driver.session();
//   try {
//     await session.run("RETURN 1");
//     console.log("✅ Connected to Neo4j");
//   } catch (error) {
//     console.error("❌ Neo4j connection failed:", error);
//     process.exit(1);
//   } finally {
//     await session.close();
//   }
// }

// module.exports = {
//   connectDB,
//   driver
// };

