"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "prisma/client/client";

type BlogPostType = {
  id: number;
  view: number;
};

export const getBlogPost = async ({ id }: Omit<BlogPostType, "view">) => {
  const post = await Prisma.blogPost.findUnique({
    where: {
      id,
    },
  });

  return post;
};

export const addViewer = async ({ id, view }: BlogPostType) => {
  await Prisma.blogPost.update({
    where: {
      id,
    },
    data: { view },
  });

  revalidatePath("/blog");
};
