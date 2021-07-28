import React from "react";
import Link from "next/dist/client/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function UserSignIn() {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <div>
      {!session && (
        <div>
          <h2>Welcome to the sign in page</h2>
          <p>Not signed in</p>
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
      {session && (
        <div>
          <button>
            <Link href="/user">Go to the User page</Link>
          </button>
          <p>You are now signed in as {session.user.name}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
