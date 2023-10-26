module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./",
          },
        },
      ],
      // reanimated has to be last
      "react-native-reanimated/plugin",
    ],
    env: {
      production: {},
    },
  };
};
