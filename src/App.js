import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import AppCard from "./Projects/Components/AppCard";
import { Data } from "./Projects/Config/Data";

const App = () => {
  const Navbar = () => {
    return (
      <div className="bg-slate-400 flex gap-10 cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="contact">Contact</Link>
      </div>
    );
  };

  //Routes Using Components
  const Home = () => {
    return (
      <div className="flex flex-wrap justify-center gap-5">
        {Data.map((it) => {
          return (
            <Link to={"/user"} state={it}>
              <div>
                <AppCard id={it.id} image={it.img} option={it.option} />;
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  //Pass the data into the another page through routing
  const User = () => {
    const { state } = useLocation();
    console.log(state);
    return (
      <div>
        <p>{state.option}</p>
        <img src={state.img} alt="" className="h-96 w-96" />
        <p>{state.id}</p>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div>
        <p>Contact Page</p>
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
