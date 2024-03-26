"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DayPicker } from "react-day-picker";

interface Props {
  selectedDay: any;
  setSelectedDay: any;
}

export default function ThemedCalendar({ selectedDay, setSelectedDay }: Props) {
  const [availableDays, setAvailableDays] = useState([]);
  const [available, setAvailable] = useState(false);
  const [dropOffDate, setDropOffDate] = useState<Date | undefined>();

  const [selectedMonth, setSelectedMonth] = useState<any>(
    dayjs(new Date()).format("MM")
  );

  useEffect(() => {
    const dateStrings = [
      "2024-03-14T18:30:00.000Z",
      "2024-03-15T18:30:00.000Z",
      "2024-03-17T18:30:00.000Z",
      "2024-03-18T18:30:00.000Z",
      "2024-03-19T18:30:00.000Z",
      "2024-03-20T18:30:00.000Z",
      "2024-03-21T18:30:00.000Z",
      "2024-03-22T18:30:00.000Z",
      "2024-03-24T18:30:00.000Z",
      "2024-03-25T18:30:00.000Z",
      "2024-03-26T18:30:00.000Z",
      "2024-03-27T18:30:00.000Z",
      "2024-03-29T18:30:00.000Z",
      "2024-04-01T18:30:00.000Z",
      "2024-04-02T18:30:00.000Z",
      "2024-04-03T18:30:00.000Z",
      "2024-04-04T18:30:00.000Z",
      "2024-04-05T18:30:00.000Z",
      "2024-04-06T18:30:00.000Z",
      "2024-04-07T18:30:00.000Z",
      "2024-04-13T18:30:00.000Z",
      "2024-04-14T18:30:00.000Z",
      "2024-04-15T18:30:00.000Z",
      "2024-04-16T18:30:00.000Z",
      "2024-04-17T18:30:00.000Z",
      "2024-04-18T18:30:00.000Z",
      "2024-04-19T18:30:00.000Z",
      "2024-04-20T18:30:00.000Z",
      "2024-04-21T18:30:00.000Z",
      "2024-04-22T18:30:00.000Z",
      "2024-04-26T18:30:00.000Z",
      "2024-04-27T18:30:00.000Z",
      "2024-04-28T18:30:00.000Z",
      "2024-04-29T18:30:00.000Z",
      "2024-04-30T18:30:00.000Z",
    ];

    //Convert  the dates to date object other wise the calendar will not work

    const dateObjects: any = dateStrings.map(
      (dateString) => new Date(dateString)
    );

    setAvailableDays(dateObjects);
  }, []);

  const availableDatesStyle = {
    backgroundColor: "#eef2ff",
    borderRadius: "50%",
    padding: "0.5rem",
    // height: "2rem",
    width: "50px",

    focus: {
      backgroundColor: "#EEF5FF !important",
    },
    ":hover": {
      backgroundColor: "#FFD700 !important",
      color: "red !important",
    },
  };

  const isDayDisabled = (day: any) => {
    if (!availableDays) return false;
    return !availableDays.some((availableDay) =>
      dayjs(availableDay).isSame(day, "day")
    );
  };

  const handleDayClick = (day: any, modifiers: any) => {
    setDropOffDate(day);
    setAvailable(day && modifiers.available);
  };

  const handleTodayClick = () => {
    const today = new Date();
    if (selectedDay && selectedDay.getMonth() !== today.getMonth()) {
      setSelectedMonth(today.getMonth() + 1); // Months are 0-indexed
    } else {
      setSelectedDay(today);
    }
  };

  const footer = (
    <div className="p-8 flex justify-center items-center">
      {selectedDay && (
        <span>You selected {selectedDay.toLocaleDateString()}</span>
      )}
    </div>
  );

  const customSelectedStyle = {
    // backgroundColor: available ? "#EEF5FF" : "#EEF5FF",
    // backgroundColor: available ? "#EEF5FF" : "#EEF5FF",
    // color: "#525CEB",
  };

  return (
    <>
      <DayPicker
        mode="single"
        today={new Date()}
        selected={selectedDay}
        onSelect={(day) => {
          if (day instanceof Date) {
            setSelectedDay(day);
          }
        }}
        disabled={isDayDisabled}
        modifiers={{ available: availableDays }}
        modifiersStyles={{
          available: availableDatesStyle,
          selected: customSelectedStyle,
        }}
        footer={footer}
        onMonthChange={(month) => {}}
        onDayClick={handleDayClick}
        classNames={
          available
            ? {
                //   day: "text-2xl p-[10px] font-medium rounded-md",
                //   day_selected: "bg-red-300 text-primary-foreground ",
                // day_today: "bg-accent text-accent-foreground",
                //   day_outside: "text-muted-foreground opacity-50",
                //   day_disabled: "text-muted-foreground opacity-50",
                //   day_hidden: "invisible",
              }
            : {
                //   day: "h-9 w-9 p-0 font-normal",
                //   day_selected:
                //     "bg-red-300 hover:bg-teal-100 text-primary-foreground focus:bg-teal-400",
                //   day_today: "bg-accent text-accent-foreground",
                //   day_outside: "text-muted-foreground opacity-50",
                //   day_disabled: "text-muted-foreground opacity-50",
                //   day_hidden: "invisible",
              }
        }
        //   classNames={{
        //     months:
        //       "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        //     month: "space-y-4",
        //     caption: "flex justify-center pt-1 relative items-center",
        //     caption_label: "text-sm font-medium",
        //     nav: "space-x-1 flex items-center",
        //     nav_button:
        //       "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        //     nav_button_previous: "absolute left-1",
        //     nav_button_next: "absolute right-1",
        //     table: "w-full border-collapse space-y-1",
        //     head_row: "flex",
        //     head_cell:
        //       "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        //     row: "flex w-full mt-2",
        //     cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        //     day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        //     day_range_end: "day-range-end",
        //     day_selected:
        //       "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        //     day_today: "bg-accent text-accent-foreground",
        //     day_outside:
        //       "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        //     day_disabled: "text-muted-foreground opacity-50",
        //     day_range_middle:
        //       "aria-selected:bg-accent aria-selected:text-accent-foreground",
        //     day_hidden: "invisible",
        //   }}
      />
      {/* )} */}
    </>
  );
}
