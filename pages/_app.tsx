import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

const noAuthRequired = ["/", "/login", "/signup"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
