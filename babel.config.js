module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "constant/*": ["./constant/*"],
            "containers/*": ["./containers/*"],
            "hooks/*": ["./hooks/*"],
            "navigation/*": ["./navigation/*"],
            "redux/*": ["./redux/*"],
            "screens/*": ["./screens/*"],
            "services/*": ["./services/*"],
          },
        },
      ],
    ],
  };
};
