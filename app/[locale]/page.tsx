import { QUERY_KEYS } from "@/enum/query-keys";
import getQueryClientRef from "@/lib/tanstack-query/get-query-client";
import { getTranslations } from "next-intl/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import FiltersSortsSelectors from "./components/filters-sorts";
import { HotelSearchParamsType } from "@/types/search-param-type";
import { getHotels } from "@/services/queries/get-hotels";
import { Suspense } from "react";
import HotelCard from "./components/hotel-card";
import { GETHotel } from "@/types/GET-hotel-type";
import Hotels from "./components/hotels";
import CustomLoading from "@/components/loading";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<HotelSearchParamsType>;
}) {
    const t = await getTranslations();
    // const queryClient = getQueryClientRef();
    const params = await searchParams;

    // queryClient.query({
    //     queryKey: [QUERY_KEYS.HOTELS, { ...params }],
    //     queryFn: () =>
    //         getHotels(new URLSearchParams(params) as HotelSearchParamsType),
    // });

    // const hotels = queryClient.getQueryData([
    //     QUERY_KEYS.HOTELS,
    //     { ...params },
    // ]) as GETHotel[];

    const hotelsPromise = getHotels(
        new URLSearchParams(params) as HotelSearchParamsType,
    );

    const loading = <CustomLoading message={t("fetching")} />;

    

    return (
        <div className="h-screen w-screen flex flex-col gap-4 bg-background text-foreground">
            <h1 className="text-center text-3xl mt-4">{t("title")}</h1>
            <FiltersSortsSelectors>
                <Suspense fallback={loading}>
                    <Hotels hotelDataPromise={hotelsPromise} noHotelMessage={t("noHotel")}/>
                    {/* <HydrationBoundary
                    state={dehydrate(queryClient)}
                ></HydrationBoundary> */}
                </Suspense>
            </FiltersSortsSelectors>
        </div>
    );
}
