import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import AddUpdateUser from "./component/AddUpdateUser/AddUpdateUser";
import ViewUser from "./component/ViewUser/ViewUser";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-update-user" element={<AddUpdateUser />} />
        <Route path="/add-update-user/:id" element={<AddUpdateUser />} />
        <Route path="/view-user/:id" element={<ViewUser />} />
      </Routes>
    </>
  );
};

export default App;
