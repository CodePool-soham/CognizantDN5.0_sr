# Git Branching and Merging Hands-On Lab Solution

This solution provides the commands required to complete the Git HOL exercise for branching, merging, and merge requests.

## Prerequisites
- Git installed and configured
- P4Merge tool installed and integrated as the Git diff/merge tool
- Local and remote Git repositories set up

---

## Branching

### 1. Create a new branch
```bash
git branch GitNewBranch
```

### 2. List all branches
```bash
git branch -a
```

### 3. Switch to the new branch
```bash
git checkout GitNewBranch
```

### 4. Add new files and commit
```bash
echo "Content for new branch" > branch_file.txt
git add branch_file.txt
git commit -m "Add branch_file.txt in GitNewBranch"
git status
```

---

## Merging

### 1. Switch back to master
```bash
git checkout master
```

### 2. Show CLI differences
```bash
git diff master GitNewBranch
```

### 3. Show visual differences with P4Merge
```bash
git difftool master GitNewBranch
```

### 4. Merge the branch into master
```bash
git merge GitNewBranch
```

### 5. View log after merge
```bash
git log --oneline --graph --decorate
```

### 6. Delete the merged branch
```bash
git branch -d GitNewBranch
git status
```

---

## Creating Merge Request in GitLab
1. Push both `master` and `GitNewBranch` to the remote repository:
```bash
git push origin master
git push origin GitNewBranch
```

2. Open GitLab in your browser, navigate to your repository.

3. Create a **Merge Request** from `GitNewBranch` into `master`.

4. Review changes, approve, and merge in GitLab.

