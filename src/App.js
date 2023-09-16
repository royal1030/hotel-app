import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { CardLayoutPage } from "./pages/CardLayoutPage";
import { HeaderPage } from "./pages/HeaderPage";

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
      <div style={{ backgroundColor: "#1C2F54" }}>
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
      </div>
    </>
  );
}

export default App;
