import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type SelectorProps<T> = {
    items: { label: string; value: string | null }[];
    value: T | null;
    onChange: (newValue: T | null) => void;
    // emptyLabel: string;

};

export default function Selector<T>({ items, value, onChange,  }: SelectorProps<T>) {
    return (
        <Select items={items} value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>{emptyLabel}</SelectLabel> */}
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
