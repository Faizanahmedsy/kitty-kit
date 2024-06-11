import { getPosts } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const post = getPosts();
    return NextResponse.json(
      {
        message: "Post fetched successfully",
        data: post,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch data",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
