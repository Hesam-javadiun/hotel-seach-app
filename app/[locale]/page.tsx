import { QUERY_KEYS } from "@/enum/query-keys";
import getQueryClientRef from "@/lib/tanstack-query/get-query-client";
import { getTranslations } from "next-intl/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Hotels from "./components/hotels";
import FiltersSortsSelectors from "./components/filters-sorts";


export default async function HomePage() {

    const t = await getTranslations();
    const queryClient = getQueryClientRef();
    /* retrieve search terms */

    await queryClient.query({
        queryKey: [QUERY_KEYS.HOTELS],
        queryFn: async () => null,
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
