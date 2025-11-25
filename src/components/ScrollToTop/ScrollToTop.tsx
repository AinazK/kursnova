import { useLenis } from "lenis/react";
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollToTop = () => {
  const lenis = useLenis();
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, navigationType]);

  return null;
};
