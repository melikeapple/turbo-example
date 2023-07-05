const base = require("../../jest.config");
const { name } = require("./package.json");

module.exports = {
  ...base,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,tsx}"],
  displayName: name,
};
