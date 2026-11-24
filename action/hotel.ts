"use server";
import { get as hotelGETRestAPI } from "@/services/hotel-service";

export const GET = hotelGETRestAPI.bind(
    null,
    `${process.env.HOTEL_SERVICE_DOMAIN}:${process.env.HOTEL_SERVICE_PORT}`,
);

/* 
export const POST = post()

export const PUT = put()

export const DELETE = deleteApi()
 */
