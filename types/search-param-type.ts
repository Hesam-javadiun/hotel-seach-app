import { HOTEL_CITIES } from "@/enum/hotel-cities";
import { HOTEL_QULITY } from "@/enum/hotel-quality";

export type HotelSearchParamsType = {
    userRate?: string;
    price?: string; 
    quality?: HOTEL_QULITY;
    city?: HOTEL_CITIES;
} 


