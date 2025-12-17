import { Container } from "@/components/app/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/essentials")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>Hello "/essentials"!</div>
    </Container>
  );
}
