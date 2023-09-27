#!/bin/bash

# Change to the 'sacwebsite' directory
cd sacWebsite2.0

# Change to the 'client/src' directory
cd client/src

# Remove the 'assests' directory with sudo (enter the password when prompted)
sudo rm -r assests

# Navigate back up two directories
cd ../..

# Rename 'assests' to 'client/src'
mv assests client/src

# Change to the 'client' directory
cd client

# Run 'npm run build' to build the client
npm run build

# Change to the destination directory '/etc/var/www/html/my-app'
cd /etc/var/www/html/my-app

# Remove the 'build' directory
rm -r build

# Navigate back to the home directory
cd

# Change to the 'sacwebsite' directory
cd sacWebsite2.0

# Change to the 'client' directory
cd client

# Move the 'build' directory to '/etc/var/www/html'
mv build /etc/var/www/html

# Exit the script
exit 0

