'use client'

import { QUERY_KEYS } from "@/enum/query-keys"
import { useQuery } from "@tanstack/react-query"
import { getHotels } from "@/services/queries/get-hotels"
import { useSearchParams } from "next/navigation"
import type { HotelSearchParamsType } from "@/types/search-param-type"


export default function Hotels() {
    const searchParams = useSearchParams();

    const {} = useQuery({
        queryKey: [QUERY_KEYS.HOTELS, {...searchParams}],
        queryFn: () => getHotels(searchParams as HotelSearchParamsType)
    })
    
    return null
};
