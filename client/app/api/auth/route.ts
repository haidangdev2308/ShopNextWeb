export async function POST(request: Request) {
  //request to next server
  const res = await request.json();
  const ssToken = res.sessionToken as string;
  if (!ssToken) {
    return Response.json(
      { message: "No session token found" },
      { status: 400 }
    );
  }
  return Response.json(res, {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${ssToken}; Path=/; HttpOnly`,
    },
  });
}
