import { getTranslations } from "next-intl/server";
import CustomLoading from "@/components/loading";

export default async function Loading({}) {
    const t = await getTranslations();
    return <CustomLoading message={t("fetching")} />;
}
