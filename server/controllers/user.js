const { validateEmail, validateLength } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      password,
      username,
      email,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        mesage: "invalid email address",
      });
    }

    const check = await User.findOne({ email });

    if (check) {
      return res.status(400).json({
        mesage:
          "this email address already exists,try with different email address",
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        mesage: "first name between 3 and 30 charachters",
      });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        mesage: "last name between 4 and 30 charachters",
      });
    }

    if (!validateLength(password, 6, 60)) {
      return res.status(400).json({
        mesage: "password must be at lastest 6 charachters",
      });
    }

    const bcryptedPassword = await bcrypt.hash(password, 12);

    console.log(bcryptedPassword);
    return;
    const user = await new User({
      first_name,
      last_name,
      password,
      username,
      email,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
