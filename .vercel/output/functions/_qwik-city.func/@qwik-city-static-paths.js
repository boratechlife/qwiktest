const staticPaths = new Set(["/favicon.svg","/fonts/Roboto-Black.ttf","/fonts/Roboto-BlackItalic.ttf","/fonts/Roboto-Bold.ttf","/fonts/Roboto-BoldItalic.ttf","/fonts/Roboto-Italic.ttf","/fonts/Roboto-Light.ttf","/fonts/Roboto-LightItalic.ttf","/fonts/Roboto-Medium.ttf","/fonts/Roboto-MediumItalic.ttf","/fonts/Roboto-Regular.ttf","/fonts/Roboto-Thin.ttf","/fonts/Roboto-ThinItalic.ttf","/fonts/poppins-400.woff2","/fonts/poppins-500.woff2","/fonts/poppins-700.woff2","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml","/stars.png","/trust-pilot.png"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };