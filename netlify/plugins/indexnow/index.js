// After a successful production deploy, tell IndexNow (Bing, which feeds
// ChatGPT search and Copilot, plus Yandex, Seznam and Naver) which URLs exist,
// so changes are picked up in hours rather than weeks.
// The key file public/73740e9ae362a4bff2620242cccbbca7.txt proves ownership of the domain.
// Never fails a deploy: errors are logged and ignored.
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'rossoconsulting.ch';
const KEY = '73740e9ae362a4bff2620242cccbbca7';

export const onSuccess = async ({ constants }) => {
  if (process.env.CONTEXT !== 'production') {
    console.log('IndexNow: skipped (not a production deploy)');
    return;
  }
  try {
    const dir = constants.PUBLISH_DIR;
    const maps = fs.readdirSync(dir).filter((f) => /^sitemap-\d+\.xml$/.test(f));
    const urls = maps.flatMap((f) =>
      [...fs.readFileSync(path.join(dir, f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]),
    );
    if (!urls.length) return console.log('IndexNow: no URLs found');
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
    });
    console.log(`IndexNow: submitted ${urls.length} URLs, status ${res.status}`);
  } catch (error) {
    console.log('IndexNow: submission failed (deploy unaffected):', error?.message ?? error);
  }
};
