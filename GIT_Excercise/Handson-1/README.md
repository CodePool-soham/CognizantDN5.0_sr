# Git Hands-On Lab Solution

This solution provides the commands required to complete the Git HOL exercise described in the provided document.

## Step 1: Setup Git Configuration
```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list
```

## Step 2: Integrate Notepad++ as Default Git Editor
```bash
# Check if Notepad++ is accessible
notepad++

# If not accessible, add Notepad++ path to environment variables (Windows)
# Example: C:\Program Files\Notepad++

# Create alias for Notepad++
alias np='notepad++'
git config --global core.editor "notepad++ -multiInst -nosession"

# Verify
git config --global -e
```

## Step 3: Add File to Repository
```bash
mkdir GitDemo
cd GitDemo
git init
ls -a

echo "Welcome to Git HOL" > welcome.txt
cat welcome.txt

git status
git add welcome.txt
git commit -m "Add welcome.txt file"

# Link remote repo
git remote add origin <your-repo-url>
git pull origin master
git push origin master
```
