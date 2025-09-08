import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import db from "../../../utils/db"
import User from "../../../models/userModel"

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ session, token }) {
      if (user?._id) token._id = user._id;

      if (user?.isAdmin) token.isAdmin = user.isAdmin;

      return session;
    },
  },
  
  async session({ session, token }) {
    if (token?._id) session.user._id = token._id;

    if(token?.isAdmin) session.user.isAdmin = token.isAdmin

    return token
  },
  providers:[
    CredentialsProvider({
        async authorize(credentials){
            await db.connect

            const user = await User.findOne({
                email: credentials.email,
            })
        }
    })
  ]
});
