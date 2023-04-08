import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(40));
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeError", () => setProgress(100));
  });

  return (
    <>
      <LoadingBar
        color="#059669"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
