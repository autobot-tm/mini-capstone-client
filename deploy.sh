echo "Building app..."
yarn build:dev
echo "Deploy files to server..."
scp -r dist/* root@142.93.49.109:/var/www/html/
echo "Done!"