import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HotelSearchParamsType } from "@/types/search-param-type";

type UseFilterSearchParam = {
    filterKey: keyof HotelSearchParamsType;
};

export default function useFilterSearchParam<T extends string>({
    filterKey,
}: UseFilterSearchParam) {
    const params = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    // const queryClient = useQueryClient();
    // const searchParams = params.entries();
    const [filter, setFilter] = useState(
        params.has(filterKey) ? params.get(filterKey) : null,
    );

    const filterChangeHandler = (newFilter: T | null) => {
        const newParams = new URLSearchParams(params);
        if (newFilter) {
            if (params.has(filterKey)) {
                newParams.delete(filterKey);
            }
            newParams.append(filterKey, newFilter);
        } else {
            newParams.delete(filterKey);
        }
        setFilter(newFilter);



        router.push(pathName + "?" + newParams.toString());
        // queryClient.invalidateQueries({queryKey: [QUERY_KEYS.HOTELS, newParams]})
        // window.history.replaceState(null, "", pathName + "?" + newParams.toString());
    };

    return { filter, filterChangeHandler };
}
