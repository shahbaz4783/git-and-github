## Stashing

`git stash` is super useful command that helps you save changes that you are not yet ready to commit.  You can stash changes and then come back to them later.

```bash
git stash
```

Running git stash will take all uncommitted changes (staged and unstaged) and stash them, reverting the changes in your working copy.



> Use git stash pop to remove the most recently stashed changes in your stash and re-apply them to your working copy.


```bash
git stash pop
```


You can use `git stash apply` to apply whatever is stashed away, without removing it from the stash. This can be useful if you want to apply stashed changes to multiple branches.

```bash
git stash apply
```


### Multiple Stashes

We can stash multiple times.

#### To get the list of all  stashes

```bash
git stash list
```


#### To apply specific stashes

```bash
git stash apply stash@{2}
```



#### To delete specific stashes

```bash
git stash drop stash@{2}
```


#### To delete all stashes

```bash
git stash clear
```
