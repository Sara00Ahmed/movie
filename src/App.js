import './App.css';
import './protofolio.css';
import React from 'react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Import Components
import Card from './Components/Card';
// import Count from './Components/Count';
import SignIn from './PageWeb/SignIn';
import SignUp from './PageWeb/SignUp';
import Home from './PageWeb/Home';
import MovieShow from './PageWeb/MovieShow';
import Favorite from './PageWeb/Favorite';
import NotFound from './PageWeb/NotFound';
import Blogs from './PageWeb/Blogs';
import Footer from './Components/Footer';
import Protofolio from './Protofolio';
import SkillSection from './SkillSection';
// import Header from './PageWeb/Header';
import Schedule from './PageWeb/Schedule';
import Trend from './PageWeb/Trend';
import { useSelector, useDispatch } from 'react-redux';
// import useTranslation from './translate/useTranslation';
import { useEffect } from 'react';
import Header from './PageWeb/Header';
// import { lang } from './Redux/Actions/lang';

function App() {
  // const [details, setDetails] = React.useState(null);
  const theme = useSelector((state) => state.theme.theme);
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  // const { t } = useTranslation();
  // console.log("t function:", t); // Should print a function, not undefined
  // console.log("Translation output:", t("Cinema"));


   // Load saved language from localStorage on app start
   useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "EN";
    if (savedLang !== lang) {
      // dispatch(lang(savedLang));
    }
  }, [lang]);


  return (
    <BrowserRouter>
      {/* <Details.Provider value={{ details, setDetails }}> */}
        <div className={theme === "dark" ? "bg-dark-text-color" : "bg-light"}>

          <Header />

          <Switch>
            <Route exact path={"/" }component={Home} />
            {/* <Route exact path={"/Banner"} component={Banner}/> */}
            {/* <Route exact path={"/Main"} component={Main} /> */}
            <Route exact path={"/Schedule"} component={Schedule} />
            {/* <Route exact path={"/Count"} component={Count} /> */}
            <Route exact path={"/SignIn" }component={SignIn} />
            <Route exact path={"/SignUp"} component={SignUp} />
            <Route exact path={"/Favorite"} component={Favorite} />
            <Route exact path={"/Card"} component={Card} />
            <Route exact path={"/MovieShow/:_id"} component={MovieShow} />
            <Route exact path={"/Protofolio"} component={Protofolio} />
            <Route exact path={"/Blogs"} component={Blogs} />
            <Route exact path={"/SkillSection"} component={SkillSection} />
            <Route exact path={"/Trend"} component={Trend} />
            <Route path={"*"} component={NotFound} />
          </Switch>
          <Footer />
        </div>
      {/* </Details.Provider> */}
    </BrowserRouter>
  );
}

export default App;