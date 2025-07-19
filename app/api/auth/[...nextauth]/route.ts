import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        CodeOtp: { label: "CodeOtp", type: "text" },
        name: { label: "name", type: "text" },
        email: { label: "email", type: "text" },
        phone: { label: "phone", type: "text" },
        password: { label: "password", type: "text" }
      },
      async authorize(credentials) {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_2}/Otpcode`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
           phone: credentials?.phone,
           CodeOtp:credentials?.CodeOtp
          })
        });
        const data = await res.json();

        if (res.ok && data.data) {
          return {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            phone:data.data.phone,
            role: data.data.role,
            token: data.data.token
          };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: {
    async jwt({token , user}) {
      if(user){
        token.id = user.id;
        token.name =user.name;
        token.email = user.email;
        token.role =user.role;
        token.phone = user.phone ;
        token.accessToken=user.token ;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
        (session.user as any).name = token.name;
        (session.user as any).email = token.email;
        (session.user as any).phone = token.phone;
        (session.user as any).role = token.role;
        (session.user as any).accessToken = token.accessToken;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
