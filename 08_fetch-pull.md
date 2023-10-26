## Remote Branches

Once we've cloned a repository, we have all the data and Git history for the project at that moment in time.  However, that does not mean it's all in my workspace.

### To view branches locally, use:

```bash
git branch -r
```

### To go back to the cimmit when cloned the repo

```bash
git checkout origin/main
```

### To get remote branches locally

To create a new local branch from the remote branch, run:

```bash
git switch <remote-branch-name>
```

> Providing the same branch name to the git checkout command will create that remote branch locally.

