import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "@/db/index";
import { locations } from "@/db/schema";

const getLocation = createServerFn({
  method: "GET",
})
  .inputValidator((data) => z.object({ name: z.string() }).parse(data))
  .handler(({ data }) =>
    db.query.locations.findFirst({ where: eq(locations.name, data.name) }),
  );

export const Route = createFileRoute("/locations/$name")({
  component: RouteComponent,
  loader: ({ params }) => getLocation({ data: params }),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <div>Hello {data?.name}</div>;
}
