import React, { useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/state/StateController";
import { ThemeProvider } from "next-themes";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import ScrollToTop from "../components/helpers/ScrollToTop/ScrollToTop";
import { useRouter } from "next/router";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  //   const states = useSelector(() => controller.states);

  

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);



  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
      <Header />
        <React.Fragment>
        <NextNProgress
            color="#2E4F4F"
            startPosition={0.3}
            stopDelayMs={200}
            height={9}
            showOnShallow={true}
          />
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </React.Fragment>
        <ScrollToTop />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
