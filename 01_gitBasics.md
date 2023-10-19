## Basic Git Commands

To Check Status of a repo
```bash
git status
```
To add files
```bash
git add <filenames>
```
To add all files
```bash
git add .
```

To Commit changes

```bash
git commit -m 'Your Commit Message'
```

### Atomic Commit

When possible, a commit should encompass a single feature, change or fix.
`Keep each commit focused on a single thing`


### Check Commit message

To see all the commit messages in clean list, pass --oneline option to git log

```bash
git log --oneline
```


### Gitignore

```gitignore
.DS_Store
folderName/
*.log
```

> *.log will ignore all the files that will end with .log