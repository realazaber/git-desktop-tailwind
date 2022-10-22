import React from "react";
import { getOsName } from "../../helpers/getOS";
import Card from "../Cards/Card";
import CardGroup from "../Cards/CardGroup";

const userOS = getOsName();
const downloadLink = userOS.includes("Windows")
  ? "https://central.github.com/deployments/desktop/desktop/latest/win32"
  : "https://central.github.com/deployments/desktop/desktop/latest/darwin";

const Hero = () => (
  <div className="px-3 flex flex-col justify-center items-center font-light">
    <h2 className="text-white text-5xl">Github Desktop</h2>
    <p className=" text-slate-400 text-[20px] text-center max-w-4xl	mt-5 mb-6">
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
    <CardGroup>
      <Card
        title="Feeling brave?"
        bodyStart="Try new features in the Beta Channel before they're released."
      />
      <Card
        title="Prefer the MSI?"
        bodyStart="Download for "
        downloadLink="https://central.github.com/deployments/desktop/desktop/latest/win32?format=msi"
        downloadText="Windows (MSI)"
      />
      <Card
        title="Mac OS?"
        bodyStart="Download for "
        downloadLink="https://central.github.com/deployments/desktop/desktop/latest/darwin"
        downloadText="Mac Os"
      />
    </CardGroup>
    <p className="text-white">
      By downloading you agree to our{" "}
      <a className="link" href="https://desktop.github.com/terms/">
        Open Source Application terms.
      </a>
    </p>
  </div>
);

export default Hero;
