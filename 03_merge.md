## Merging

> We merge branches, not specific commits.
> We always merge to the current HEAD branch.


### Steps for merging

- Step 1: Switch to the receving branch (where you want to merge changes).
  ```bash
  git switch main
  ```

- Step 2: Use `git merge` command to merge changes from a specific branch into the current branch.
  ```bash
  git merge darktheme
  ```
  