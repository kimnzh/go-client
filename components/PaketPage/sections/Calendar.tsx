"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({
  onDateSelect,
  selectedDate: externalSelectedDate,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    externalSelectedDate
  );

  // Get the first day of the month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  // Get the last day of the month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  // Get the last day of the previous month
  const lastDayOfPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );

  // Get day of week for first day (0-6)
  const firstDayWeekday = firstDayOfMonth.getDay() || 7; // Convert Sunday (0) to 7

  // Calendar navigation
  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  // Date selection handler
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  // Format date to string
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // Generate calendar days
  const generateDays = () => {
    const days = [];
    const totalDays = lastDayOfMonth.getDate();

    // Add days from previous month
    const prevMonthDays = firstDayWeekday - 1;
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      const day = lastDayOfPrevMonth.getDate() - i;
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        day
      );
      days.push(
        <button
          key={`prev-${day}`}
          onClick={() => handleDateSelect(date)}
          className="h-[80px] rounded-full flex items-center justify-center
         text-white opacity-10"
        >
          {day}
        </button>
      );
    }

    // Add days of the current month
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSelected =
        selectedDate?.getDate() === day &&
        selectedDate?.getMonth() === currentDate.getMonth() &&
        selectedDate?.getFullYear() === currentDate.getFullYear();

      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(date)}
          className={`
            h-[80px] rounded-xl flex items-center justify-center
           transition-colors 
            ${
              isSelected
                ? "bg-white text-[#3F6131]"
                : " text-white hover:bg-[#517f3E]"
            }
            ${isToday && !isSelected ? "bg-[#68875B]" : "bg-[#3F6131]"}
          `}
        >
          {day}
        </button>
      );
    }

    // Add days from next month
    const totalCells = 42; // 6 rows × 7 days
    const nextMonthDays = totalCells - days.length;
    for (let day = 1; day <= nextMonthDays; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        day
      );
      days.push(
        <button
          key={`next-${day}`}
          onClick={() => handleDateSelect(date)}
          className="h-[80px] rounded-full flex items-center justify-center
         text-white opacity-10"
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="w-full bg-[#2B3826] max-w-[720px] p-8 border rounded-[36px] shadow-sm font-Lexend">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={previousMonth}
          className="p-2 bg-[#3F6131] hover:bg-[#52873d] rounded-full"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-10 h-10 [filter:invert(100%)]" />
        </button>
        <h2 className="text-4xl text-white font-semibold">
          {formatDate(currentDate)}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 bg-[#3F6131] hover:bg-[#52873d] rounded-full"
          aria-label="Next month"
        >
          <ChevronRight className="w-10 h-10 [filter:invert(100%)]" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-2">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div
            key={day}
            className="h-10 opacity-20 flex items-center justify-center text-3xl text-white"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 text-3xl">{generateDays()}</div>
    </div>
  );
};

export default Calendar;
