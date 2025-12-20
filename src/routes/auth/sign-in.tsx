import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate({ to: "/" });
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <Card>
        <CardHeader>
          <span className="text-primary">app logo.</span>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
