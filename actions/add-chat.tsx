"use server";

import { Prisma } from "prisma/client/client";
import { revalidatePath } from "next/cache";

type ChatType = {
  image: string;
  user: string;
  message: string;
};

export const addChat = async ({ image, user, message }: ChatType) => {
  await Prisma.chat.create({
    data: {
      image,
      user,
      message,
    },
  });

  revalidatePath("/guestbook");
};
