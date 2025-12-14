import { Header } from "@/components/app/header";
import { ThemeProvider } from "@/contexts/theme-provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const STORAGE_KEY = "@budget-ui-theme";

const RootLayout = () => (
  <ThemeProvider defaultTheme="dark" storageKey={STORAGE_KEY}>
    <div className="flex h-screen flex-col">
      <Header />

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  </ThemeProvider>
);

export const Route = createRootRoute({ component: RootLayout });
