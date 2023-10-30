## Global Git Config

Git looks for the global config file at either  `~/.gitconfig` or `~/.config/git/config`. Any configuration variables that we change in the file will be applied across all Git repos.

> To open it in VS Code:

```bash
code ~/.gitconfig
```
```bash
git config --global --edit
```

After opening it, we can edit and create aliases in vs code.

> To Create alias from the command line:

```bash
git config --global alias.<name-of-our-choice> <git-command-name>
```

For example, to configure `git status` command to `git s`, run:

```bash
git config --global alias.s status
```

```bash
git config --global alias.cm "commit -m"
```