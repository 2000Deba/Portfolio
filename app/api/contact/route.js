import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDb";
import Contact from "@/models/Contact";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        // Duplicate check: same name, email, phone
        const exists = await Contact.findOne({
            name: body.name,
            email: body.email,
            phone: body.phone
        });

        if (exists) {
            return NextResponse.json({
                success: false,
                message: "Duplicate entry. Please use different name, email, or phone."
            }, { status: 400 });
        }

        // Save to DB
        const newMessage = new Contact({
            name: body.name,
            phone: body.phone,
            email: body.email,
            message: body.message
        });

        await newMessage.save();


        return NextResponse.json({
            success: true,
            message: "✅ Message saved successfully!"
        });

    } catch (error) {
        console.error("❌ Error saving message:", error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        }, { status: 500 });
    }
}
