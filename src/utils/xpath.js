const getElementByXpath = path => document.evaluate(
  path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
).singleNodeValue;

export default getElementByXpath;
