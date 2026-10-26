# Olea Group security maintenance

Date: 2026-10-26. The owner authorized website publication with "pushlive" after the audit. The release branch is `security/olea-audit-2026-10-26` in `security-worktrees/olea`; use GitHub PR/deployment history for its current release status. Google Apps Script deployment is a separate pending unit. Protected-setting, DNS and production-secret changes are not included.

## Actions requiring owner approval

1. **Website publication is authorized.** The owner's "pushlive" instruction covers pushing the reviewed branch, opening/merging its PR after checks, and the existing automatic Pages deployment. Reconcile any other local edits before future releases. A merge/push to `main` triggers production publication. This authorization does not change protected GitHub settings or DNS.
2. **Update the existing Google Apps Script deployment.** The owner must review/copy the revised `google-apps-script/Code.gs` into the existing project, then use **Deploy → Manage deployments → Edit → New version → Deploy**. Saving code alone does not update `/exec`. Keep existing owner, recipient, restricted Sheet, script properties and scopes. No new backend, sheet or credential is required. Do not change the deployed URL casually.
3. **Perform an explicitly authorized end-to-end fixture submission.** After an approved staging/production update, use synthetic contact information under owner control, confirm email and restricted Sheet delivery, confirm query/hash data is absent, and check the Google iframe/redirect flow under CSP. Do not use a real applicant or silently generate inbox/Sheet records. Current mock checks do not replace this step.
4. **Enable GitHub dependency protections.** In [repository security settings](https://github.com/AugDog214/olea-careers/settings/security_analysis), enable Dependabot alerts and Dependabot security updates. Both were verified disabled. The proposed Dependabot YAML configures weekly update PRs; it does not itself toggle those settings. Keep existing secret scanning and push protection enabled. No automatic merges or unreviewed major upgrades.
5. **Protect `main` after check names exist.** In [repository rules](https://github.com/AugDog214/olea-careers/settings/rules), require pull requests and successful appropriate checks; prevent force pushes/deletion and review bypass access. Candidate checks are `Tests, build, and dependency audit`, `CodeQL (javascript-typescript)` and `CodeQL (actions)`. Choose a reviewer policy that works for the observed single-maintainer repository; requiring an unavailable second approver would block routine maintenance. Do not enable required checks before their first successful runs establish exact names.
6. **Confirm the prepared CodeQL workflow runs.** This public repository is eligible; default setup was `not-configured`. Use the proposed advanced workflow rather than also enabling duplicate default setup. Inspect the first JavaScript and Actions results. Apps Script `.gs` coverage by automatic JS extraction is not assumed; retain its source review/native tests. Any plan/permission error must be reported precisely, not treated as a successful scan.
7. **Review Google data handling.** Verify Sheet **General access: Restricted**, authorized editors/inbox access, account MFA, logs, backups and an owner-selected retention/deletion period for recruiting data. Review historical logs for unexpected PII without copying it into reports. Confirm publication approval for system screenshots. No legal-compliance claim or retention period was invented.
8. **Decide on header infrastructure only if justified.** [The header proposal](docs/security/HEADERS.md) documents exact limits and an optional free Cloudflare path. It requires separate account/DNS approval. Do not migrate nameservers, change mail records, or add HSTS preload automatically.

## Routine checks

Before approving each code release, run from the reviewed checkout using the installed trusted Node/npm executables:

```text
npm ci --ignore-scripts
npm test
npm run build
node scripts/check-faq.mjs
npm audit --audit-level=moderate
git diff --check
```

Inspect package scripts and lockfile changes first. Lifecycle scripts remain disabled because the current build works with the platform's optional binaries directly. Do not turn them back on globally to fix a dependency problem. Verify clean Linux/GitHub execution before approving publication; the local audit used Windows/Node 24, while existing CI stays on Node 22.

Use `/browse` for desktop/mobile navigation, languages, FAQ, calculator and form fallback checks. Test the form with an intercepted local transport until a live fixture submission is separately authorized. Preserve phone/email fallbacks, content, fees, branding, assets, SEO and existing Google delivery.

The prepared security workflow runs verification for PRs, scheduled checks and manual dispatch, and CodeQL for PRs/main/schedule/manual events. The existing deployment build runs the tests/FAQ check on main, avoiding a second security build for that same push. Workflow execution is **IMPLEMENTED BUT UNVERIFIED** until approved publication and successful GitHub runs. Secret scanning/push protection already exist; a duplicate third-party secrets workflow was not added.

## Maintenance cadence

| Cadence / event | Action |
|---|---|
| Weekly | Review Dependabot/advisory notifications and proposed action/dependency updates. Review changes; do not auto-merge |
| Monthly | Review lead delivery failures, spam/quota patterns, Sheet/inbox sharing and unnecessary retained data. Use aggregate categories rather than logging submission contents |
| Quarterly | Recheck GitHub rules/access, security settings, action pins, supported Node/Vite versions, DNS/HTTPS/header state and the data-retention process |
| After a form, integration, asset host or analytics change | Rebuild/test CSP against actual required origins; review data recipients and update the policy deliberately |
| Before certificate expiry or a domain change | Confirm managed certificate renewal and HTTPS enforcement. The sampled certificate was approved and expires 2026-12-19; do not assume a later renewal without checking |
| After skill/tool updates | Review source and admission corrections before activation, retain source/installed hashes, and keep the held helper inactive until its defects are independently resolved |

Treat npm audit's result as a time-bound check for known advisories, not a promise of no vulnerabilities. Separate browser/runtime exposure from developer/CI tooling, and re-evaluate actual reachability when triaging an alert. Prefer safe existing-major patches; review major migrations separately.

## If something looks compromised

If a credential is found, do not print or test it. Record only location/type and ask its owner to revoke/rotate it. Do not modify production secrets, rewrite Git history or delete logs/data without authorization. If lead data might be exposed, restrict access through the owner-approved response process, preserve necessary evidence locally, and do not upload personal data/source to external scanners.

If a local change fails before publication, keep it on its branch and investigate. If an approved deployment later regresses, use the normal reviewed rollback; the previous website artifact and the previous Google deployment version are separate rollback units. No rollback or production change is authorized by this maintenance document alone.
