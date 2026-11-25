"use client";

import { HOTEL_QULITY } from "@/enum/hotel-quality";
import { useLocale, useTranslations } from "next-intl";
import useFilterSearchParam from "@/hooks/use-filter-search-param";
import { HOTEL_CITIES } from "@/enum/hotel-cities";
import DatePicker from "@/lib/react-multi-date-picker";
import Selector from "./selector";
import { RadioBtns } from "./radio-btns";
import { SORT_KEY } from "@/enum/sort-key";
import { ReactNode } from "react";
import Loading from "@/components/loading";

export default function FiltersSortsSelectors({
    children,
}: {
    children: ReactNode;
}) {
    const t = useTranslations();
    const locale = useLocale();

    const {
        filter: quality,
        filterChangeHandler: qualityChangeHandler,
        isPending: isQualitySearchPending,
    } = useFilterSearchParam({ filterKey: "quality" });

    const {
        filter: city,
        filterChangeHandler: cityChangeHandler,
        isPending: isCitySearchPending,
    } = useFilterSearchParam({ filterKey: "city" });

    // const { changeSortKeyHandler, sortKey } = useSortSearchParam();
    const {
        filter: sortKey,
        filterChangeHandler: changeSortKeyHandler,
        isPending: isSortingPending,
    } = useFilterSearchParam({ filterKey: "_sort" });

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
    console.log("object", [...Object.values(SORT_KEY), null]);
    const sortRadioBtns = (
        <RadioBtns
            items={[...Object.values(SORT_KEY), null].map((key) => ({
                value: key,
                label: key ? t(key as string) : t("none"),
                id: key ?? "none",
            }))}
            onChange={changeSortKeyHandler}
            value={sortKey as SORT_KEY}
        />
    );

    const isLoading =
        isQualitySearchPending || isCitySearchPending || isSortingPending;
    return (
        <>
            <ul className="flex flex-col p-4 justify-center gap-4">
                <div className="flex wrap p-4 justify-center gap-4">
                    {qulityFilters}
                    {cityFilters}
                </div>
                <div className="flex justify-center">{sortRadioBtns}</div>
            </ul>
            {isLoading ? <Loading message={t("fetching")} /> : children}
        </>
    );
}
