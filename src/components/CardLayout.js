import React from "react";
import Card from "./Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
import Grid from "@mui/material/Grid";
import { getAllHotels } from "../services/api";
import { FaStar } from "react-icons/fa";
import Notification from "./Notification/Notification";
import CardModal from "./CardModel";

export const CardLayout = ({ BlurFilter, modalVisible }) => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingHotel, setBookingHotel] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [sHotel, setsHotel] = useState(null);

  const handleBookNow = (hotel) => {
    setBookingHotel(hotel);

    // setNotificationVisible(true);
    // Show a success notification
    // NotificationManager.success(
    //   `${hotel.name} has been booked!`,
    //   "Booking Successful"
    // );

    // // Set the booked hotel for displaying the alert
    // setBookingHotel(hotel);
  };

  const handleCardClick = (hotelId) => {
    setSelectedHotel(hotelId);
    // BlurFilter(true);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handleClick = (hotelId) => {
    if (selectedHotel === hotelId) {
      setsHotel(null);
    } else {
      setsHotel(hotelId);
    }
  };

  //   const handleShowNotification = () => {
  //     setNotificationVisible(true);

  //     setTimeout(() => {
  //       setNotificationVisible(false);
  //     }, 2000);
  //   };

  useEffect(() => {
    const getHotels = async () => {
      const response = await getAllHotels();
      //   console.log(response.data, "response");
      setHotels(response.data);
    };
    getHotels();
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: modalVisible ? 1 : "auto",
        }}
      >
        <Grid container spacing={2} sx={{ pt: 2, pl: 2, pr: 2 }}>
          {hotels.map((ele, index) => (
            <Grid key={index} item xs={6} sm={4} md={3}>
              <Card
                ele={ele}
                isSelected={ele.id === selectedHotel}
                onClick={() => handleCardClick(ele.id)}
                onCard={() => handleClick}
                onBookNow={() => handleBookNow(ele)}
                handleShowNotification={() => setNotificationVisible(true)}
              />
            </Grid>
          ))}
        </Grid>

        {notificationVisible && (
          <>
            <Notification
              message={`Booking done for ${bookingHotel.name}`}
              // message="This is a success notification!"
              type="success"
              onclose={() => setNotificationVisible(false)}
              notificationVisible={notificationVisible}
              // bookingHotel={bookingHotel}
              // visible={notificationVisible}
              // setVisible={setNotificationVisible}
            />
          </>
        )}

        {/* {selectedHotel && (
          <CardModal
            ele={hotels.find((ele) => ele.id === selectedHotel)}
            // onClose={handleCloseModal}
            onClose={() => {
              setSelectedHotel(null);
              BlurFilter(false); // Set blurred to false when modal is closed
            }}
          />
        )} */}
      </div>
    </>
  );
};
