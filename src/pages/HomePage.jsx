import { Link } from "react-router-dom";
import beersPic from "../assets/beers.png";
import randomBeerPic from "../assets/random-beer.png";
import newBeerPic from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="home">
      <div>
        <section>
          <img src={beersPic} alt="beers" />
        </section>
        <Link to="/beers"> Check at the beer collection </Link>
        <p>
          Bacon ipsum dolor amet chislic ground round swine pancetta bacon
          landjaeger leberkas doner t-bone pork pork chop prosciutto tenderloin
          shank venison. Pork ribeye sirloin, biltong rump ham sausage strip
          steak bacon ground round swine porchetta picanha turducken. Tenderloin
          ribeye pork chop, rump burgdoggen salami shank. Brisket chislic bacon
          sausage doner swine fatback.
        </p>
        <hr />
      </div>
      <div>
        <section>
          <img src={randomBeerPic} alt="random beer" />
        </section>
        <Link to="/random-beer">Pick a random beer</Link>
        <p>
          Chicken sausage cupim tail, jowl short loin ground round shoulder cow
          ribeye bresaola pork. Pancetta picanha tongue pastrami, porchetta beef
          cow meatball fatback biltong chislic leberkas doner andouille ham.
          Drumstick andouille leberkas alcatra kevin. Porchetta pancetta jerky
          pork chop picanha kielbasa.
        </p>
        <hr />
      </div>
      <div>
        <section>
          <img src={newBeerPic} alt="random beer" />
        </section>
        <Link to="/new-beer">Wanna add a new beer?</Link>
        <p>
          Zombies brains unknown ghost creepy. Haunt sliced at choking cut
          drool. Children creepy deranged, ashes a killer a, monster mental
          hospital. Undead obsession tear horrifying, a devil fiendish tense in.
          In the deranged Halloween slice. Blood ashes tearing in drowning
          spooky at fanatic with murderer. Graves slice ominous is guns exorcism
          guts. Edginess anxiety tension, claw at deteriorated in, creep .
        </p>
        <hr />
      </div>
    </div>
  );
}

export default HomePage;
