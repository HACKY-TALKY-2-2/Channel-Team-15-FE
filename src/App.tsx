import "./App.css";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { To } from "./routes/route";
import { Home } from "./pages/home";
import { SingIn } from "./pages/sign-in";
import { MyMission } from "./pages/my-mission";
import { TeamMission } from "./pages/team-mission";

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
              <Route path={To.MyMission} Component={MyMission} />
              <Route path={To.TeamMission} Component={TeamMission} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
