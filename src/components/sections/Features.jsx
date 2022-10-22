import { getOsName } from "../../helpers/getOS";
import { useState, useEffect } from "react";
import FeatureCardGroup from "../Cards/FeatureCardGroup";

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
      <FeatureCardGroup />
    </div>
  );
}

export default Features;
