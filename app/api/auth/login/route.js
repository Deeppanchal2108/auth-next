import connectDb from "@/lib/config/db";
import User from "@/lib/model/User";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(req, res) {
    await connectDb();
    try {
        const { email, password } = await req.json();
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({message:"User or password something is wrong"})
        }
        const matchPass = await bcrypt.compare(password, user.password);
        if (!matchPass) {
            return NextResponse.json({ message: "User or password something is wrong" })
        }
        const token = jwt.sign(
            {userId:  user._id, Email : user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" })
        return NextResponse.json({ message: "User Successfully Registered",token })

    } catch (error) {
        console.log("Something went wrong while logging ")
        return NextResponse.json({ message: "Something went wrong while logging " ,error})

    }
   
}