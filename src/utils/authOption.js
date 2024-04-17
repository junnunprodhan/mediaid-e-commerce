// import dbConnect from "@/config/dbConfig";
// import userModel from "@/models/userModel";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import bcrypt from "bcrypt";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import clientPromise from "./mognoAdapter";
// dbConnect();

// export const authOption = {
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env."",
//       clientSecret: process.env."",
//     }),

//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "Username" },
//         password: { label: "Password", type: "Password" },
//       },
//       async authorize(credentials, req) {
//         if (!credentials?.username || !credentials?.password) {
//           return null;
//         }
//         // find user
//         const findUser = await userModel.findOne({
//           $or: [
//             { username: credentials.username },
//             { email: credentials.username },
//           ],
//         });
//         // check user availability
//         if (!findUser) {
//           return null;
//         }
//         // check password match or not
//         if (
//           !findUser.password ||
//           !(await bcrypt.compare(credentials.password, findUser.password))
//         ) {
//           return null;
//         }
//         // Extract user data
//         const {
//           name,
//           _id,
//           email,
//           image,
//           password,
//           typeOfUser,
//           phoneVerified,
//           paymentVerified,
//           gender,
//           dateOfBirth,
//         } = findUser;
//         // Return Data
//         return {
//           _id,
//           name,
//           email,
//           image,
//           password,
//           typeOfUser,
//           phoneVerified,
//           paymentVerified,
//           gender,
//           dateOfBirth,
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/?signin=user",
//   },
//   session: { strategy: "jwt" },

// };
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     if (session.user) {
  //       session.user.id = token.id;
  //     }
  //     return session;
  //   },
  // },