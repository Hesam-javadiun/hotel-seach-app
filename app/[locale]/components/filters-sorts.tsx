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
import { useState } from "react";
import { useRouter } from "next/navigation";
import useFilterSearchParam from "@/hooks/use-filter-search-param";
import { HOTEL_CITIES } from "@/enum/hotel-cities";

type SelectorProps<T> = {
    items: { label: string; value: string }[];
    value: T | null;
    onChange: (newValue: T | null) => void;
    emptyLabel: string;
};

function Selector<T>({ items, value, onChange, emptyLabel }: SelectorProps<T>) {
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
    const t = useTranslations();

    const { filter: quality, filterChangeHandler: qualityChangeHandler } =
        useFilterSearchParam({ filterKey: "quality" });

    const { filter: city, filterChangeHandler: cityChangeHandler } =
        useFilterSearchParam({ filterKey: "city" });

    const qulityFilters = (
        <Selector
            items={Object.values(HOTEL_QULITY).map((quality) => ({
                label: t(quality),
                value: quality,
            }))}
            onChange={qualityChangeHandler}
            value={quality as HOTEL_QULITY | null}
            emptyLabel={t("emptySelector")}
        />
    );

    const cityFilters = (
        <Selector
            items={Object.values(HOTEL_CITIES).map((city) => ({
                label: t(city),
                value: city,
            }))}
            onChange={cityChangeHandler}
            value={city as HOTEL_CITIES | null}
            emptyLabel={t("emptySelector")}
        />
    );



    return (
        <ul className="flex wrap p-4 justify-center gap-4">
            {qulityFilters}
            {cityFilters}
        </ul>
    );
}
