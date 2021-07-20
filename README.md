# no-throw-json-parse

 Just parses a string to JSON and catches the error if there is one. Logs an error and passes back a default value, if there is one.

This is for cases in which you don't want some bad data to stop the entire process.

The first argument is the string to be parsed. It is required. The second is an optional default value, which will just be `undefined` if you don't specify anything.

Here is all of the code in the module:

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

(I just got tired of copying it from project to project.)

## Installation

    npm install no-throw-json-parse

## License

The MIT License (MIT)

Copyright (c) 2021 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
