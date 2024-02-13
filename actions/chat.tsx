"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "prisma/client/client";

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

export const deleteChat = async (id: number) => {
  await Prisma.chat.delete({
    where: {
      id,
    },
  });

  revalidatePath("/guestbook");
};
