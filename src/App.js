import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Index";
import Home from "./components/Pages/Home/Index";
import User from "./components/user/Index";
import Dashboard from "./components/user/Dashboard/Index";
import Sample from "./components/user/Sample/Index";
import Form from "./components/user/Form/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sample" element={<Sample />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
