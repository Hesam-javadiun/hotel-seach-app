import { ReactNode } from "react";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";

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
    // if (!hasLocale(routing.locales, locale)) {
    //     notFound();
    // }

    return (
        <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
