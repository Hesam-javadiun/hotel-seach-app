import { ReactNode } from "react";
import "../globals.css";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientProviders from "@/components/providers";

type RootLayoutPropsType = {
    children: ReactNode;
    params: Promise<{ locale: "fa" | "en" }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: RootLayoutPropsType) {
    const { locale } = await params;

    return (
        <html
            lang={locale}
            dir={locale === "en" ? "ltr" : "rtl"}
            className="dark"
        >
            <body>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
