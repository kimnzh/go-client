"use client";
import React from "react";
import { Calendar } from "lucide-react";

interface selectedDateProps {
  date: string;
}

const SelectedDate: React.FC<selectedDateProps> = ({ date }) => {
  return (
    <div className="relative w-full max-w-[680px] h-[120px] mb-8">
      <button
        className="w-full h-full px-4 py-2 bg-[#68875B] border rounded-lg shadow-sm
      flex items-center justify-between"
      >
        <div className="flex gap-8 items-center">
          <Calendar className="w-16 h-16 text-[#3F6131]" />
          <span className="text-3xl text-white">{date}</span>
        </div>
      </button>
    </div>
  );
};

export default SelectedDate;
