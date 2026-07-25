Git Merge Conflict Resolution Hands-on Solution

Steps to simulate and resolve a merge conflict:

1. Initialize a new repository:
   git init

2. Create 'GitWork' branch and switch to it:
   git checkout -b GitWork

3. Add hello.xml file (branch version) and commit:
   echo "<message>Hello from branch version</message>" > hello.xml
   git add hello.xml
   git commit -m "Add hello.xml in branch"

4. Switch back to master and create hello.xml with different content:
   git checkout master
   echo "<message>Hello from master version</message>" > hello.xml
   git add hello.xml
   git commit -m "Add hello.xml in master"

5. Merge branch into master to create conflict:
   git merge GitWork

6. Observe conflict markers in hello.xml:
   <<<<<<< HEAD
   (master content)
   =======
   (branch content)
   >>>>>>> GitWork

7. Use your editor or merge tool (e.g., P4Merge) to resolve the conflict.

8. Mark as resolved and commit:
   git add hello.xml
   git commit -m "Resolve merge conflict in hello.xml"

9. Add backup files to .gitignore if needed:
   echo "*~
*.bak" >> .gitignore
   git add .gitignore
   git commit -m "Add backup files to .gitignore"

10. Delete merged branch:
    git branch -d GitWork

11. View final commit graph:
    git log --oneline --graph --decorate --all
