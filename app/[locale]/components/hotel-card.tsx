import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import type { HotelSearchParamsType } from "@/types/search-param-type";
import { Badge } from "@/components/ui/badge";
import { getLocale, getTranslations } from "next-intl/server";

type HotelCardProps = {
    title: string;
    description: string;
    price: string;
    city: HotelSearchParamsType["city"];
    quality: HotelSearchParamsType["quality"];
    userRate: HotelSearchParamsType["userRating"];
    entryDate: string;
    exitDate: string;
};

export default async function HotelCard({
    city,
    description,
    price,
    quality,
    title,
    userRate,
    entryDate,
    exitDate,
}: HotelCardProps) {
    const t = await getTranslations("");
    const locale = await getLocale();

    return (
        <Card className="min-h-80 max-h-80">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="flex justify-center gap-4 grow">
                        <span>{t("price")}</span>
                        <Badge>{price}</Badge>
                    </div>
                    <div className="flex justify-center gap-4 grow">
                        <span>{t("userRate")}</span>
                        <Badge>{userRate}</Badge>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center gap-4 grow">
                        <span>{t("quality")}</span>
                        <Badge>{quality}</Badge>
                    </div>
                    <div className="flex justify-center gap-4 grow">
                        <span>{t("city")}</span>
                        <Badge>{city}</Badge>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center gap-4 grow">
                        <span>{t("entryDate")}</span>
                        <Badge>{formatDate(entryDate, locale)}</Badge>
                    </div>
                    <div className="flex justify-center gap-4 grow">
                        <span>{t("exitDate")}</span>
                        <Badge>{formatDate(exitDate, locale)}</Badge>
                    </div>
                </div>
                <span>{t("description")}</span>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    );
}

export function formatDate(date: Date | string, locale: string): string {
    const formatter = new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        calendar: "gregory",
        timeZone: "UTC",
    });

    const parts = formatter.formatToParts(new Date(date));

    const year = parts.find((part) => part.type === "year")!.value;
    const month = parts.find((part) => part.type === "month")!.value;
    const day = parts.find((part) => part.type === "day")!.value;

    return `${year}-${month}-${day}`;
}
