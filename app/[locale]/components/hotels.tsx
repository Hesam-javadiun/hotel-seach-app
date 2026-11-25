import { GETHotel } from "@/types/GET-hotel-type";
import { use } from "react";
import HotelCard from "./hotel-card";
import { getTranslations } from "next-intl/server";

type HotelsProps = {
    hotelDataPromise: Promise<GETHotel[]>;
    noHotelMessage: string;
};

export default  function Hotels({ hotelDataPromise , noHotelMessage}: HotelsProps) {
    const hotels = use(hotelDataPromise);
    const t = getTranslations();
    
    const emptyContent = (
        <div className="w-full h-full grow flex justify-center items-center ">
            <p className=" text-2xl">{noHotelMessage}</p>
        </div>
    );

    if (hotels.length === 0) {
        return emptyContent;
    }
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grow overflow-y-auto p-4">
            {hotels!.map((hotel) => (
                <HotelCard
                    key={hotel.id}
                    city={hotel.city}
                    description={hotel.description}
                    price={hotel.dailyPrice.toString()}
                    quality={hotel.quality}
                    title={hotel.hotelName}
                    userRate={hotel.userRating.toString()}
                    entryDate={hotel.entryDate}
                    exitDate={hotel.exitDate}
                />
            ))}
        </ul>
    );
}
