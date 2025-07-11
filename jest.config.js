/* eslint-disable */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    testMatch: [
        "<rootDir>/tests/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}",
    ],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/**/*.stories.{js,jsx,ts,tsx}",
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
