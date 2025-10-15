import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {headers} from "next/headers";

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text", placeholder: "user name"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                // console.log("-------------------1");
                // console.log(credentials);

                const res = await fetch('http://localhost:8080/api/accounts/signin', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: credentials.username,
                        password: credentials.password
                    }),
                    headers: {'Content-Type': 'application/json'}
                })
                console.log("-------------------2");
                // console.log(res);

                const user = await res.json();
                // console.log(user);
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({token, user, account}) {
            if(user){
                token.id = user.email;
                token.role = user.role;
                token.email = user.email;
                token.name = user.nickname;

                token.accessToken = user.accessToken;
                token.refreshTooken = user.refreshTooken;
                token.expireTime = Date.now() + (1000 * 60 * 60); // 1 hour

            }
            return token;
        },
        async session({session, token, user}) {
            session.user.id = token.id;
            session.user.role = token.role;
            session.user.email = token.email;
            session.user.name = token.name;

            session.user.accessToken = token.accessToken;
            session.user.refreshTooken = token.refreshTooken;
            session.user.expireTime = token.expireTime;

            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};


