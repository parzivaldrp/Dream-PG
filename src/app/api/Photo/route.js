import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../config/mongoose';
import FormData from '../../models/Multi'; // Assuming your model is named 'Multi'
import fs from 'fs';
import path from 'path';

export async function POST(req = NextRequest) {
  if (req.method === 'POST') {
    await connectDB();
    try {
      // Log the request body to diagnose the issue
      console.log('Request Body:', req.body);

      // Check if request body is in JSON format
      let formData;
      if (req.body instanceof Object) {
        formData = req.body;
      } else {
        // Parse the JSON string
        formData = JSON.parse(req.body);
      }

      // Receive form data including image files
      const { propertyImages, ...restFormData } = formData;

      // Save the images to the public folder
      const imagePaths = [];
      for (let i = 0; i < propertyImages.length; i++) {
        const image = propertyImages[i];
        const filePath = `/public/images/${Date.now()}_${image.name}`;
        const fullPath = path.join(process.cwd(), filePath);
        // Ensure the image data is base64 encoded before writing
        if (image.data.startsWith('data:')) {
          const base64Data = image.data.split(',')[1];
          fs.writeFileSync(fullPath, base64Data, 'base64');
        } else {
          fs.writeFileSync(fullPath, image.data, 'binary'); // If data is not base64, write as binary
        }
        imagePaths.push(filePath);
      }

      // Store the paths of the saved images in the formData
      const formDataWithImagePaths = { ...restFormData, propertyImages: imagePaths };

      // Create a new FormData document with the form data
      const newFormData = new FormData(formDataWithImagePaths);
      await newFormData.save();

      return NextResponse.json({ message: 'Form data submitted successfully' });
    } catch (error) {
      console.error('Error saving form data:', error.message);
      return NextResponse.json({ error: 'Failed to submit form data' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}