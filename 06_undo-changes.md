## Checkout

We can use `git checkout commit-hash`
to view a previous commit. 

```bash
git checkout n74bf24
```


### Detached HEAD

When we checkout a particular commit, HEAD points at that commit rather than at the branch pointer.

> We have a couple options to re-attach the head:

- Stay in detached HEAD to examine the contents of the old commit.  Poke around, view the files, etc.

- Leave and go back to wherever you were before - reattach the HEAD, for example:
  ```bash
  git switch main
  ```
  
- Create a new branch and switch to it.  You can now make and save changes, since HEAD is no longer detached.
  ```bash
  git switch -c newBranch
  ```


### Going back with HEAD

#### To go back one commit back 
```bash
git checkout HEAD~1
```

#### To go back three commit back 
```bash
git checkout HEAD~3
```

#### To come back on last commit on particular branch
```bash
git switch -
```


### Discarding Changes with git checkout

To revert the file back to whatever it looked like in last commit, use:

```bash
git checkout HEAD <filename>
```

> Shorter option to revert a file

```bash
git checkout -- <filename>
```


## Restore

`git restore` was introduced alongside git switch as alternatives to some of the uses for checkout.

Suppose you've just made a couple of commits on the master branch, but you actually meant to make them on a separate branch instead.  To undo those commits, you can use git reset.

```bash
git reset <commit-hash> 
```

> It will reset the repo back to a specific commit.  The commits are gone


### Unmodifying Files with Restore

To restore the file to the contents in the HEAD, 
use:

```bash
git restore <filename>
```

> This is alternate for `git checkout HEAD <filename>` command



```bash
git restore --source HEAD~1 home.html
```

This will restore the contents of home.html to its state from the commit prior to HEAD.  You can also use a particular commit hash as the source.


### Unstaging Files with Restore

To unstage a particular file use:

```bash
git restore --staged apikey.txt
```
