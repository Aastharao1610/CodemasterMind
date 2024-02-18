import Grid from "./Gridreuse";
import { Link } from "react-router-dom";

const LangOpt = () => {
  return (
    <>
      <h2 className="text-3xl text-black mx-20 text-center capitalize font-bold mb-10 mt-10 cursor-pointer ">
        Select a Language to start your Quiz:
      </h2>
      <div className="grid grid-cols-2 gap-28 mx-20 mb-20 mt-24">
        {/* Html cont */}
      
<Link to="/Quiz/LangOpt/HtmlDifficulty/HtmlEasy">
  <Grid
    Language="HTML"
    BackgroundColor="bg-green-200 hover:bg-green-300"
    cardId="HtmlDifficulty"
  />
</Link>

        {/* css */}
        <Grid
          Language="CSS"
          BackgroundColor="bg-blue-200 hover:bg-blue-300"
          cardId="cssDifficulty"
        />
        {/* js */}
        <Grid
          Language="Javascript"
          BackgroundColor="bg-yellow-200 hover:bg-yellow-300"
          cardId="JsDifficulty"
        />
        {/* cpp */}
        <Grid
          Language="Cpp"
          BackgroundColor="bg-green-200 hover:bg-green-300"
          cardId="cppDifficulty"
        />
      </div>
    </>
  );
};

export default LangOpt;

