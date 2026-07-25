Git Cleanup and Push Back to Remote Hands-on Solution

Steps:

1. Verify if master is in clean state:
   git status

2. List all available branches:
   git branch -a

3. Pull the remote repository to master (ensure you're on master branch):
   git checkout master
   git pull origin master

4. Add and commit pending changes:
   git add pending_changes.txt
   git commit -m "Add pending changes for Git-T03-HOL_002"

5. Push changes to remote repository:
   git push origin master

6. Verify changes in the remote repository by checking on GitHub/GitLab.
