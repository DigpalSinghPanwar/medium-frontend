import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import { BACKEND_URL } from "./config";

function App() {
  const callApiEvery14Minutes = () => {
    setInterval(async () => {
      try {
        const response = await axios.get(BACKEND_URL);
        console.log("API response:", response);
        // Perform any additional processing with response.data if needed
      } catch (error) {
        console.error("Error calling API:", error.message);
      }
    }, 855000);
  };

  // Start the interval
  callApiEvery14Minutes();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={Signup} />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
          <Route
            path="/signin"
            element={<ProtectedRoute Component={Signin} />}
          />
          <Route
            path="/blog/:id"
            element={<ProtectedRoute Component={Blog} />}
          />
          <Route path="/blogs" element={<ProtectedRoute Component={Blogs} />} />
          <Route
            path="/publish"
            element={<ProtectedRoute Component={Publish} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
