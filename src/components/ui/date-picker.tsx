"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { ptBR } from "react-day-picker/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const today = new Date();

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(today);

  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="w-full justify-between font-normal"
        >
          {date ? date.toLocaleDateString() : "Selecione uma data"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          lang="pt-BR"
          locale={ptBR}
          selected={date}
          month={today}
          hideNavigation
          disabled={{ before: today, after: endOfMonth }}
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
