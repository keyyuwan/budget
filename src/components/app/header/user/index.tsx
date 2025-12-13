import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HelpCircleIcon,
  LogOutIcon,
  MessageCircleIcon,
  UserIcon,
} from "lucide-react";

export function User() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10 border">
          <AvatarImage src="https://github.com/keyyuwan.png" alt="@shadcn" />
          <AvatarFallback>KW</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon className="size-4" />
            Perfil
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HelpCircleIcon className="size-4" />
            Ajuda
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageCircleIcon className="size-4" />
            Feedback
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem className="text-destructive">
          <LogOutIcon className="size-4 text-destructive" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
