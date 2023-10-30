## Reflogs

Git keeps a record of when the tips of branches and other references were updated in the repo.

We can view and update these reference logs using the `git reflog` command.

> Git only keeps reflogs on your local activity.  They are not shared with collaborators.

> Reflogs also expire.  Git cleans out old entries after around 90 days, though this can be configured.


```bash
git reflog 
```
The git reflog command accepts subcommands `show`, `expire`, `delete`, and `exists`.  Show is the only commonly used variant, and it is the default subcommand.

`git reflog show` will show the log of a specific reference (it defaults to HEAD).

```bash
git reflog show HEAD
```

For example, to view the logs for the tip of the main branch we could run git reflog show main.

```bash
git reflog show main
```

We can also view other branch:

```bash
git reflog show darktheme
```

We can also view particular file:

```bash
git reflog show app.js
```
