import { GET } from "@/action/hotel";
import { HotelSearchParamsType } from "@/types/search-param-type";

type GetHotelsFnInputs = HotelSearchParamsType;

export async function getHotels(searchParams: GetHotelsFnInputs) {
    const hotels = await GET(`hotels/${searchParams.toString()}`);
    return hotels;
}
