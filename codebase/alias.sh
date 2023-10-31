#!/bin/bash

# Open the global Git config file in VS Code
code ~/.gitconfig

# Edit the global Git config using the `git config` command
git config --global --edit

# Create Git aliases
git config --global alias.s status
git config --global alias.cm "commit -m"

echo "Global Git config updated and aliases created."

