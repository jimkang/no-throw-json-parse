function noThrowJSONParse(s, defaultVal) {
  var parsed = defaultVal;
  try {
    parsed = JSON.parse(s);
  } catch (e) {
    console.error('Parsing error on', s);
  }
  return parsed;
}

module.exports = noThrowJSONParse;
