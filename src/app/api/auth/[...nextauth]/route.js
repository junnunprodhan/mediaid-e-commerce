import dbConnect from "@/config/dbConfig";
import { authOption } from "@/utils/authOption";
import NextAuth from "next-auth";
dbConnect();

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

