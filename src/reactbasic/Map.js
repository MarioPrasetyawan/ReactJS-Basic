import React from 'react'

const makanan = [
    {
        nama: "Soto",
        harga: 10000

    },
    {
        nama: "Sate Ayam",
        harga: 11000

    },
    {
        nama: "Bakso",
        harga: 15000

    },
    {
        nama: "Bubur",
        harga: 20000

    },
]

// Reduse
const total_bayar = makanan.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga;
},0);


const Map = () => {
  return (
    <div>
        <h2>Map</h2>
        <ul>
            {makanan
            .map((makanan, index) =>(
                 <li>{index+1}. {makanan.nama} - harga {makanan.harga} </li>
            ))}
           
        </ul>

        <h2>Makanan di atas 11000</h2>
        <ul>
            {makanan
            .filter((makanan) => makanan.harga >= 11000)
            .map((makanan, index) =>(
                 <li>{index+1}. {makanan.nama} - harga {makanan.harga} </li>
            ))}
           
        </ul>

        <h2>Total Harga: {total_bayar}</h2>
    </div>
  )
}

export default Map
