import { BrowserRouter } from "react-router-dom";

import {
  Introduction,
  Contact,
  Experience,
  Education,
  About,
  Quote,
  Hero,
  Navbar,
  StarsCanvas
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Introduction />
        <Experience />
        <Quote />
        <Education />
        <About />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
