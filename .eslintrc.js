module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
          "version": "16.13.1"
        }
      },
    "rules": {
        "react/display-name": [0],
        "react/prop-types": [0],
        "react/jsx-key": [0]
    }
};
