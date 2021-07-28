import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Layout from "~/components/Layout/Layout";

export default function User() {
  const [content, setContent] = useState();
  const [session, loading] = useSession();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("api/users");
        const data = await res.json();
        if (data.content) {
          setContent(data.content);
        }
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [session]);

  if (typeof window !== undefined && loading) {
    return null;
  }
  if (!session) {
    return (
      <Layout>
        <h1>You have to sign in to access this page</h1>
      </Layout>
    );
  }
  if (session) {
    return (
      <Layout title="User">
        <h1>This page you can access only if you are signed in</h1>
        <p>{content}</p>
      </Layout>
    );
  }
}
