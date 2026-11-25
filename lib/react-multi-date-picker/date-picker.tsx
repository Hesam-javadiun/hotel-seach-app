import ReactMultiDatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";

import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import type { DatePickerProps as ReactDatePickerProps } from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";

type DatePickerProps<
    Multiple extends boolean = false,
    Range extends boolean = false,
> = {
    locale: string;
} & ReactDatePickerProps<false, false>;

export default function DatePicker({ locale, ...props }: DatePickerProps) {
    const isPersian = locale === "fa";

    return (
        <ReactMultiDatePicker
            calendar={isPersian ? persian : gregorian}
            locale={isPersian ? persian_fa : gregorian_en}
            {...props}
        />
    );
}

export function toDateObject(value: string): DateObject {
    return new DateObject(new Date(value) ?? '');
}

export function toISOString(date: DateObject | null): string | null {
    return date?.toDate().toISOString() ?? null;
}
