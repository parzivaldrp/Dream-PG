import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../config/mongoose';
import User from '../../models/User';
import emailjs from 'emailjs-com';

export async function POST(req = NextRequest) {
  await connectDB();

  if (req.method === 'POST') {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      // Store the OTP in the user's record (in a real application, use a more secure method)
      user.otp = otp;
      await user.save();

      // Send the OTP using EmailJS
      const templateParams = {
        user_email: email,
        otp: otp,
      };

      emailjs.send(
        "service_01v8mip",
        "template_o1gl0eu",
        templateParams,
        "2L-RXrzJUdTAJQ8yu"
      ).then((response) => {
        return NextResponse.json({ message: 'OTP sent' }, { status: 200 });
      }).catch((error) => {
        console.error('Failed to send OTP:', error);
        return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
      });

    } catch (error) {
      console.error('Error sending OTP:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  } else {
    return NextResponse.plainText(`Method ${req.method} Not Allowed`, { status: 405, headers: { 'Allow': ['POST'] } });
  }
}
