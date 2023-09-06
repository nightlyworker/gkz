#!/bin/bash
echo 'Deploy started'
yarn build
echo 'Build complete'
echo 'Copying files'
ssh -i /home/martin/lab/h2/_infra/v2 root@10.20.40.1 'rm -rf /home/genekeys.zone/dist/*'
rsync -az --delete -e 'ssh -i /home/martin/lab/h2/_infra/v2' dist/ root@10.20.40.1:/home/genekeys.zone/dist
echo 'Copy complete'
echo 'Restarting containter'
ssh -i /home/martin/lab/h2/_infra/v2 root@10.20.40.1 'cd /home/genekeys.zone && docker-compose restart'
echo 'Deploy finished'


#curl -X POST "https://api.cloudflare.com/client/v4/zones/82fd8fbb686a7ca5e8aefbeda7aed7e4/purge_cache" \
#     -H "X-Auth-Email: lmymarketing1@gmail.com" \
#     -H "X-Auth-Key: a7500b78bd6a89e4905da7129a65326d5b20c" \
#     -H "Content-Type: application/json" \
#     --data '{"purge_everything":true}'
# echo 'Cache cleated'

#curl https://www.google.com/webmasters/tools/ping\?sitemap\=https://humandesign.zone/sitemap.xml
#echo 'Google notified'
