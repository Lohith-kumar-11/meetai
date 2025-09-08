import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { polar, checkout, portal} from "@polar-sh/better-auth";

import { db } from "@/db";
import * as schema from "@/db/schema"

import { polarClient } from "./polar";

export const auth = betterAuth({
    // Ensure Better Auth accepts requests from these origins (useful during local dev on different ports)
    // baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    // trustedOrigins: [
    //     "http://localhost:3000",
    //     "http://localhost:3001",
    // ],

    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    authenticatedUsersOnly: true,
                    successUrl: "/upgrade",
                }),
                portal(),
            ],
        }),
    ],
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        },
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },

    emailAndPassword: {
    enabled: true, 
  }, 
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            ...schema,
        },
    }),
});
