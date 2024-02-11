import User from '../models/user.model.js';
import sequelize from '../dbconnection.js';

export const allUsers = async (req,res) =>{

    const users = await User.findAll();
    res.json(users)
};

export const register = async (req, res) => {
  const {
    UserName,
    Email,
    Password
  } = req.body;

  try {
      const newUser = await User.create({
        UserName,
        Email,
        Password
      });

      console.log("Este es el nuevo usuario: ", newUser);
      // Envía la información del nuevo usuario en formato JSON como respuesta
      res.json(newUser);

  } catch (error) {
    console.log("Este es el error: ", error);
    // Envía una respuesta con un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ message: error.message });
  }
};

