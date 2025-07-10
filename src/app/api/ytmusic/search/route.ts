import { NextRequest, NextResponse } from "next/server";
import YTMusic from "ytmusic-api";

export async function GET(request: NextRequest) {
  const ytmusic = new YTMusic();
  await ytmusic.initialize({ cookies: "__Secure-ROLLOUT_TOKEN=CPXE1YHuhbSnvAEQsqPRv-ivjgMYhOmiweivjgM%3D; VISITOR_INFO1_LIVE=U64OdDRc46o; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgYA%3D%3D; PREF=repeat=NONE&autoplay=true&f4=4000000&f6=40000000&tz=Asia.Kolkata; YSC=JHv-yFMWgl8; __Secure-1PSIDTS=sidts-CjIB5H03P2cPPZmItup0ZFu0HpjFdhrz5Tt4Zhs7ubsJ8plcVmRi2O1fjl8AmQXYDJK-ChAA; __Secure-3PSIDTS=sidts-CjIB5H03P2cPPZmItup0ZFu0HpjFdhrz5Tt4Zhs7ubsJ8plcVmRi2O1fjl8AmQXYDJK-ChAA; HSID=AWe0ic2fcN3RAbN6b; SSID=AGIIvog3npkr7GRu9; APISID=yyl7Sx_2Whe_oX46/A3dqomxNl0rUrkKJa; SAPISID=0rOXz5xYF_BRylo9/APKzJWsPlft7LDy5M; __Secure-1PAPISID=0rOXz5xYF_BRylo9/APKzJWsPlft7LDy5M; __Secure-3PAPISID=0rOXz5xYF_BRylo9/APKzJWsPlft7LDy5M; SID=g.a000yghOQ65WNuCUloGsk1Kau5HVXxgSrusTDW9fouMQU3gwm68Co1DATl2CgCioc-xCCR6_PwACgYKAdsSARASFQHGX2MiMZ7bT3tWWKALt1DN0-u-2BoVAUF8yKrO9i700f3-uTRQdnY1YGk20076; __Secure-1PSID=g.a000yghOQ65WNuCUloGsk1Kau5HVXxgSrusTDW9fouMQU3gwm68CSHH8DALPKM-zF9Ba39fuDgACgYKAWwSARASFQHGX2MiT6UJ8ngS7S7i1AhqEo4Q8hoVAUF8yKpMzvKxty-nlyBaLylWK1ma0076; __Secure-3PSID=g.a000yghOQ65WNuCUloGsk1Kau5HVXxgSrusTDW9fouMQU3gwm68Cm1sFmJzv7kuhUtltFlkkkgACgYKAaYSARASFQHGX2Mi3QvvLnoQ5NvMcA5RFs6vmBoVAUF8yKqo9VNT5AwkRyVQAwZEpneS0076; LOGIN_INFO=AFmmF2swRQIhAPx5kewTSLqHqS_vczXipSthYhgijTMbyXXwWd_ttmiTAiA0gmkbTjkbFhMKghB8GvEWpYh16ZO6QLI9Mnt5Y2zq2A:QUQ3MjNmeXpaal9fWWRHRUswX09pOUlVcmlXSm1YaUtOWHNVREpUUWJqcDd0MHlzekJ1UEk1VDFEQU5YSlltTU9EN0t2Si15YVctb0x2eDg2S0g2QUc3NDE1bmk2SWhER1l5dzlCYzRUMnlaRF9MWkFWUTZzMThRcEVlVHFmS29ZTFBIWkhLdmk4UUcwOG1McVQ5ek9hRUw4dU9YT2ktNWpB; SIDCC=AKEyXzUd67hnieyFTJsvsN6O4wFU2ugWih9lfiwDEbLqyvm55tmZWzvAenp06EkhymAKTJlN; __Secure-1PSIDCC=AKEyXzWSGNv3cr-q_XFBSzDWfnrySpx6-EkbnTaXM0MPUndnmxpiWvJ0aT0qi_zTieqIMkzVRw; __Secure-3PSIDCC=AKEyXzWgyyD-8iw0FfiHKybhSiR4nLsr823q6XWxAOhoU_lji-MbZKBsqvB7CgRx9tfWDQak; CONSISTENCY=AKreu9uhvtpLVkweaiIZyfZbchjt1ID2yTTF6zaCu7WBKtGLF-4f9j-zXN7tfydCfy8LJKdwnZA5cR_i92X9O9WjS6pSK6bFPwEzIYpgwZEr9DzDhayUv1ElrvoUlCmR7VqFhvxRCwruLL61hvpVqTlII8HvWijpGuqGC2APi6sxFA" });

  const query = request.nextUrl.searchParams.get("q");
  const type = request.nextUrl.searchParams.get("type");

  if (!query) {
    return NextResponse.json({ message: "No query provided" });
  }

  let results = [];
  if (type === "songs") {
    results = await ytmusic.searchSongs(query);
  } else if (type === "playlists") {
    results = await ytmusic.searchPlaylists(query);
  } else if (type === "albums") {
    results = await ytmusic.searchAlbums(query);
  } else if (type === "artists") {
    results = await ytmusic.searchArtists(query);
  } else {
    results = await ytmusic.search(query);
  }

  return NextResponse.json({ results: results });
}
