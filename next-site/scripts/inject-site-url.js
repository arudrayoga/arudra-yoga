const fs = require('fs');
const path = require('path');

// Compute SITE_URL for GitHub Pages project site
// Prefer SITE_URL env if set; otherwise derive from GITHUB_REPOSITORY (owner/repo)

const siteUrlFromEnv = process.env.SITE_URL;
const githubRepo = process.env.GITHUB_REPOSITORY; // owner/repo
const repoName = 'arudra-yoga';

let siteUrl = siteUrlFromEnv;
if(!siteUrl){
  if(githubRepo){
    const owner = githubRepo.split('/')[0];
    siteUrl = `https://${owner}.github.io/${repoName}`;
  }else{
    siteUrl = `https://<your-github-username>.github.io/${repoName}`;
  }
}

console.log('Injecting SITE_URL =', siteUrl);

// Files to replace placeholder __SITE_URL__ in
const files = [
  path.resolve(__dirname, '..', 'public', 'sitemap.xml'),
  path.resolve(__dirname, '..', 'app', 'layout.js')
];

for(const f of files){
  if(!fs.existsSync(f)) continue;
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/__SITE_URL__/g, siteUrl);
  fs.writeFileSync(f, content, 'utf8');
  console.log('Updated', f);
}
