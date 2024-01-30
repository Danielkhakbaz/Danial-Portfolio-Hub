"use server";

import { Prisma } from "prisma/client/client";
import { revalidatePath } from "next/cache";

export const deleteChat = async (id: number) => {
  await Prisma.chat.delete({
    where: {
      id,
    },
  });

  revalidatePath("/guestbook");
};
