import { NextRequest, NextResponse } from "next/server";
import YTMusic from "ytmusic-api";

export async function GET(request: NextRequest) {
    const ytmusic = new YTMusic();
    await ytmusic.initialize(/* Optional: Custom cookies */);

    const songId = request.nextUrl.searchParams.get("id");
    if (!songId) {
        return NextResponse.json({ message: "No songId provided" });
    }
    const results = await ytmusic.getSong(songId);

    return NextResponse.json({ results });
}
