
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    database: "pvkbox",
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

module.exports = sequelize;