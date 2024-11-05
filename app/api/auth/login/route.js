import connectDb from "@/lib/config/db";
import User from "@/lib/model/User";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(req, res) {
    console.log("Post request of login method")
    await connectDb();
    try {
        const { email, password } = await req.json();
        console.log("Email in login backend route : ", email)
        console.log("Password in login route : ", password)
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({message:"User or password something is wrong"},{status:400})
        }
        const matchPass = await bcrypt.compare(password, user.password);
        if (!matchPass) {
            return NextResponse.json({ message: "User or password something is wrong" }, { status: 400 })
        }
        const token = jwt.sign(
            {userId:  user._id, Email : user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" })
        return NextResponse.json({ message: "User Successfully Registered", token }, { status: 200 })

    } catch (error) {
        console.log("Something went wrong while logging ")
        return NextResponse.json({ message: "Something went wrong while logging " ,error})

    }
   
}