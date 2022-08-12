import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "../components/Layout";
import Intro from '../containers/Intro';
import About from "../containers/About"
import Skills from '../containers/Skills';
import Work from "../containers/Work";
import Blog from "../containers/Blog";
import Contact from "../containers/Contact";
import NotFound from '../containers/NotFound';
import Building from "../containers/Building";
import useActions from "../hooks/useActions";
import AppContext from "../context/AppContext"
import "../App.css"

const App = () => {
  const appContext = useActions();
  return (
    <React.Fragment>
      <AppContext.Provider value= {appContext}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/work" element={<Building />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
