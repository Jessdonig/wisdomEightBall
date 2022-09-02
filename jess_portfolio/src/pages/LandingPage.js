import "./landingPage.css";
import open from '../assets/open_home.png';
function LandingPage() {
  return (
    <div className="page-container">
      <div className="first-section">
        <div className="intro-title-text">I am a developer!</div>
      </div>
      <div className="second-section">
        <div className="text-container">
        <div className="title-text">dev projects</div>
        <div className="info-text">
          In 2022, after many years of product adjacent work, I decided to learn
          to code. I wrote my first console.log() in August of 2021; in November
          of that year, I was accepted to attend the Grace Hopper Program, an
          immersive software development bootcamp for women+, from January-April
          2022.
        </div>
        </div>
        <div>
          <div className ='image-container'>
          <img className={"project-image"} src={open} alt="test"/>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
