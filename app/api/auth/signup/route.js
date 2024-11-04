import connectDb from "@/lib/config/db";
import User from "@/lib/model/User";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
export async function POST(req, res) {
    console.log("Post req is reached")
    await connectDb();
    // We use req.json() in next js  , The data in req body can be easily extracted , but in node js there is not json method hence we use req.body there 
    try {
        const { username, email, password } = await req.json();
        console.log("User Name : ", username)
        console.log("Email : ", email)
        console.log("Password :  ", password)
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            console.log("User already exists")
            return  NextResponse.json({ message: "user already exists" })
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password:hashedPass
        })
        await newUser.save();
        return  NextResponse.json({ message: "Success" },{status:200})
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 400 })

    }
    
}