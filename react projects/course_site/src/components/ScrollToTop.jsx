import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // whenever route changes, scrolling back to top makes navigation feel cleaner
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }, [pathname]);

  return null;
}
