import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locations/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="container mx-auto flex align-middle justify-center my-10">
      <form className="bg-blue-100 p-2 h-80">
        <label>
          Name <input name="name" />
        </label>
      </form>
    </main>
  );
}
