import { NextRequest, NextResponse } from 'next/server';

const serverUsername = 'admin@gmail.com';
const serverPassword = 'Admin123!';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (email === serverUsername && password === serverPassword) {
      return NextResponse.json(
        { success: true, message: 'Login Success' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
