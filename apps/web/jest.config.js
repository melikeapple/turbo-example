const path = require("path");
const base = require("../../jest.config");
const { name } = require("./package.json");

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  ...base,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,tsx}"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  displayName: name,
};
