const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: ".",
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "core/components/**/*.{js,jsx,ts,tsx}",
    "!app/**/*.d.ts",
    "!components/**/*.d.ts",
    "!app/**/index.{js,ts,tsx}",
    "!core/components/**/index.{js,ts,tsx}",
  ],
  coverageReporters: ["json", "html", "text"],
  coverageDirectory: "coverage",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
