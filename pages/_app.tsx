import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
// ...existing code...

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
