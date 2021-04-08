import { useRouter } from "next/router";
import { useEffect } from "react";
import { Nav } from "../components/nav";
import "../styles/globals.css";
import "../styles/fonts.css";
import { analytics } from "../utils/firebase";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent("screen_view");
      };

      router.events.on("routeChangeComplete", logEvent);

      // For the first page
      logEvent(window.location.pathname);

      // Remove event listener after unmount
      return () => {
        router.events.off("routeChangeComplete", logEvent);
      };
    }
  }, []);

  return (
    <div className="bg-white">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
