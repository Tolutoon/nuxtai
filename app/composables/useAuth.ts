import { signInEmail, signUpEmail } from "better-auth/api";
import { createAuthClient } from "better-auth/vue"



export function useAuth() {
    const authClient = createAuthClient({
        /** The base URL of the server (optional if you're using the same domain) */
        baseURL: "http://localhost:3000"
    });

    return {
        signInEmail: authClient.signIn,
        signUpEmail: authClient.signUp,
    }


}