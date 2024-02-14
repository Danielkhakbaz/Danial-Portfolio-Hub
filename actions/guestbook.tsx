"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "prisma/client/client";

type MessageType = {
  image: string;
  user: string;
  message: string;
};

export const addMessage = async ({ image, user, message }: MessageType) => {
  await Prisma.guestbookMessage.create({
    data: {
      image,
      user,
      message,
    },
  });

  revalidatePath("/guestbook");
};

export const deleteMessage = async (id: number) => {
  await Prisma.guestbookMessage.delete({
    where: {
      id,
    },
  });

  revalidatePath("/guestbook");
};
