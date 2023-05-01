import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/state/StateController";
import { ThemeProvider } from "next-themes";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  //   const states = useSelector(() => controller.states);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
      <Header />
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
