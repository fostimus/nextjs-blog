import "../styles/global.css";

// top level component of entire application; can keep state when navigating across pages here
// this is the ONLY place in next to import global styles to the application
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
