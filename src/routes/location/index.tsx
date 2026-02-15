import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { desc } from "drizzle-orm";
import { db } from "@/db/index";
import { locations } from "@/db/schema";

const columns: ColDef<typeof locations.$inferSelect>[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "createdAt", headerName: "Created At" },
];

const getLocations = createServerFn({
  method: "GET",
}).handler(async () => {
  return await db.query.locations.findMany({
    orderBy: [desc(locations.createdAt)],
  });
});

export const Route = createFileRoute("/location/")({
  component: RouteComponent,
  loader: () => getLocations(),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  console.log(data);

  return (
    <main className="container mx-auto pt-4">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl mb-4">Locations</h1>
        <button className="px-4 py-2 bg-blue-400 rounded" type="button">
          Add
        </button>
      </header>
      <section className="h-96">
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          animateRows
          defaultColDef={{ flex: 1 }}
        />
      </section>
    </main>
  );
}
