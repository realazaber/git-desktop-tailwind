const Footer = () => (
  <footer>
    <hr className="w-[10vw] mx-auto mt-20 mb-10 border-slate-600" />
    <div className="flex flex-row flex-between m-auto justify-center align-middle">
      <a
        href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
        className="link mx-4"
      >
        Terms
      </a>
      <a
        href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
        className="link mx-4"
      >
        Privacy Policy
      </a>
      <a href="https://desktop.github.com/eula/" className="link mx-4">
        EULA
      </a>
      <a href="https://desktop.github.com/release-notes/" className="link mx-4">
        Release Notes
      </a>
    </div>
    <p className="text-slate-600 text-center mt-4 pb-10">
      © 2022 GitHub, Inc. All rights reserved.
    </p>
  </footer>
);

export default Footer;
