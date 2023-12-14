export const DATE_PICKER_INTL_TRANSLATIONS = {
  era: "era",
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  dayPeriod: "AM/PM",
  calendar: "Calendar",
  startDate: "Start Date",
  endDate: "End Date",
  weekday: "day of the week",
  timeZoneName: "time zone",
  selectedDateDescription: (date: string) => `Selected Date: ${date}`,
  selectedRangeDescription: (startDate: string, endDate: string) =>
    `Selected Range: ${startDate} to ${endDate}`,
  selectedTimeDescription: (time: string) => `Selected Time: ${time}`,
};

export type DatePickerIntlTranslations = typeof DATE_PICKER_INTL_TRANSLATIONS;