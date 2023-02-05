#!/bin/bash

# Get the last commit hash
hash=$(git rev-parse HEAD)

# Get the last 10 characters of the hash
hash=${hash: -10}

# Replace the VERSION constant in the constants.ts file
sed -i "s/VERSION.*/VERSION = \"$hash\";/" src/utils/constants.ts

# Configure git with the user's email and name
git config --global user.email "ci-cd@pablitxn.io"
git config --global user.name "CI/CD Pablitxn"

# Add a new commit
git add apps/client/src/utils/constants.ts
git commit -m "ci: update version in src/utils/constants.ts"

# Push the commit to the remote repository
BRANCH=$(git rev-parse --abbrev-ref HEAD)
git push origin $BRANCH

exit 0
