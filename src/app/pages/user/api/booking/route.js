// /pages/api/bookings.js
import connectDB from '../../../config/mongoose';
import Booking from '../../models/Booking';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req = NextRequest) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      const reqBody = await req.json();
      const { name, phoneNumber, email, message,status } = reqBody;

      const newBooking = new Booking({
        name,
        email,
        phoneNumber,
        message,
        status
      });

      const booking = await newBooking.save();

      return NextResponse.json({
        message: "Booking created successfully",
        success: true,
        booking
      });
    } catch (err) {
      console.error('Error in booking:', err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
