echo "Building app..."
yarn build:dev
echo "Deploy files to server..."
scp -r dist/* root@167.71.202.18:/var/www/html/
echo "Done!"