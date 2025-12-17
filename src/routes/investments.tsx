import { Container } from "@/components/app/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/investments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>Hello "/investments"!</div>
    </Container>
  );
}
