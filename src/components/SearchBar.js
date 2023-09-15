// import React from "react";
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

// export default function SearchBar() {
//   return (
//     <MDBInputGroup>
//       <MDBInput label="Search" />
//       <MDBBtn rippleColor="light">
//         <MDBIcon icon="search" />
//       </MDBBtn>
//     </MDBInputGroup>
//   );
// }

import React, { useState, useEffect } from "react";
import { getAllHotels } from "../services/api";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hotels, setHotels] = useState([]);
  const [hoteldata, setHoteldata] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      const response = await getAllHotels();

      setHotels(response.data);
      setHoteldata(response.data);
    };
    getHotels();
  }, []);
  console.log(hoteldata);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);

    const search = e.target.value.toLowerCase();

    const filteredHotels = hotels.filter((hotel) => {
      if (search === "") return hotel;
      return hotel.name.toLowerCase().includes(search);
    });

    setHoteldata(filteredHotels);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a hotel..."
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
      />
      {/* <button onChange={(e) => handleSearch(e)}>Search</button> */}
    </div>
  );
};

export default SearchBar;
