import React from "react";
import { getOsDetails } from "../../helpers/getOS";

const userOS = getOsDetails();
const downloadLink =
  userOS === "Windows"
    ? "https://central.github.com/deployments/desktop/desktop/latest/win32"
    : "https://central.github.com/deployments/desktop/desktop/latest/darwin";

const Hero = () => (
  <div className="px-3 flex flex-col justify-center items-center">
    <h2 className="text-white text-5xl">Github Desktop</h2>
    <p className=" text-slate-400 text-xl text-center max-w-4xl	mt-5 mb-6">
      Focus on what matters instead of fighting with Git. Whether you're new to
      Git or a seasoned user, GitHub Desktop simplifies your development
      workflow.
    </p>
    <a href={downloadLink} target="_blank" rel="noreferrer">
      <button
        className="bg-gradient-to-t from-purple-900 to-purple-500 font-bold
text-white p-3 rounded my-3"
      >
        Download for {userOS}
      </button>
    </a>
  </div>
);

export default Hero;
