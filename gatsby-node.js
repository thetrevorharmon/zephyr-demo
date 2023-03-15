exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        assert: require.resolve("assert"),
        buffer: require.resolve("buffer"),
        util: require.resolve("util"),
      },
    },
  });
};
