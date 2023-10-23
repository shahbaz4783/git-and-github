## Comparison changes with git diff

`git diff` command is used to view changes between commits, branches, files, working directory and more.

```bash
git diff
```

It will list all the changes in our working directory that are not staged for the next commit.


```bash
git diff HEAD
```

It will list all the changes in the working tree since last commit.


```bash
git diff --staged
```
```bash
git diff --cached
```

Both commannds will the changes between the staging area and our last commit.

> Show me what will be included in my commit if I run git commit rn.


### Diff-ing specific file

We can view the changes within a specific file by proving git diff with a filename.

```bash
git diff HEAD <filename>
```

```bash
git diff --staged <filename>
```


### Comparing Branches

We can list the changes between the tips of branch1 and branch2.

```bash
git diff branch1..branch2
```



### Comparing Commits

We can list the changes between two commits.

```bash
git diff commit1..commit2
```