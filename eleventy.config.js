module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });
  eleventyConfig.addPassthroughCopy({
    "./content/projects/": "content/projects/",
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
