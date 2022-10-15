var platform = require("platform");

export function getOsDetails() {
  console.log(platform.os.family);
  const userOS = platform.os.family;
  return userOS;
}
