import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SORT_KEY } from "@/enum/sort-key";

type RadioBtnsProps = {
    items: {
        id: string;
        label: string;
        value: SORT_KEY | null;
    }[];
    onChange: (val: SORT_KEY | null) => void;
    value: SORT_KEY | null;
};

export function RadioBtns({ items, onChange, value }: RadioBtnsProps) {
    return (
        <RadioGroup
            className="w-fit flex gap-4"
            value={value}
            onValueChange={onChange}
        >
            {items.map(({ id, label, value }) => (
                <div className="flex items-center gap-3" key={id}>
                    <RadioGroupItem value={value} id={id} />
                    <Label htmlFor={id}>{label}</Label>
                </div>
            ))}
        </RadioGroup>
    );
}
