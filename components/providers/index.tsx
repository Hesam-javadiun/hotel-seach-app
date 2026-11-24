import type { ReactNode } from "react";
import QueryClientProvider from "../../lib/tanstack-query/query-client-provider";
import { NextIntlClientProvider } from "next-intl";


export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </QueryClientProvider>
    );
}
