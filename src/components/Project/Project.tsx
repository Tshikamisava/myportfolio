import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://myhotel-kappa.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Hotel Booking website</h3>
              <p>
              Designed and developed a dynamic hotel booking website from scratch, providing users with a seamless experience to search, browse, and book accommodations worldwide. The website features an intuitive user interface, allowing visitors to easily filter search results by location, date, amenities, and price range. Users can view detailed hotel information, including descriptions, photos, and reviews, before making reservations directly through the platform. The backend system efficiently manages hotel inventory, room availability, and booking transactions, ensuring a smooth booking process for both users and hotel owners. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>Redux</li>
                <li>ContextAPI</li>
                <li>firebase</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Tshikamisava/goldenexp.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Golden Exp Restuarent</h3>
              <p>
              Conceptualized and developed a comprehensive table reservation system for restaurants, streamlining the booking process for diners and optimizing table management for restaurant staff. The system allows users to easily browse available tables, select desired date and time slots, specify party size, and make reservations in real-time through the restaurant's website or mobile app. Implemented intuitive user interfaces for both customers and restaurant managers, featuring interactive calendars, dynamic seating charts, and seamless integration with the restaurant's point-of-sale (POS) system
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Tshikamisava/WeatherServices.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather Services</h3>
              <p>
              Developed a weather service application that leverages the WeatherAPI to provide accurate and up-to-date weather information for locations worldwide. The application features a user-friendly interface where users can search for weather forecasts by specifying the desired country. Utilizing the power of the WeatherAPI, the service retrieves real-time weather data, including temperature, humidity, wind speed, and weather conditions, for the selected country. Implemented robust error handling to gracefully manage API requests and responses, ensuring a seamless user experience. Additionally, integrated interactive maps and visualizations to enhance the presentation of weather data and provide users with comprehensive insights into current and forecasted weather conditions. The application is designed to be accessible across various devices, offering users convenient access to weather information wherever they go.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Tshikamisava/userprofile_nodejs.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>User Profile</h3>
              <p>
              Developed a robust user profile feature using Node.js, providing users with a personalized experience and seamless access to their account information.ensuring secure login and registration processes. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NodeJs</li>
                <li>ExpressJS</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.ourbet.co.za/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ourbet</h3>
              <p>
              Introducing an engaging and interactive Head & Tail Tossing game as part of the Ourbet platform. Users can immerse themselves in this classic coin-tossing experience, offering a blend of simplicity and excitement. The game provides users with the thrill of guessing the outcome of a coin flip, whether it lands on heads or tails. To access the full functionality and enjoy the game to its fullest, users are encouraged to log in to their Ourbet accounts. The game interface is designed for seamless interaction, with clear instructions guiding users through the gameplay process. With its straightforward yet addictive nature, the Head & Tail Tossing game offers a delightful way for users to engage and unwind.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>MYSQL</li>
                <li>Javascript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Themchest - Security Company Site</h3>
              <p>
              Introducing the Themchest Security Company website, a comprehensive online platform dedicated to providing top-notch security solutions and services. With a focus on safeguarding clients' assets and ensuring peace of mind, Themchest offers a range of security services tailored to meet diverse needs and requirements. The website serves as a central hub for users to explore the company's offerings, including security assessments, surveillance systems, access control solutions, and security personnel services. Through informative content and intuitive navigation, visitors can learn about the company's expertise, experience, and commitment to excellence in the security industry. Designed with a clean and professional layout, the website exudes trust and reliability, reinforcing Themchest's reputation as a leading security provider. Whether it's protecting residential properties, commercial establishments, or special events, Themchest is dedicated to delivering unmatched security solutions that prioritize safety and confidentiality.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li> 
                <li>Tailwind css</li>                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       

      </div>
    </Container>
  );
}