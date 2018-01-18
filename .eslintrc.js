module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "classes": true,
    "jsx": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "react/prop-types": [0],
    "jsx-a11y/media-has-caption": [0],
    "class-methods-use-this": [0]
  },
};