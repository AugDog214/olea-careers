# Olea Careers Google Apps Script Setup

This receiver emails every valid recruiting inquiry to `theoleagroup@gmail.com` and stores a backup in a Google Sheet.

## Human Setup

1. Sign into the Google account that should own the recruiting leads.
2. Create a Google Sheet named `Olea Careers - Agent Recruiting Leads`.
   Keep **General access** set to **Restricted**. The Sheet contains private contact information.
3. In the Sheet, open **Extensions → Apps Script**.
4. Replace the editor contents with `Code.gs` from this folder.
5. Open **Project Settings**, enable **Show appsscript.json manifest file**, then replace that file with this folder's `appsscript.json`.
6. Select the `setup` function and click **Run**. Approve the Google Sheets and email permissions. The script creates and formats the `Agent Recruiting Leads` tab.
   If Google shows an unverified-app warning for this private script, choose **Advanced**, continue to the project, and approve it only after confirming you created the project yourself.
7. Select **Deploy → New deployment → Web app**.
8. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
9. Click **Deploy**, approve access if prompted, and copy the URL ending in `/exec`.
10. Send that `/exec` URL to August/Codex. Do not send the `/dev` test URL.

After the URL is received, set it as the GitHub repository secret `GOOGLE_APPS_SCRIPT_URL`, deploy the website, and run one real end-to-end test. Confirm both the inbox email and the Sheet row before removing the phone fallback from the launch checklist. The `/exec` URL is deployment configuration, not a password; the receiver validates and rate-limits submissions because browser visitors can discover it.

## Updating The Script

After editing `Code.gs`, use **Deploy → Manage deployments → Edit → New version → Deploy**. Saving code alone does not update the live `/exec` deployment.
