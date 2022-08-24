import Header from "./Header";
import head from "./head.png";
import BlueCont from "./BlueCont";
import suggestion from "./suggestion.png";
import experience from "./experience.png";
import pathies from "./pathies.png";
import donate from "./donate.png";


function Body() {
    return (
      <>
      <Header heading="Get Started" para="This page is meant to show how the website works with all the functionalities." photo={head}/>
      <BlueCont heading="Ask Suggestions" para="Here you can ask for suggestions from our experienced doctors !" photo={suggestion}/>
      <Header heading="Share Your Experience" para="Here you are welcomed to share your experience which may help us save many lives!" photo={experience}/>
      <BlueCont heading="Pathies" para="Here you will find a lot of information on large number of pathies, cases, cures etc..." photo={pathies} />
      <Header heading="Donate US" para="While you are here, consider supporting us so many more lives can be saved! :)" photo={donate}/>
      
      </>
    );
  }
  
  export default Body;
  