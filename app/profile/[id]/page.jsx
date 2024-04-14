"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const GeneralProfile = ({ params }) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const userId = params?.id;
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${userId}/posts`);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    if (params?.id) fetchPosts();
  }, []);

  return (
    <Profile
      name={`${userName}'s`}
      desc={`Welcome to ${userName}'s profile`}
      data={posts}
    />
  );
};

export default GeneralProfile;
