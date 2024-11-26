// pages/api/auth/login.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/dbConnect';  // Adjust the path if necessary
import User from '../../../../models/User';  // Adjust the path if necessary

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Connect to the database
      await dbConnect();

      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare password
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, role: user.role },  // Payload includes user id and role
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      // Respond with the token and role
      res.status(200).json({ token, role: user.role });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    // Reject any method that's not POST
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
