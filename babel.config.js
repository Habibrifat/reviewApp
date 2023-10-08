// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
      // add the below line 
      plugins: ['react-native-reanimated/plugin'], 
     // this should be always last line
  };
};
