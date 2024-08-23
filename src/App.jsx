import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutID = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isloading ? <PreLoader /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
