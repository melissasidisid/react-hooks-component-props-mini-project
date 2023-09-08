import React from "react";
import blogData from "../data/blog";
import téléchargement from "./react-hooks-component-props-mini-project/téléchargement.jpg"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
      <h1>Overeacted</h1>
      </header>
      <div className="about">
      <aside>
      
      const [imgSrc, setImgSrc] = useState("Invalid Image Source");
      <img src={téléchargement} alt="blog logo" onError = {() => setImgSrc("https://via.placeholder.com/215")}/>
         <P>My Personal blog I explain codes and how they work</P>
      </aside>

         <div className="ArticleList">
         <div className="article">
          <h3>The wet code basse</h3>

          <small>this is the latest article it takes<span>☕️3 minute </span></small>
         </div>



         </div>
      </div>
    </div>
  );
}

export default App;
