import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Ajuda } from "./pages/Ajuda";
import { Dashboard } from "./pages/Dashboard/Index";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Reagir } from "./pages/Reagir";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/reagir" element={<Reagir />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Route>
    </Routes>
  )
}