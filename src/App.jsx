import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Contact></Contact>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}

export default App;
