import { HOTEL_CITIES } from "@/enum/hotel-cities";
import { HOTEL_QULITY } from "@/enum/hotel-quality";

export type HotelSearchParamsType = {
    userRating?: string;
    dailyPrice?: string;
    quality?: HOTEL_QULITY;
    city?: HOTEL_CITIES;
    entryDate?: string;
    exitDate?: string;
};
