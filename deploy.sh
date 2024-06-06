echo "Building app..."
yarn build
echo "Deploy files to server..."
scp -r dist/* root@167.71.202.18:/var/www/html/
echo "Done!"