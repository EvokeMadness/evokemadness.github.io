module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("posts");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};