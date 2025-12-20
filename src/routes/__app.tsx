import { Header } from "@/components/app/header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const AppLayout = () => (
  <div className="flex h-screen flex-col">
    <Header />

    <main>
      <Outlet />
    </main>
  </div>
);

export const Route = createFileRoute("/__app")({
  component: AppLayout,
});
