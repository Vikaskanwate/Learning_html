const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ error: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
    const token =  jwt.sign({ id: user._id}, "secret", { expiresIn: "1h" });

    res.status(200).json({ message: "Login successfully", token });

  } catch (error) {
    res.status(500).json({erorr:"something went wrong"})
  }
};