import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "prisma/client/client";

export async function GET() {
  const posts = await Prisma.blogPost.findMany();

  return NextResponse.json(posts, {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const post = await Prisma.blogPost.create({
    data: {
      id: body.id,
      title: body.title,
    },
  });

  return NextResponse.json(post, {
    status: 201,
  });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();

  await Prisma.blogPost.delete({
    where: {
      id: body.id,
    },
  });

  return NextResponse.json(
    { message: "Delete was successfull!" },
    {
      status: 200,
    }
  );
}
