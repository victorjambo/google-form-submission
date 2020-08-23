export const getElementByXpath = path => document.evaluate(
  path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
).singleNodeValue;

export const changeDomWidth = width => {
  const html = document.getElementsByTagName('html');
  const nav = document.getElementById('submissio');

  if (width) {
    nav.style = `width: ${width}px`;
    nav.classList.add('submissio-sidebar-show');
    html[0].setAttribute('style', `margin-left: ${width}px`);
  } else {
    nav.classList.remove('submissio-sidebar-show');
    html[0].setAttribute('style', '');
  }
};
