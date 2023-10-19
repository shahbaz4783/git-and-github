## Main or Master Branch

The default branch is main branch.

> Master branch and main branch are same thing. Github renamed master to main in 2020


## Head

HEAD is a pointer that refers to the current location in a repo. It points to a particular branch reference.


## Branches

- To View all the branches:
  ```bash
  git branch
  ```

- To create branches:
  ```bash
  git branch <branchName>
  ```

  For example, to create a new branch for adding darkmode theme in a website:

  ```bash
  git branch darkmode
  ```

This will create a new branch named `darkmode`


- To Switch between branches
  ```bash
  git switch darkmode
  ```

  This will swith branch from main to darkmode.

  > Another way to switch branches (old school)
  ```bash
  git checkout darkmode
  ```

- Creating and Switching branch
  ```bash
  git switch -c <branch-name>
  ```


### View More Info About Branch

```bash
git branch -v
```

This will show:
- lastest commit
- hash
- branch name


## Deleting a branch

To detete a branch:

```bash
git branch -D <branch-name>
```

> If the branch is not merged, it will show an error, to solve it, use `-D` which is equivalent to `--force`

> Make sure you are not in that branch, otherwise it'll will show an error.


### Renaming a branch

We need to have on same branch which we want to rename.

For example, to rename darkmode to darktheme, run:

```bash
git branch -m darktheme
```