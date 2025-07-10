import { NextRequest, NextResponse } from "next/server";
import YTMusic from "ytmusic-api";

export async function GET(request: NextRequest) {
    const ytmusic = new YTMusic();
    await ytmusic.initialize(/* Optional: Custom cookies */);

    const result = await ytmusic.getHomeSections()
    return NextResponse.json({ results: result });
}
