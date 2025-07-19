import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface CustomUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  token: string;
}

interface CustomToken {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  accessToken?: string;
}

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
            CodeOtp: credentials?.CodeOtp
          })
        });
        const data = await res.json();

        if (res.ok && data.data) {
          return {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            phone: data.data.phone,
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
    async jwt({ token, user }) {
      if (user) {
        const u = user as CustomUser;
        token.id = u.id;
        token.name = u.name;
        token.email = u.email;
        (token as CustomToken).role = u.role;
        (token as CustomToken).phone = u.phone;
        (token as CustomToken).accessToken = u.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        const t = token as CustomToken;
        Object.assign(session.user, {
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
          role: t.role,
          accessToken: t.accessToken,
        });
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
