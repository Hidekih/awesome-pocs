---
name: conventional-commit
description: Creates git commits following the Conventional Commits v1.0.0 specification. Inspects staged and unstaged changes, classifies them into type and scope, drafts the message, and asks for clarification with 2–3 numbered suggestions only when context is ambiguous. Use when the user wants to commit changes following Conventional Commits, mentions "conventional commit", "padrão de commit", or invokes a commit slash command like /commit.
---

# Conventional Commits

Build commit messages that follow the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) spec.

## Format

```
<type>[(scope)][!]: <description>

[optional body]

[optional footer(s)]
```

- `!` after the type/scope marks a **breaking change**
- Types are lower-case; the `BREAKING CHANGE` footer token is upper-case
- Description: imperative mood, no trailing period, ≤72 chars
- Body and footers are each separated by a single blank line

## Type cheat-sheet

| Type | Use when |
|------|------|
| `feat` | New user-facing capability (→ SemVer MINOR) |
| `fix` | Bug fix (→ SemVer PATCH) |
| `docs` | Documentation only |
| `style` | Formatting/whitespace, no behavior change |
| `refactor` | Internal change, no feature/bug |
| `perf` | Performance improvement |
| `test` | Add or correct tests |
| `build` | Build system, deps (package.json, Dockerfile, lockfiles) |
| `ci` | CI/CD config (`.github/workflows/`, `.gitlab-ci.yml`) |
| `chore` | Misc maintenance with no src/test impact |
| `revert` | Reverts a previous commit |

If a single change fits two types, prefer the higher-impact one (`feat` > `fix` > `refactor` > `chore`); if it spans truly unrelated work, propose splitting.

## Workflow

1. **Inspect** (run in parallel):
   - `git status` (never `-uall`)
   - `git diff --staged`
   - `git diff` (unstaged)
   - `git log -10 --pretty=format:'%s'` — match repo language and style
2. **Refuse fast** if the working tree is clean — surface it instead of forcing an empty commit.
3. **Classify** each file using path + diff content. If the diff bundles unrelated types, propose a split and stop.
4. **Derive scope** from the dominant module/folder (`auth`, `api`, `ui`). Omit if global or unclear.
5. **Detect breaking changes**: removed/renamed public API, schema/contract change, env-var change → use `!:` *and* a `BREAKING CHANGE:` footer that explains the impact.
6. **Draft the message**:
   - Language: match recent commits (English by default; PT-BR when the log is in PT-BR)
   - Body answers *why*, not *what* — only when the diff isn't self-explanatory
   - Footers: `Refs #123`, `Closes #45`, `Reviewed-by: <name>`, `BREAKING CHANGE: …`
7. **Decide whether to ask** — see next section.
8. **Stage explicitly** (file-by-file; never `git add -A`/`git add .`) and commit via heredoc to preserve formatting.
9. **Verify** with `git status` after the commit.

## Ask only when ambiguous

Skip the question and commit when type, scope, and intent are obvious. Ask — and offer **2–3 numbered suggestions** — only when one of these is unclear:

- **Type** — diff fits multiple categories (e.g., a refactor that incidentally fixes a bug)
- **Scope** — change touches several modules; user may prefer one over all
- **Breaking change** — the public API surface looks altered
- **Description wording** — multiple plausible verbs/objects
- **Splitting** — unrelated changes are bundled together

Question template (in the language of recent commits):

> O contexto não deixa claro o **tipo**. Sugestões:
> 1. `feat(auth): add OAuth2 login`
> 2. `refactor(auth): extract OAuth2 client`
> 3. `chore(auth): rename auth helpers`
> Qual prefere, ou outra opção?

## Examples

```
feat(parser): support trailing commas in objects
```

```
fix(api): retry idempotent requests on 503

The retry loop aborted after the first 503,
causing intermittent deploy failures.

Refs #482
```

```
feat(api)!: drop support for Node 16

BREAKING CHANGE: minimum Node version is now 18.
```

## Hard rules

- Never `--no-verify`, `--amend`, or force-push unless the user explicitly asks
- Never stage files outside the user's intended change set
- Never invent issue numbers, scopes, or co-authors
- If a hook fails, fix the cause and create a **new** commit — don't amend
