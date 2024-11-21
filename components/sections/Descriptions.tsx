import React from "react";
import Image from "next/image";

function Descriptions() {
  return (
    <div className="min-h-screen w-full mx-auto relative bg-[#44553D] font-Righteous">
      <div className="absolute top-8 left-8 w-[48%] h-[48%] flex items-center pr-4">
        <p className="text-4xl">
          <span className="text-green-300 font-bold">GoExplore</span>
          menawarkan koleksi destinasi wisata terbaik di Indonesia, mulai dari
          pantai-pantai eksotis, pegunungan megah, hingga situs budaya
          bersejarah. Lihat gambar-gambar yang memukau dari berbagai tempat
          menarik di nusantara dan pilih lokasi yang ingin kamu jelajahi.
        </p>
      </div>
      <div className="absolute top-8 right-8 w-[48%] h-[48%] pl-4">
        <Image
          width={1000}
          height={1000}
          alt="Pemandangan pegunungan dan danau yang indah"
          className="rounded-lg w-full h-full object-cover"
          src="/desc-1.png"
        />
      </div>
      <div className="absolute bottom-8 left-8 w-[48%] h-[48%] pr-4">
        <Image
          width={1000}
          height={1000}
          alt="Pemandangan gunung berapi dengan awan di sekitarnya"
          className="rounded-lg w-full h-full object-cover"
          src="/desc-2.png"
        />
      </div>
      <div className="absolute bottom-8 right-8 w-[48%] h-[48%] flex items-center pl-4">
        <p className="text-4xl">
          Sudah menemukan destinasi yang menarik? Langsung saja gunakan menu
          Book atau Reservasi untuk memesan perjalananmu. Proses cepat dan
          mudah, membuat rencana liburan jadi lebih praktis!
        </p>
      </div>
    </div>
  );
}

export default Descriptions;
