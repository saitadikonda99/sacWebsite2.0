#!/bin/bash

# Step 01: Navigate to sacWebsite/client/src
cd ~/sacWebsite2.0/client/src || { echo "Error: Directory not found"; exit 1; }
echo "Step 01 completed"

# Step 02: Remove Assets
rm -r Assets || { echo "Error: Failed to remove Assets"; exit 1; }
echo "-----------Step 02 completed (Assets Removed)------------"

# Step 03: Navigate back to sacWebsite2.0 and move Assets to client/src
cd ~/sacWebsite2.0 || { echo "Error: Directory not found"; exit 1; }
mv Assets ./client/src || { echo "Error: Failed to move Assets"; exit 1; }
echo "------------Step 03 completed: Assets moved to client/src--------------"

# Step 04: Build the client
cd client || { echo "Error: Directory not found"; exit 1; }
npm run build || { echo "Error: Build failed"; exit 1; }
echo "-----------------step 04 completed: build successful--------------------"

# Step 05: Navigate to my-app and remove the build
cd /etc/var/www/html/my-app || { echo "Error: Directory not found"; exit 1; }
sudo rm -r build || { echo "Error: Failed to delete build"; exit 1; }
echo "--------------------step 05: build deleted from my-app------------------------"

# Step 06: Navigate to client and then move the build to html directory in /etc/var/www
cd ~/sacWebsite2.0/client || { echo "Error: Directory not found"; exit 1; }
mv build /etc/var/www/html/my-app || { echo "Error: Failed to move build"; exit 1; }
echo "---------------------step 06: build added to /etc/var/www/html -----------------------"

exit 0
