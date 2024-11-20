import React from "react";

const pakets = [
  {
    heading: "PAKET 1",
    id: 1,
    tag: "paket-1",
    title: "Paket Wisata Sehari (One-Day Tour",
    list: [
      "Harga: Rp 500.000 - Rp 800.000 per orang",
      "Fasilitas yang Termasuk: Transportasi lokal (penjemputan dan pengantaran), tiket masuk ke atraksi utama, pemandu wisata, dan makanan ringan.",
      "Catatan: Harga dapat bervariasi tergantung destinasi dan fasilitas tambahan seperti makan siang atau tambahan spot wisata.",
    ],
  },
  {
    heading: "PAKET 2",
    id: 2,
    tag: "paket-2",
    title: "Paket Ekspedisi Petualangan (Adventure Tour, 2-3 Hari)",
    list: [
      "Harga: Rp 1.500.000 - Rp 3.000.000 per orang",
      "Fasilitas yang Termasuk: Transportasi, tiket masuk, pemandu profesional, peralatan khusus (seperti tenda, alat diving, atau camping), serta makan selama ekspedisi.",
      "Catatan: Harga bervariasi berdasarkan durasi perjalanan, jenis aktivitas petualangan, dan jumlah peserta.",
    ],
  },
  {
    heading: "PAKET 3",
    id: 3,
    tag: "paket-3",
    title: "Paket Wisata Budaya dan Alam (Cultural and Nature Tour, 2-3 Hari)",
    list: [
      "Harga: Rp 1.200.000 - Rp 2.500.000 per orang",
      "Fasilitas yang Termasuk: Transportasi, akomodasi di homestay atau penginapan lokal, tiket masuk, pemandu lokal, makanan khas daerah, dan aktivitas budaya (seperti kunjungan ke desa adat).",
      "Catatan: Harga dapat disesuaikan tergantung lokasi dan aktivitas budaya tambahan yang diinginkan.",
    ],
  },
];

const BookATour = () => {
  return (
    <main className=" py-32 px-10 flex flex-col items-center">
      <div className="grid grid-cols-3 gap-10 text-white">
        {pakets.map((paket) => (
          <div
            key={paket.id}
            className="flex flex-col items-center bg-[#68875B] font-semibold rounded-[20px] h-[360px] w-full"
          >
            <h1 className="text-3xl my-5">{paket.heading}</h1>
            <div className="w-full text-xl px-6 font-Righteous">
              <p>{paket.title}</p>
              <ul className="ml-5 list-disc">
                {paket.list.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-48 rounded-[16px] flex w-56 h-20 bg-[#68875B]">
        <h1 className="m-auto text-4xl text-white font-semibold">Book</h1>
      </button>
    </main>
  );
};

export default BookATour;
