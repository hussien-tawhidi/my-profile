import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Blog from "../pages/blog/Blog";
import SeoAndWeb from "../pages/blog/SeoAndWeb";
import GoodAndBad from "../pages/blog/GoodAndBad";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames='page'
      unmountOnExit>
      <Routes location={location}>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/importance-of-seo-in-websites' element={<SeoAndWeb />} />
        <Route
          path='/suitable-and-unfavourable-websiltes'
          element={<GoodAndBad />}
        />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className='s_c'>
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
