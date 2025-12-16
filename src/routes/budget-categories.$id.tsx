import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/budget-categories/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/categories/$id"!</div>;
}
