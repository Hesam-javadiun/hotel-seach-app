import { QUERY_KEYS } from "@/enum/query-keys";
import getQueryClientRef from "@/lib/tanstack-query/get-query-client";
import { getTranslations } from "next-intl/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Hotels from "./components/hotels";
import FiltersSortsSelectors from "./components/filters-sorts";
import { HotelSearchParamsType } from "@/types/search-param-type";
import { getHotels } from "@/services/queries/get-hotels";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<HotelSearchParamsType>;
}) {
    const t = await getTranslations();
    const queryClient = getQueryClientRef();
    const params = await searchParams;
    
    await queryClient.query({
        queryKey: [QUERY_KEYS.HOTELS, { ...params }],
        queryFn: () => getHotels(searchParams as HotelSearchParamsType),
    });

    return (
        <>
            <h1>{t("title")}</h1>
            <FiltersSortsSelectors />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Hotels />
            </HydrationBoundary>
        </>
    );
}
