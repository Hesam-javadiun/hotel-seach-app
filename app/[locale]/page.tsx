import { QUERY_KEYS } from "@/enum/query-keys";
import getQueryClientRef from "@/lib/tanstack-query/get-query-client";
import { getTranslations } from "next-intl/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Hotels from "./components/hotels";
import FiltersSortsSelectors from "./components/filters-sorts";
import { HotelSearchParamsType } from "@/types/search-param-type";
import { getHotels } from "@/services/queries/get-hotels";
import { Suspense } from "react";


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
        queryFn: () => getHotels(new URLSearchParams(params) as HotelSearchParamsType),
    });

    return (
        <>
            <h1>{t("title")}</h1>
            <FiltersSortsSelectors />
            <Suspense fallback={<p>server is doing prefetchs</p>}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <Hotels />
                </HydrationBoundary>
            </Suspense>
        </>
    );
}
