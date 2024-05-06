import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './connection'; // importera connection

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Phonenumber: {
        type: DataTypes.STRING(15),  // antar t-nummer är en sträng
        allowNull: true
    },
    Company: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    UserAgreement: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'Users',
    timestamps: false
});

export default User;
