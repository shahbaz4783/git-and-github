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
  
## Fast Forward Merging

When merging branches, if git automatically resolve the conflicts, it is called fast forward merging. It asks for a commit message in VIM or any text editor like vs code (if git has configured default).

The command for merge will be same.

```bash
git merge bugFix
```


## Fixing Conflicts Manually

If we add a commit in main branch after creating a branch, possibly both branches will not have same file structure or text line numbers.

Git will show an error like this:

```bash
Auto-merging codebase/index.js
CONFLICT (content): Merge conflict in codebase/index.js
Automatic merge failed; fix conflicts and then commit the result.
```


### Resolving Conflicts

Whenever you encounter merge conflicts, follow these steps to resolve them:

- Open up the file(s) with merge conflicts
- Edit the file(s) to remove the conflicts. Decide which branch's content you want to keep in each conflict.  Or keep the content from both.
- Remove the conflict "markers" in the document
- Add your changes and then make a commit!