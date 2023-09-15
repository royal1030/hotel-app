import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaStar } from "react-icons/fa";

// export default function Card({ ele }) {
//   return (
// <MDBCard border="1px solid black" style={{ padding: "20px" }}>
//   <MDBCardTitle style={{ textAlign: "center" }}>{ele.name}</MDBCardTitle>
//       <MDBCardImage
//         src={ele.images[0]}
//         position="top"
//         width={100}
//         height={200}
//         alt="..."
//       />
//       {/* <MDBCardBody>
//         <MDBCardText>{ele.city}</MDBCardText>
//         <MDBBtn href="#">Book Now</MDBBtn>
//       </MDBCardBody> */}

//       <MDBCardBody>
//         <div className="row">
//           <div className="col-md-6 mb-2">
//             <MDBCardText>{ele.city}</MDBCardText>
//           </div>
//           <div className="col-md-6 mb-2">
//             <div className="d-flex justify-content-md-end">
//               {[...Array(ele.star)].map((_, index) => (
//                 <FaStar key={index} color="#FFD700" size={12} />
//               ))}
//             </div>
//           </div>
//           <div className="col-md-12">
//             <MDBBtn href="#">Book Now</MDBBtn>
//           </div>
//         </div>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }

export default function Card({
  ele,
  isSelected,
  onClick,
  onBookNow,
  handleShowNotification,
}) {
  return (
    // <MDBCard
    //   border="1px solid black"
    //   //   style={{
    //   //     padding: "20px",
    //   //     transform: isSelected ? "scale(1.2)" : "none",
    //   //     // filter: isSelected ? "none" : "blur(2px)",
    //   //   }}
    // >
    //   <MDBCardTitle style={{ textAlign: "center" }}>{ele.name}</MDBCardTitle>

    <MDBCard border="1px solid black" style={{ padding: "20px" }}>
      <MDBCardTitle style={{ textAlign: "center" }}>{ele.name}</MDBCardTitle>
      <MDBCardImage
        // src={ele.images[2]}
        src="https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F111744%2Frestaurant420190412104940.jpg"
        position="top"
        width={100}
        height={200}
        alt="..."
        onClick={onClick}
        style={{
          border: isSelected ? "2px solid blue" : "2px solid #ccc",
          padding: "10px",
          margin: "10px",
        }}
      />
      {isSelected && <p>Show some text inside the card</p>}
      <MDBCardBody>
        <div className="row">
          <div className="col-md-6 mb-2">
            <MDBCardText>{ele.city}</MDBCardText>
          </div>
          <div className="col-md-6 mb-2">
            <div className="d-flex justify-content-md-end">
              {[...Array(ele.star)].map((index) => (
                <FaStar key={index} color="#FFD700" size={12} />
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <MDBBtn
              onClick={() => {
                onBookNow();
                handleShowNotification();
              }}
            >
              Book Now
            </MDBBtn>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
