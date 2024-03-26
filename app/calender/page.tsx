"use client";
import { CalendarModule } from "@/components/modules/calender-module";
import ThemedCalendar from "@/components/modules/calender-module/themed-calendar";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import "../custom.css";

const Text1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>
    </div>
  );
};

export default function CalenderPage() {
  const [selectedDay, setSelectedDay] = useState();

  return (
    <div className="flex justify-center items-center h-screen gap-12">
      <div>
        <Text1 className="text-center py-2">Shadcn </Text1>
        <CalendarModule />
      </div>

      <div>
        <Text1 className="text-center py-3">Themed Calendar</Text1>
        <ThemedCalendar
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          // timesMutation={timesMutation}
        />
      </div>
    </div>
  );
}
