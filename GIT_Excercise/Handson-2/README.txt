Git Ignore Hands-on Solution

This repository demonstrates how to ignore unwanted files and folders using .gitignore.

Ignored items:
- All `.log` files
- The `log` folder

Steps to verify:
1. Initialize the repository:
   git init

2. Check git status:
   git status

3. You should see no `.log` files or `log` folder in the staging area.

4. Add other files to track:
   echo "test" > tracked_file.txt
   git add .
   git commit -m "Initial commit with gitignore"

The `.log` files and `log` folder will be ignored as per `.gitignore` rules.
