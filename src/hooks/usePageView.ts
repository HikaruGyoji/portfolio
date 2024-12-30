import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    // ページビューを送信
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default usePageView;
