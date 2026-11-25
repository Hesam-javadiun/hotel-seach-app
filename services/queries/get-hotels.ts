import { GET } from "@/action/hotel";
import { HotelSearchParamsType } from "@/types/search-param-type";
import type { GETHotel } from "@/types/GET-hotel-type";

type GetHotelsFnInputs = HotelSearchParamsType;

export async function getHotels(searchParams: GetHotelsFnInputs) {
    return await new Promise<GETHotel[]>((resolve) => {
        setTimeout(() => {
            const hotels = GET<GETHotel[]>(
                `/hotels?${searchParams.toString()}`,
            );
            resolve(hotels);
        }, 1000);
    });
}
