import connectDB from '../../../config/mongoose';
import User from '../../models/User';

export  async function POST(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { email, otp } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if the OTP matches
      if (user.otp === otp) {
        // OTP verified, clear the OTP and allow the user to reset the password
        user.otp = null;
        await user.save();
        return res.status(200).json({ message: 'OTP verified' });
      } else {
        return res.status(400).json({ error: 'Invalid OTP' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
