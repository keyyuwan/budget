import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/essentials")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/essentials"!</div>;
}
