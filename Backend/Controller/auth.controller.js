import bcrypt from 'bcrypt'
 import  Jwt from 'jsonwebtoken';
import User from '../models/User.models';

const saltRounds = 10;

// Register new user
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save user to the database
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }``
};

// Login user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in the database
    const user = await User.findOne({ username });

    if (user) {
      // Compare passwords
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Generate and send JWT token
        const token = Jwt.sign({ username: user.username }, '3b5d7f9h2k4m6p8r1t0x');

        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export  { signup /*, login*/ };


