import { getTranslations } from "next-intl/server";

export default async function Loading() {
    const t = await getTranslations();
    return (
        <div className="w-full h-full grow flex justify-center items-center ">
            <p className="animate-pulse text-2xl">{t("fetching")}</p>
        </div>
    );
}
