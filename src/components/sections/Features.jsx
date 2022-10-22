import { getOsName } from "../../helpers/getOS";
import { useState, useEffect } from "react";
import FeatureCardGroup from "../Cards/FeatureCardGroup";
import FeatureCard from "../Cards/FeatureCard";

function Features() {
  const osName = getOsName();
  const [imgPath, setImgPath] = useState(
    "/images/webps/github-desktop-screenshot-"
  );

  useEffect(() => {
    //Runs only on the first render

    if (osName.includes("Windows")) {
      setImgPath(imgPath + "windows.webp");
    } else {
      setImgPath(imgPath + "mac.webp");
    }
  }, []);
  return (
    <div id="features">
      <img
        className="m-auto my-10 max-w-full"
        src={imgPath}
        alt="Main Screenshot"
      />
      <FeatureCardGroup>
        <FeatureCard
          img="co-authoring"
          title="Attribute commits with collaborators easily"
          paragraph="Quickly add co-authors to your commit. 
          Great for pairing and excellent for sending a little 
          love/credit to that special someone who helped fix 
          that gnarly bug of yours. See the attribution on
           the history page, undo an accidental attribution, and"
          link="https://github.blog/2018-01-29-commit-together-with-co-authors/"
          linkText=" see the co-authors on github.com."
        />
        <FeatureCard
          img="pr-checks"
          title="Checkout branches with pull requests and 
          view CI statuses"
          paragraph="See all open pull requests for your 
          repositories and check them out as if they were 
          a local branch, even if they're from upstream 
          branches or forks. See which pull requests pass 
          commit status checks, too!"
        />
        <FeatureCard
          img="syntax-highlighting"
          title="Syntax highlighted diffs"
          paragraph="The new GitHub Desktop supports 
          syntax highlighting when viewing diffs for a 
          variety of different languages."
        />
      </FeatureCardGroup>
    </div>
  );
}

export default Features;
