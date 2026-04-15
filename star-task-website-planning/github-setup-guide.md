# GitHub Repository Initial Setup Guide

If you are seeing "None" for branches and cannot select GitHub Actions under GitHub Pages, it is because **the remote repository is completely empty** and does not have a `main` branch yet.

To "unlock" the repository settings, you must initialize the repository locally, make a first commit, and push it to GitHub. This will create the `main` branch and allow you to configure GitHub Pages.

## Step-by-Step Instructions

1. Open your terminal and navigate to your local web folder:
   ```bash
   cd "/Users/jahroinimo/Desktop/landing pages dont delete/star-task website"
   ```

2. Run the following commands sequentially to create a temporary README, initialize Git, and push it to the remote repository:
   ```bash
   echo "# Star Task Website" > README.md
   git init
   git add README.md
   git commit -m "Initialize project template"
   git branch -M main
   git remote add origin https://github.com/anextvid-boop/star-task-website.git
   git push -u origin main
   ```

3. Go back to your GitHub Settings page and refresh the browser.

4. You will now be able to go to **Settings > Pages > Source** and explicitly select **GitHub Actions** from the dropdown menu (since the repository now has content).

5. Finally, go to **Settings > Actions > General > Workflow permissions**, select **Read and write permissions**, and click Save.

Once this is done, the repository is ready for the execution phase.
