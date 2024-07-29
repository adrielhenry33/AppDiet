
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          'root': ['./src'],
          alias: {
            '@assets': './src/assets', //apelidos para chamar os enderecos
            '@components': './src/components',
            '@routes': './src/routs',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};