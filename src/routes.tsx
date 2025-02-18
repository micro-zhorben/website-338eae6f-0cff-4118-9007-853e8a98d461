import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Coffee } from "./pages/coffee";
import { Pizza } from "./pages/pizza";
import { SillyHeader } from "./components/silly-header";

const Routes = () => (
  <div className="min-h-screen flex flex-col">
    <SillyHeader />
    <main className="flex-1">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/pizza" element={<Pizza />} />
      </RouterRoutes>
    </main>
  </div>
);

export { Routes };