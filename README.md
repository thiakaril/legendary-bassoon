# Hruno

Bilingual English/Indonesian pre-launch landing page for Hruno, an HR suite with an AI copilot across people, leave, attendance, payroll and recruitment.

The product is still in development. The page uses a clearly labelled sample workspace; the waitlist and demo actions resolve to a prefilled email to `hello@hruno.ai.id` until a form endpoint exists.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build

```bash
pnpm build      # production server build
pnpm generate   # static site in .output/public
```

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds the static site and deploys it whenever `main` is updated (or manually via **Actions → Deploy to GitHub Pages → Run workflow**).

Before the first deployment:

1. Open **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Merge to `main`.

Project pages are served under `/<repo>/`; the workflow passes the Pages `base_path` to Nuxt as `NUXT_APP_BASE_URL`, so scripts, styles, fonts and images resolve correctly. User/organization pages and custom domains use `/` and need no extra configuration.

## Structure

- `app/pages/index.vue` — page assembly.
- `app/data/content.ts` — all English/Indonesian copy and the synthetic workspace.
- `app/components/` — hero, copilot, feature board, records, how-it-works, FAQ, CTA and footer.
- `app/assets/` — General Sans, the two credited photographs and global styles.
- `DESIGN.md` / `.impeccable/design.json` — the visual system and tokens.
- `.impeccable/review/` — desktop, tablet and mobile review captures.
- `PRODUCT.md` — product truth and scope constraints.

## Content rules

- Do not add customers, testimonials, logos, pricing, benchmarks, compliance claims or live-product claims.
- Keep every product view labelled as sample data.
- Keep English and Indonesian as separate, idiomatic copies with the same facts.
- Keep the two photo credits visible.
