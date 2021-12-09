import FullName from "./components/FullName";
import MainNavbar from "./components/MainNavbar";
import MainImage from "./components/MainImage";
import Profession from "./components/Profession";
import Bio from "./components/Bio";

function App() {
  const bio =
    " born August 15, 1990 is an American actress. Lawrence was the world's highest-paid actress in 2015 and 2016, with her films grossing over $6 billion worldwide to date. She appeared in Time's 100 most influential people in the world list in 2013 and in the Forbes Celebrity 100 list from 2013 to 2016.";
  const fullName = "Jennifer Shrader Lawrence";
  const profession =
    "acteur,mannequin,realisateur de cinéma,chanteur,acteur de cinéma";
  const image =
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Jennifer_Lawrence_in_2016.jpg";

  return (
    <center>
    <div className="App">
      <MainNavbar />
      <MainImage image={image}/>
      <br/>
      <FullName fullName={fullName}/>
      <br/>
      <Profession profession={profession}/>
      <br/>
      <Bio bio={bio}/>

      
    </div></center>
  );
}

export default App;
