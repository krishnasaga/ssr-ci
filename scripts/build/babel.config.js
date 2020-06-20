module.exports = function (api) {
    api.cache(true);

    const presets = [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-react')
    ];

    const plugins = [

     ];
  
    return {
      presets,
      plugins
    };
  }
