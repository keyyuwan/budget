import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CategoriesSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione uma categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Não Essenciais</SelectLabel>
          <SelectItem value="apple">Transporte</SelectItem>
          <SelectItem value="banana">Alimentação</SelectItem>
          <SelectItem value="blueberry">Compras</SelectItem>
          <SelectItem value="grapes">Ganja</SelectItem>
          <SelectItem value="pineapple">Outros</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
