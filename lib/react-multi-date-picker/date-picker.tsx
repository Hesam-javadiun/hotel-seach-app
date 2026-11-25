import ReactMultiDatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";

import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import type { DatePickerProps as ReactDatePickerProps } from "react-multi-date-picker";

type DatePickerProps = {
    locale: "fa" | "en";
} & ReactDatePickerProps

export default function DatePicker({
    locale,
    ...props
}: DatePickerProps) {
    const isPersian = locale === "fa";

    return (
        <ReactMultiDatePicker
            calendar={isPersian ? persian : gregorian}
            locale={isPersian ? persian_fa : gregorian_en}
            {...props}
        />
    );
}
