import { useEffect, useState } from "react";

function FeatureCard(props) {
  const [imgPath, setImgPath] = useState("/images/webps/");
  const [rowClass, setRowClass] = useState(
    "flex flex-col align-middle justify-between px-5"
  );

  useEffect(() => {
    if (props.reverse) {
      setRowClass(rowClass + " tablet:flex-row-reverse");
    } else {
      setRowClass(rowClass + " tablet:flex-row");
    }
    setImgPath(imgPath + props.img + ".webp");
  }, []);

  return (
    <div className={rowClass}>
      <div className="w-full tablet:w-1/2 flex align-middle justify-center">
        <img src={imgPath} alt={props.title} className="tablet:w-2/3 p-5" />
      </div>
      <div className="phone:mt-0 w-full tablet:w-1/2 p-5 flex flex-col align-middle justify-center">
        <h3 className="text-white font-light">{props.title}</h3>
        <p className="text-slate-400">
          {props.paragraph}
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {props.linkText}
          </a>
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
