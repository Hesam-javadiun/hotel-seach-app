"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { HOTEL_QULITY } from "@/enum/hotel-quality";
import { QUERY_KEYS } from "@/enum/query-keys";
import { HotelSearchParamsType } from "@/types/search-param-type";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
type SelectorProps<T> = {
    items: { label: string; value: string }[];
    value: T | null;
    onChange: (newValue: T | null) => void;
    emptyLabel: string;
};

function Selector<T>({ items, value, onChange , emptyLabel}: SelectorProps<T>) {
    return (
        <Select items={items} value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{emptyLabel}</SelectLabel>
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

export default function FiltersSortsSelectors() {
    const params = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const t = useTranslations();
    // const queryClient = useQueryClient();
    // const searchParams = params.entries();
    const [quality, setQuality] = useState(
        params.has("quality") ? params.get("quality") : null,
    );

    // const {} = useQueryClient();

    const qualityChangeHandler = (newQuality: HOTEL_QULITY | null) => {
        const newParams = new URLSearchParams(params);
        if (newQuality) {
            newParams.append("quality", newQuality);
        } else {
            newParams.delete("quality");
        }
        setQuality(newQuality);
        router.push(pathName + "?" + newParams.toString());
        // queryClient.invalidateQueries({queryKey: [QUERY_KEYS.HOTELS, newParams]})
        // window.history.replaceState(null, "", pathName + "?" + newParams.toString());
    };

    const qulityItems = Object.values(HOTEL_QULITY).map((quality) => ({
        label: t(quality),
        value: quality,
    }));

    const qulityFilters = (
        <Selector
            items={qulityItems}
            onChange={qualityChangeHandler}
            value={quality as HOTEL_QULITY | null}
            emptyLabel={t("emptySelector")}
        />
    );

    return <ul className="flex wrap p-4 justify-center">{qulityFilters}</ul>;
}


