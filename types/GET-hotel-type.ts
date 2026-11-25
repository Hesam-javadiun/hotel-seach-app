import { HOTEL_QULITY } from "@/enum/hotel-quality";
import { HOTEL_CITIES } from "@/enum/hotel-cities";

export type GETHotel = {
    id: string;
    hotelName: string;
    dailyPrice: number;
    quality: HOTEL_QULITY;
    userRating: 4;
    description: string;
    entryDate: string;
    exitDate: string;
    city: HOTEL_CITIES;
};
