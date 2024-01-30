import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "prisma/client/client";

export async function DELETE(request: NextRequest) {
  const body = await request.json();

  const chat = await Prisma.chat.create({
    data: {
      image: body.image,
      user: body.user,
      message: body.message,
    },
  });

  return NextResponse.json(chat, {
    status: 201,
  });
}
