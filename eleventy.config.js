module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("content");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};