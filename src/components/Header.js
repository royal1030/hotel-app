import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import img from "../assests";

function Header() {
  // logout..
  let navigate = useNavigate();
  const logout = async () => {
    console.log("logout button (frontend)");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("profPic");
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#1C2F54" }}
      variant="dark"
    >
      <Container>
        {/* <img
          src={img}
          alt="Hotel Image"
          width="40"
          height="50"
          style={{ marginRight: "30px" }}
        /> */}
        <Navbar.Brand href="#home">Hotel Booking</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        >
          <i className="fa fa-bars" style={{ color: "black" }}></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>

          <Nav>
            <button
              type="button"
              className="btn btn-secondary btn-sm d-none d-lg-inline rounded-circle"
              onClick={() => navigate("/home")} // Navigate to home page
            >
              {localStorage.getItem("name")[1].toUpperCase()}
              {/* {console.log(localStorage.getItem("name")[1].toUpperCase())} */}
            </button>
            {/* <img
              src={localStorage.getItem("profPic")}
              alt="Profile"
              width="30"
              height="30"
              className="rounded-circle"
            /> */}
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => logout()}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-dark text-white">
//       <Container>
//         <Navbar.Brand href="#home" className="text-white">
//           React-Bootstrap
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="text-white"
//         />
//         <Navbar.Collapse id="basic-navbar-nav" className="text-white">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className="text-white">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#link" className="text-white">
//               Link
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;