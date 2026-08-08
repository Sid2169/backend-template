## Version Control & Collaboration Workflow

**Platform.** GitHub hosts the remote repository, issues, and pull
requests (confirmed by Lesson 24's use of GitHub Actions).

**Branching.** GitHub Flow. `main` is always assumed to be in a working
state. All work happens on short-lived branches created from `main`,
named `<type>/<kebab-case-description>` using the Conventional Commits
type vocabulary below. No direct commits to `main`.

**Commits.** Conventional Commits: `<type>[(scope)]: <description>`,
imperative mood, one logical change per commit.

Types in use: feat, fix, docs, style, refactor, perf, test, build, ci,
chore.

**Pull requests.** Every change lands through a pull request, even
solo, using `.github/pull_request_template.md`. Pull requests merge
using a merge commit — not squash — so the atomic commit history
survives on `main`. The source branch is deleted immediately after
merging.

**Self-review.** Every pull request is reviewed against the checklist
in `.github/pull_request_template.md`, using GitHub's "Files changed"
diff view rather than the local editor, before merging.

**Issues.** Work is filed as an issue — using
`.github/ISSUE_TEMPLATE/` — before it begins, and referenced from the
commit or pull request that completes it (e.g. `Closes #1`).

**Changelog.** `CHANGELOG.md` follows the Keep a Changelog format.
Every pull request that changes user-visible or developer-visible
behavior updates it in the same PR.