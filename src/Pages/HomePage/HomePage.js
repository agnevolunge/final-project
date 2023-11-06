import { Link } from 'react-router-dom'
import Container from '../../Components/Container/Container'


const HomePage = () => {

  return (
    <Container>
      <img src="https://selectregistry.com/wp-content/uploads/2018/05/things-to-do-in-jackson-hole-wymoing-in-the-summer-1920x650.jpg" alt="summer"/>
      <h1>National Parks Page</h1>
      
      <p>National parks exist all over the globe, a true testament to the power and wonder of nature. In fact, in the entire world there are 6555 national parks, which are mostly undeveloped stretches of land. These vital, protected parklands hold within them some of the most incredible natural occurrences, including mountains, canyons, waterfalls and forestlands, not to mention the plethora of wildlife who make these breath-taking places their home.</p>

      <div className="reasons-wrapper">
        <h2>8 reasons you should visit more National Parks! </h2>
          <ol>
            <li>Cost-friendly</li>
            <li>Easily Accessible</li>
            <li>Fun and Educational</li>
            <li>Marvel at Nature's Wonders</li>
            <li>Choose your Season</li>
            <li>They Improve your Health</li>
            <li>National Parks are like Adult Playgrounds with ADVENTURES</li>
            <li>They're also Perfect for Relaxing</li>
          </ol>
      </div>
       

      <div className="parks-list-wrapper">
        <h3>In this page you will find 7 National Parks in 5 different countries. Start Your Yourney here! </h3>
          <div>
            <Link to={'/nationalParks/1'}>Yellowstone National Park</Link>
          </div>
          <div>
            <Link to={'/nationalParks/2'}>Wild Taiga National Park</Link>
          </div>
          <div>
            <Link to={'/nationalParks/3'}>Göreme National Park</Link>
          </div>
          <div>
            <Link to={'/nationalParks/4'}>Plitvice Lakes National Park</Link>
          </div>
          <div>
            <Link to={'/nationalParks/5'}>Death Valley National Park</Link>
          </div>
          <div>
            <Link to={'/nationalParks/6'}>Jasper National Park</Link>
          </div>
          <div>
            <Link to={'/nationalParks/7'}>Banff National Park</Link>
          </div>
      </div>
      
      
     
     
      



      
    </Container>
  )
}

export default HomePage