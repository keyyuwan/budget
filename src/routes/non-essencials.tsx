import { Container } from "@/components/app/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/non-essencials")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>Hello "/non-essencials"!</div>
    </Container>
  );
}
