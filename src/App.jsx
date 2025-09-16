import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Auth/Login";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Coursespage from "./pages/CoursesPage";
import ProjectDetail from "./pages/ProjectDetailsPage";
import CoursesDetail from "./pages/CoursesDetailsPage";
import ScrollUp from "./components/ScrollUp";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";
import Register from "./pages/Auth/Register";
import DevsumDiaries from "./pages/DevsumDairies";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Coursespage />} />
            <Route path="/courses/:id" element={<CoursesDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/devsum-diaries" element={<DevsumDiaries />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
        <ScrollUp />
        <Footer />
      </Router>
    </>
  );
}

export default App;
