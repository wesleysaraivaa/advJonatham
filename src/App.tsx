import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "./components/SmoothScroll";
import Index from "./pages/Index";

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </SmoothScroll>
  </BrowserRouter>
);

export default App;
