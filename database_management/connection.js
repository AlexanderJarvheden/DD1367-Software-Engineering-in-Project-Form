const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: "loopbox",
    username: "falu",
    password: "Xcz9oGvg",
    host: "psql-dd1368-ht23.sys.kth.se",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
});

async function connectToDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectToDb();