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
      title: body.title,
    },
  });

  return NextResponse.json(post, {
    status: 201,
  });
}
