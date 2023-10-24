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
