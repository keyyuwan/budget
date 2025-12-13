import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/non-essencials')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/non-essencials"!</div>
}
