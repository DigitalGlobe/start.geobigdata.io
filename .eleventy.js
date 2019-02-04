const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    var css = new CleanCSS({}).minify(code).styles;
    css = css.replace(/(\r\n|\n|\r)/gm," ");
    css = css.replace(/\s{2,10}/g, ' ').trim();
    return css;
  });

  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if( minified.error ) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  return {
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      output: "docs",
      data: "_data"
    },
    dataTemplateEngine: false
  };
}
