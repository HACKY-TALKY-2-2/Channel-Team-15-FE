import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Home } from "./pages/home";
import { Memory } from "./pages/memory";
import { MyMission } from "./pages/my-mission";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { TeamMission } from "./pages/team-mission";
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
              <Route path={To.SignIn} Component={SignIn} />
              <Route path={To.MyMission} Component={MyMission} />
              <Route path={To.TeamMission} Component={TeamMission} />
              <Route path={To.Memory} Component={Memory} />
              <Route path={To.SignUp} Component={SignUp} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
