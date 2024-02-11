// user.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const User = sequelize.define('user', {
    idUser: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

export default User;
