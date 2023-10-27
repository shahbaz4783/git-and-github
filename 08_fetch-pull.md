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



## Fetching

Fetching allows us to download changes from a remote repository, BUT those changes will not be automatically integrated into our working files. 

It lets you see what others have been working on, without having to merge those changes into your local repo.

```bash
git fetch <remote>
```
> It will fetch all changes from the origin remote repository.


```bash
git fetch
```
> If we only pass this command, it will fetch everything from remote repo.


We can also fetch a specific branch from a remote
```bash
git fetch <remote> <branch>
```

For example, to fetch darktheme branch, run:

```bash
git fetch origin darktheme
```

I now have those changes on my machine, but if I want to see them, run:

```bash
git checkout origin/darktheme  
```



## Pulling

`git pull` is used to retrieve changes from a remote repository.  Unlike fetch, pull actually updates our HEAD branch with whatever changes are retrieved from the remote.


> git pull =  git fetch + git merge


```bash
git pull <remote> <branch>
```


```bash
git pull origin main 
```

It will fetch the latest information from the origin's main branch and merge those changes into our current branch.

### Smaller syntax

If we run `git pull` without specifying a particular remote or branch to pull from, git assumes the following:

- remote will default to origin
- branch will default to whatever tracking
- connection is configured for your current branch.