import PostForm from "@/components/post-form";
import { storePost } from "@/lib/posts";

import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function createPost(prevstate, formData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    let errors = [];

    if (!title || title.trim().length === 0) {
      errors.push("Title is required.");
    }

    if (!content || content.trim().length === 0) {
      errors.push("Content is required.");
    }

    if (!image) {
      errors.push("image is required");
    }

    if (errors.lenght > 0) {
      return { errors };
    }

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/feed");
  }

  return <PostForm action={createPost} />;
}
