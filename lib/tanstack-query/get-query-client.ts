import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";
let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
    if (typeof window === "undefined") return new QueryClient();
    browserQueryClient ??= new QueryClient();
    return browserQueryClient;
}

const getQueryClientRef = cache(() => getQueryClient());

export default getQueryClientRef;



