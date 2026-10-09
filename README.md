# catalogue — analogue.press

A standalone book-interest site based on [annihalated/ulkar](https://github.com/annihalated/ulkar), source commit `bb9db90dcd4b42442536ea12f8c30abbd3b077db`. It reuses the Analogue typefaces, mark, and dark textured background. The book-first layout takes inspiration from [Stripe Press](https://press.stripe.com/). Photographs are from the supplied `catalogue-images` folder.

## Local development

Install Hugo (the Netlify build is pinned to 0.166.0), then run:

```sh
hugo server --bind 127.0.0.1
```

Open http://localhost:1313. Build with `hugo --minify`; output is in `public/`.

## Collecting interest

The default form collects name, email, socials/website, comments, shipping address, optional invitation code, and consent. It submits directly to Netlify Forms, with a honeypot and a `/thanks/` confirmation page. No personal details are put into URLs or browser storage.

1. Import this repository into Netlify. The included `netlify.toml` sets the build command and publish directory.
2. Enable form detection in Netlify's Forms settings, then deploy/redeploy.
3. Verify that `catalogue-interest` appears under Forms. Send one test submission on the deployed site, confirm it appears in the dashboard, and delete the test data.
4. Optionally configure submission email notifications in Netlify.

**Submission collection requires Netlify with Forms enabled.** Hugo's development server does not collect submissions. The local preview deliberately keeps entered data on screen and explains that it has not been sent. Hosting the default form somewhere else requires a replacement submission handler.

Invitation codes are collected for manual review when selecting recipients. They are not a login, do not automatically approve shipping, and are not checked against secrets in browser code. Review codes in Netlify and select recipients privately. Do not commit real codes or submitted addresses to this repository.

Postal code and region are optional to support international addresses that do not use them. Shipping interest does not guarantee a copy. The book description and contents are based on the supplied photos; edit the text in `layouts/home.html` when final copy is available.

Netlify setup reference: https://docs.netlify.com/manage/forms/setup/

## Switch to Tally

When Hiya shares the new form, set `params.tallyFormId` in `hugo.yaml` to its ID (the part after `tally.so/r/`). The page will render that form instead of the native one. Do not reuse the original Ulkar event form ID. Set up the fields, recipient selection, and confirmation message in Tally itself. The embed has dynamic height and a direct-form fallback link.

Tally embed reference: https://tally.so/help/embed-your-form

## Editing the site

- `layouts/home.html`: book copy, contents, gallery and native form.
- `assets/css/global.css`: layout, responsive rules and typography.
- `static/js/catalogue.js`: gallery controls and truthful local form preview.
- `static/images/`: three supplied book photographs.
- `hugo.yaml`: page metadata and optional Tally ID. Set `baseURL` to the final domain before production deployment so social image URLs are absolute.

The repository contains no event pages, old event registration embed, submission data, or external analytics. No deployment has been created automatically.
