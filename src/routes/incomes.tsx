import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/incomes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/incomes"!</div>;
}
