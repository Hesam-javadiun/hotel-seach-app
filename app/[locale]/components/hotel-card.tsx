import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import type { HotelSearchParamsType } from "@/types/search-param-type";
import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";

type HotelCardProps = {
    title: string;
    description: string;
    price: string;
    city: HotelSearchParamsType["city"];
    quality: HotelSearchParamsType["quality"];
    userRate: HotelSearchParamsType["userRate"];
};

export default async function HotelCard({
    city,
    description,
    price,
    quality,
    title,
    userRate,
}: HotelCardProps) {
    const t = await getTranslations("");
    return (
        <Card className="min-h-40">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div>
                    <div className="flex justify-between">
                        <span>{t("price")}</span>
                        <Badge>{price}</Badge>
                    </div>
                    <div className="flex justify-between">
                        <span>{t("userRate")}</span>
                        <Badge>{userRate}</Badge>
                    </div>
                </div>
                <span>{t("description")}</span>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    );
}
