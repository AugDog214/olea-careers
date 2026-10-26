# Security tools discovered, 2026-10-26

## October 25 installation

**VERIFIED:** The existing admission receipt records 16 installed review skills, no scanner executables, no installed hooks, no automatic updates, and no helper execution. All **3,706 installed files** were rehashed against their recorded SHA-256 values with zero missing or modified files. Integrity against a receipt is not proof that every instruction is correct or safe.

The original receipt and exact local filesystem paths are retained in private local audit evidence. This public repository report uses `%USERPROFILE%` for the Windows user directory and omits unrelated project names. Receipt filename: `skill-installation-receipt.json`, dated audit directory `2026-10-25`.
Receipt SHA-256: `0d3923a82ed0dc986ca9dcc7e4862cc82259b4de2a97c663e838fb3a879becf7`.

Every skill below is installed at `%USERPROFILE%/.codex/skills/<exact-name>/`. Its source is pinned as follows:

| Source label | Exact upstream repository | Reviewed commit |
|---|---|---|
| OpenAI | https://github.com/openai/skills | `49f948faa9258a0c61caceaf225e179651397431` |
| OWASP | https://github.com/OWASP/secure-agent-playbook | `65d4efd2cd0b081d52101e9708792b944e4ddebb` |
| Trail of Bits | https://github.com/trailofbits/skills | `196a9073ab10d35bacf111f945e02c00b2c6883a` |

These are instruction packages, not autonomous scanners. "Used" means the admitted instructions informed local source review or testing. Claude-only plugin orchestration, upstream installation examples, telemetry, and agent hooks were not activated.

| Exact skill name / installation leaf | Source | Operational status for this audit | Capability |
|---|---|---|---|
| `security-best-practices` | OpenAI | VERIFIED installed; used | Vanilla JavaScript/frontend secure coding |
| `security-threat-model` | OpenAI | VERIFIED installed; available but inactive | Formal repository threat modeling; no separate formal model workflow invoked |
| `security-guidance` | OWASP | VERIFIED installed; available but inactive | ASVS-based secure-development guidance |
| `web-security-review` | OWASP | VERIFIED installed; used | OWASP web review, frontend and deployment configuration |
| `api-security-review` | OWASP | VERIFIED installed; used | Existing Apps Script receiver surface, abuse controls and data handling |
| `mobile-code-review` | OWASP | VERIFIED installed; NOT APPLICABLE | Native Android/iOS review |
| `secrets-scan` | OWASP | VERIFIED installed; used | Redacted source/history pattern review when scanner binaries are absent |
| `sca-audit` | OWASP | VERIFIED installed; used | Native dependency audit and advisory/reachability triage |
| `agent-security-audit` | OWASP | VERIFIED installed; available but inactive | Agent configuration/trust-boundary audit; no site agent runtime |
| `mcp-server-review` | OWASP | VERIFIED installed; available but inactive | MCP implementation review; no site MCP server |
| `prompt-injection-test` | OWASP | VERIFIED installed; NOT APPLICABLE | LLM-integrated application testing; no site LLM features |
| `differential-review` | Trail of Bits | VERIFIED installed; used | Before/after, history, blast-radius and regression review |
| `sharp-edges` | Trail of Bits | VERIFIED installed; available but inactive | Error-prone API/configuration review |
| `variant-analysis` | Trail of Bits | VERIFIED installed; available but inactive | Search for variants of a proven bug |
| `fp-check` | Trail of Bits | VERIFIED installed; used | Source-to-sink and false-positive checks |
| `property-based-testing` | Trail of Bits | VERIFIED installed; available but inactive | Property-test design; existing native tests suffice here |

The selected skills' `LOCAL-ADMISSION.md` and `SKILL.md` instructions were read before application. Supporting web/API plays, frontend guidance, false-positive verification, and differential-review references were consulted. Known errors noted in the local admission constraints take precedence over upstream examples. No blanket trust exemption was granted to an upstream organization.

## Research copies, not installed scanners

The October 25 research directory contains source snapshots, without `.git` directories. The first three sources above supplied the admitted leaf skills. Additional source-only candidates were not activated:

| Exact source | Commit | Location under the receipt directory | Status / capability |
|---|---|---|---|
| `semgrep/skills` | `68177b8830f96cd9d10dacbb14dde2566360503d` | `skill-research/semgrep__skills/` | Available research only; Semgrep guidance, no Semgrep binary found |
| `github/awesome-copilot` | `1ce2a78feb497ab276fc4073607996f5b08138cb` | `skill-research/github__awesome-copilot/` | Available research only; overlapping AI review instructions |
| `cisco-ai-defense/skill-scanner` | `de5fcf08fe0b32841602513c5b760a11ef4cbc4a` | `skill-research/cisco-ai-defense__skill-scanner/` | Source only; Python skill-scanner CLI not found or executed |
| `supply-chain-risk-auditor` from Trail of Bits | Same Trail of Bits commit above | Held source in `skill-research/trailofbits__skills/` | **NOT installed or used.** Admission review documented Windows executable-resolution and offline subprocess-network defects |

The other reviewed source snapshots are `skill-research/openai__skills/`, `skill-research/OWASP__secure-agent-playbook/`, and `skill-research/trailofbits__skills/`. Original source hashes, adapted installed hashes, licenses and admission reports remain in that dated directory. No update or reinstall was performed.

## Existing operational tools

| Tool | Exact version / source | Location | Actual use/status |
|---|---|---|---|
| npm audit | npm `11.6.2`, bundled with Node.js | `C:/Program Files/nodejs/npm.cmd` | VERIFIED operational. Native baseline: 4 high advisory package nodes; updated lock: 0. Initial transient network failures were resolved by later successful runs |
| Node.js / node:test | `v24.13.0`, Node.js | `C:/Program Files/nodejs/node.exe` | VERIFIED production builds and 12 tests. CI retains existing Node 22 configuration; Linux CI execution is pending |
| Git | `2.52.0.windows.1` | `C:/Program Files/Git/cmd/git.exe` | VERIFIED history, read-only inspection, isolated branch/worktree, diff checks |
| GitHub CLI | `2.89.0`, github/cli | `C:/Program Files/GitHub CLI/gh.exe` | VERIFIED authenticated GET-only repository/security inspection. No settings changed |
| ripgrep | `15.2.0`, bundled with Codex | `%USERPROFILE%/AppData/Local/OpenAI/Codex/bin/c602dfdab3808440/rg.exe` | VERIFIED local source searches |
| Python | `3.12.10`, Python.org | `%USERPROFILE%/AppData/Local/Programs/Python/Python312/python.exe` | VERIFIED local receipt hashing, metadata comparisons, redacted pattern review and loopback previews; no scanner packages installed |
| PowerShell | `7.6.5` | `%USERPROFILE%/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe` | VERIFIED orchestration and public DNS queries |
| gstack `/browse` | Source commit `a3259400a366593e0c909dd9ac3e59752efd2488`; VERSION `1.60.1.0`; skill frontmatter `1.1.0` | `%USERPROFILE%/.agents/skills/gstack/browse/dist/browse.exe` | VERIFIED browser operational; isolated state directory; local QA and ordinary public-page/documentation reads. Telemetry setting stayed off; update/sync hooks not run |
| gstack `cso` / `review` | Same installed gstack checkout | `%USERPROFILE%/.agents/skills/gstack/{cso,review}/SKILL.md` | Existing available guidance; not invoked in addition to the admitted review skills |
| Additional gstack clone | Commit `cd66fc2f890982351e3178925be563681d0ab2c5`, garrytan/gstack | `%USERPROFILE%/gstack/` | Existing local clone; not used to execute this audit |
| Bun | `1.3.11` | `%USERPROFILE%/.bun/bin/bun.exe` | VERIFIED version command; no installs/builds through Bun |
| Codex CLI | Installed npm package `@openai/codex@0.146.0` | `%USERPROFILE%/AppData/Roaming/npm/node_modules/@openai/codex`; active command wrapper `%USERPROFILE%/.codex/latest/codex.ps1` | Package metadata verified; wrapper version not probed. No nested Codex execution or remote code-review upload |
| Claude Code | Installed npm package `@anthropic-ai/claude-code@2.1.220` | `%USERPROFILE%/AppData/Roaming/npm/node_modules/@anthropic-ai/claude-code`; wrapper `%USERPROFILE%/AppData/Roaming/npm/claude.ps1` | Available but inactive; no invocation |

Browse binary SHA-256: `7d6ba7bee36218eedbbcf801780296c413ae8dff376100cab51046b5cc6cab03`. This is a fingerprint, not a signed binary provenance attestation. Its source checkout has an unrelated modified documentation file. The October 25 receipt does not attest this pre-existing browser binary.

**NOT FOUND in PATH and checked tool locations:** Gitleaks, TruffleHog, detect-secrets, Semgrep, CodeQL CLI, OSV-Scanner, Trivy, Snyk, Actionlint, zizmor, pip-audit, Bandit, govulncheck, hadolint, ZAP, Burp Suite, and skill-scanner. This is not an exhaustive search of every disk. No new scanner was installed. Full entropy-based secret scanning and local CodeQL/Actions scanner execution were therefore not claimed.

## GitHub-hosted protections

| Service | Baseline | Prepared result |
|---|---|---|
| Secret scanning / push protection | EXISTING enabled; zero open secret-scanning alerts returned | Preserved; no duplicate secrets workflow |
| Dependabot alerts and security updates | VERIFIED disabled | NEEDS APPROVAL to enable repository settings |
| Dependabot version updates | No configuration | `.github/dependabot.yml` prepared; inactive until approved publication to default branch |
| CodeQL / code scanning | No analysis; default setup explicitly `not-configured` | One advanced workflow prepared for JavaScript/TypeScript and Actions; **IMPLEMENTED BUT UNVERIFIED** on GitHub. Do not also enable duplicate default setup |
| Repository rulesets / branch protection | None; `main` unprotected | NEEDS APPROVAL; unchanged |

Direct Action commits were resolved from the official upstream repositories and action metadata inspected without executing downloaded code. The dependency lockfile, scanner results and local source remained local; npm queries disclosed public package names/versions only. A public repository is eligible for CodeQL under [GitHub's documented availability](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql).

| Configured Action source | Exact reviewed direct commit |
|---|---|
| https://github.com/actions/checkout (`v4`) | `11d5960a326750d5838078e36cf38b85af677262` |
| https://github.com/actions/setup-node (`v4`) | `49933ea5288caeca8642d1e84afbd3f7d6820020` |
| https://github.com/actions/upload-pages-artifact (`v3`) | `56afc609e74202658d3ffba0e8f6dda462b719fa` |
| https://github.com/actions/deploy-pages (`v4`) | `d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e` |
| https://github.com/github/codeql-action (`v4`, init/analyze) | `9b3254085494b55a0f7c4c2b3d2d52cc712ce370` |

These workflow references are local configuration, not evidence of a completed GitHub scan/deployment. The Pages artifact Action's own `upload-artifact@v4` reference remains an upstream transitive tag.

Accessible discovery also covered user Codex configuration/project-root metadata, `.agents`/`.codex` skill directories, applicable `AGENTS.md` files, local Git remotes/history, package manifests/cache, global npm package metadata, admission/source logs and PowerShell terminal-history metadata. No security-install matches were found in the available terminal history; provenance rests on the dated receipt/source manifests rather than an assumed shell command. Private auth/token files were not opened. Global tool/runtime security and other projects were not audited.
