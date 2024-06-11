import { getHelpers } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const helpers = getHelpers();
    return NextResponse.json(
      {
        message: "Helpers fetched successfully",
        data: helpers,
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
