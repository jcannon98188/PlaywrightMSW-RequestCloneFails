import { rest } from "msw";

export const handlers = [
  rest.post("/api/test", async (req, res, ctx) => {
    console.log("req: ", req);
    const reqBody = await req.json();
    console.log("req body: ", reqBody);
    return res(ctx.status(200), ctx.json(reqBody));
  }),
];
