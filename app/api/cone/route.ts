import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const height = Number(searchParams.get("height"));
  const radius = Number(searchParams.get("radius"));
  const triangleCount = Number(searchParams.get("triangleCount"));

  return Response.json(getCone(height, radius, triangleCount));
}

function getCone(height: number, radius: number, triangleCount: number) {
  let l: number = 0;
  const cone: number[] = [];
  const z = 0;
  for (let i = 0; i < triangleCount; i++) {
    let cos = radius * Math.cos(l);
    let sin = radius * Math.sin(l);
    l += (2 * Math.PI) / triangleCount;
    let cos2 = radius * Math.cos(l);
    let sin2 = radius * Math.sin(l);
    cone.push(
      z,
      z,
      z,

      cos,
      sin,
      z,

      cos2,
      sin2,
      z,

      z,
      z,
      height,

      cos,
      sin,
      z,

      cos2,
      sin2,
      z
    );
  }
  return cone;
}
