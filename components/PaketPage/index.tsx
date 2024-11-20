"use client";
import React, { useState } from "react";
import Calendar from "./sections/Calendar";
import Dropdown from "./sections/Dropdown";
import SelectedDate from "./sections/SelectedDate";

const optionUsia = ["Dewasa", "Anak - anak"];
const optionPaket = ["Paket 1", "Paket 2", "Paket 3"];

const PaketPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <main className="px-16 pt-28">
      <div className="flex">
        <Calendar
          onDateSelect={handleDateSelect}
          selectedDate={selectedDate || undefined}
        />
        <div className="w-full px-8">
          <Dropdown
            placeholder={"Pilih Usia"}
            options={optionUsia}
            symbol={true}
          />
          <Dropdown
            placeholder={"Pilih Usia"}
            options={optionUsia}
            symbol={true}
          />
          <SelectedDate
            date={
              selectedDate
                ? selectedDate.toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Tanggal belum dipilih"
            }
          />
          <Dropdown
            placeholder={"Pilih Paket"}
            options={optionPaket}
            symbol={false}
          />
        </div>
      </div>
    </main>
  );
};

export default PaketPage;
