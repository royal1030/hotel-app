// import logo from "./logo.svg";
import "./App.css";
// import { CardLayout } from "./components/CardLayout";
// import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { CardLayoutPage } from "./pages/CardLayoutPage";
import { HeaderPage } from "./pages/HeaderPage";
// import { NotificationContainer } from "react-notifications";
// import "react-notifications/lib/notifications.css";

function App() {
  const ProtectedRoute = ({ children }) => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <>
      {/* <Header></Header>
       */}
      {/* <Login></Login> */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/home"
            exact
            element={
              <>
                <ProtectedRoute>
                  <HeaderPage />
                  <CardLayoutPage />
                </ProtectedRoute>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
