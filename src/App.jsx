import React, { useEffect, Suspense, lazy, useState, useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from "wowjs";

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { FloatingDock } from "./components/FloatingDock";
import ScrollToTopButton from "./components/ScrollToTopBtn";
import Preloader from "./components/Preloader";
import Topbar from "./components/Topbar";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Service from "./pages/Service";
import SingleDestination from "./pages/SingleDestination";

// Lazy imports (code-splitting)
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Tour10Days = lazy(() => import("./pages/Tour10Days"));
const Tour4Days = lazy(() => import("./pages/Tour4Days"));
const Tour6Days = lazy(() => import("./pages/Tour6Days"));
const Tour5Days = lazy(() => import("./pages/Tour5Days"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Loader on route change (not on first load)
function RouteChangeLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    setLoading(true);
    const id = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(id);
  }, [location.pathname]);

  return loading ? <Preloader /> : null;
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Router>
        <ScrollToTop />
        <RouteChangeLoader />
        <Topbar />
        <Navbar />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/service" element={<Service />} />
            <Route
              path="/destination/details/:id1/:id2"
              element={<SingleDestination />}
            />
            <Route path="/destinations/:id" element={<Destinations />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages/Tour10Days" element={<Tour10Days />} />
            <Route path="/packages/Tour4Days" element={<Tour4Days />} />
            <Route path="/packages/Tour6Days" element={<Tour6Days />} />
            <Route path="/packages/Tour5Days" element={<Tour5Days />} />
          </Routes>
        </Suspense>
        {/* <FloatingDock /> */}
        {/* <ScrollToTopButton /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
