import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Home } from "./pages/home";
import { Memory } from "./pages/memory";
import { SingIn } from "./pages/sign-in";
import { To } from "./routes/route";

function App() {
  const STALE_TIME = 10 * 60 * 1000;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: STALE_TIME,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path={To.Home} Component={Home} />
              <Route path={To.SignIn} Component={SingIn} />
              <Route path={To.Memory} Component={Memory} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
