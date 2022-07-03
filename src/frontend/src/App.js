import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
