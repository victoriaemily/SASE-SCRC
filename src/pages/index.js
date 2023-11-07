import {
  LandingPage,
  About,
  FAQ,
  Guide,
  SASE,
  Sponsors,
  Team,
} from "./components";

export default function Home() {
  return (
    <main>
      <div className="scroll-container">
        <LandingPage />
        <About />
        <Guide />
        <Sponsors />
        <FAQ />
        <Team />
        <SASE />
      </div>
      <header className="nav-container">
        <a className="name-header" href="#">
          SCRC
        </a>
        <nav className="navbar">
          <div className="navbar-link-container">
            <a href="#about">About</a>
          </div>
          <div className="navbar-link-container">
            <a href="#key-dates">Key Dates</a>
          </div>
          <div className="navbar-link-container">
            <a href="#sponsors">Sponsors</a>
          </div>
          <div className="navbar-link-container">
            <a href="#faq">FAQ</a>
          </div>
          <div className="navbar-link-container">
            <a href="#scrc-team">SCRC Team</a>
          </div>
          <div className="navbar-link-container">
            <a href="#tamu-sase">TAMU SASE</a>
          </div>
        </nav>
      </header>
      <a className="nav-return-top" href="#">
        Return to Top
      </a>
    </main>
  );
}
