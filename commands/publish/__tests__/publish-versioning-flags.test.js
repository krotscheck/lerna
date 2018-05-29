"use strict";

// local modules _must_ be explicitly mocked
jest.mock("../lib/git-push");
jest.mock("../lib/is-behind-upstream");

// mocked modules
const PromptUtilities = require("@lerna/prompt");

// helpers
const initFixture = require("@lerna-test/init-fixture")(__dirname);
const getCommitMessage = require("@lerna-test/get-commit-message");
const showCommit = require("@lerna-test/show-commit");

// test command
const lernaPublish = require("@lerna-test/command-runner")(require("../command"));

// stabilize commit SHA
expect.addSnapshotSerializer(require("@lerna-test/serialize-git-sha"));

describe("publish --repo-version", () => {
  it("skips version prompt and publishes changed packages with designated version", async () => {
    const testDir = await initFixture("normal");

    await lernaPublish(testDir)("--repo-version", "1.0.1-beta.25");

    expect(PromptUtilities.select).not.toBeCalled();

    const message = await getCommitMessage(testDir);
    expect(message).toBe("v1.0.1-beta.25");
  });
});

describe("publish --exact", () => {
  it("updates matching local dependencies of published packages with exact versions", async () => {
    const testDir = await initFixture("normal");

    await lernaPublish(testDir)("--exact");

    const patch = await showCommit(testDir);
    expect(patch).toMatchSnapshot();
  });

  it("updates existing exact versions", async () => {
    const testDir = await initFixture("normal-exact");

    await lernaPublish(testDir)();

    const patch = await showCommit(testDir);
    expect(patch).toMatchSnapshot();
  });
});
