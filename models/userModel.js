const { driver } = require("../config/db");

exports.findUserByEmail = async (email) => {
  const session = driver.session();
  try {
    const result = await session.run(
      `MATCH (u:User {email: $email}) RETURN u`,
      { email }
    );

    if (result.records.length === 0) return null;

    const userNode = result.records[0].get("u").properties;
    return userNode;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  } finally {
    await session.close();
  }
};

exports.createUser = async ({ name, email, password }) => {
  const session = driver.session();
  try {
    await session.run(
      `CREATE (u:User {name: $name, email: $email, password: $password})`,
      { name, email, password }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    await session.close();
  }
};

