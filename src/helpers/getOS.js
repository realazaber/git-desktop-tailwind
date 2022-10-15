var platform = require("platform");

export function getOsName() {
  let userOS = platform.os.family + " " + platform.os.architecture;

  if (platform.os.architecture !== "") {
    userOS += " bit";
  }

  console.log(`User OS: ${userOS}`);
  return userOS;
}

export function GetOsDebug() {
  console.log(platform.os);
}
