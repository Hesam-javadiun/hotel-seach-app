import { GETHotel } from "@/types/GET-hotel-type";
import { use } from "react";
import HotelCard from "./hotel-card";

type HotelsProps = {
    hotelDataPromise: Promise<GETHotel[]>;
};

export default function Hotels({ hotelDataPromise }: HotelsProps) {
    const hotels = use(hotelDataPromise);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 grow overflow-y-auto p-4">
            {hotels!.map((hotel) => (
                <HotelCard
                    key={hotel.id}
                    city={hotel.city}
                    description={hotel.description}
                    price={hotel.dailyPrice.toString()}
                    quality={hotel.quality}
                    title={hotel.hotelName}
                    userRate={hotel.userRating.toString()}
                />
            ))}
        </ul>
    );
}
