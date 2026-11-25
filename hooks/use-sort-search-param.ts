import { HotelSearchParamsType } from "@/types/search-param-type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SORT_KEY } from "@/enum/sort-key";

export default function useSortSearchParam() {
    const params = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const [sortKey, setSortKey] = useState(
        params.has("_sort") ? params.get("_sort") : null,
    );

    const changeSortKeyHandler = (
        newSortKey: SORT_KEY | null,
    ) => {
        const newParams = new URLSearchParams(params);
        if (newSortKey) {
            if (newParams.has("_sort")) {
                newParams.delete("_sort");
            }
            newParams.append("_sort", newSortKey as string);
        } else {
            newParams.delete("_sort");
        }
        setSortKey(newSortKey );

        router.push(pathName + "?" + newParams.toString());
    };

    return { changeSortKeyHandler, sortKey };
}
