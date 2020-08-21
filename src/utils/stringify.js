export const JSONToString = json => {
  try {
    return JSON.stringify(json);
  } catch (error) {
    console.log(error);
    return json;
  }
};

export const stringToJSON = str => {
  try {
    JSON.parse(str);
  } catch (error) {
    if (error.toString().includes('SyntaxError')) {
      return str;
    }
    console.log(error);
    return str;
  }
};
