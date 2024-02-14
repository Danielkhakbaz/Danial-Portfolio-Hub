"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "prisma/client/client";

type BlogPostType = {
  id: number;
};

export const getBlogPost = async ({ id }: BlogPostType) => {
  const post = await Prisma.blogPost.findUnique({
    where: {
      id,
    },
  });

  return post;
};

export const getAndUpdateBlogPost = async ({ id }: BlogPostType) => {
  const post = await getBlogPost({ id });

  const newPost = await Prisma.blogPost.update({
    where: {
      id,
    },
    data: {
      view: post!.view + 1,
    },
  });

  revalidatePath("/blog");

  return newPost;
};
