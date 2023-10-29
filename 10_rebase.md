## Rebase

There are two main ways to use the git rebase command:

- as an alternative to merging
- as a cleanup tool

We can instead rebase the feature branch onto the main branch.  This moves the entire feature branch so that it BEGINS at the tip of the main branch.  All of the work is still there, but we have re-written history.

Instead of using a merge commit, rebasing rewrites history by creating new commits for each of the original feature branch commits.

```bash
git switch feature
git rebase main
```

### Why Rebase?

We get a much cleaner project history.  No unnecessary merge commits!  We end up with a linear project history.


### When not to rebase?

Never rebase commits that have been shared with others.  If you have already pushed commits up to Github...DO NOT rebase them unless you are positive no one on the team is using those commits.



## Rewriting History

Sometimes we want to rewrite, delete, rename, or even reorder commits (before sharing them)
We can do this using git rebase!


Running `git rebase` with the `-i` option will enter the interactive mode, which allows us to edit commits, add files, drop commits, etc.  Note that we need to specify how far back we want to rewrite commits.

```bash
git rebase -i HEAD~4
```

> This will take last 4 commits into interactive mode.


In our text editor, we'll see a list of commits alongside a list of commands that we can choose from. 

Here are a couple of the more commonly used commands:

- `pick -` use the commit

- `reword -` use the commit, but edit the commit message

- `edit -` use commit, but stop for amending

- `fixup -` use commit contents but meld it into previous commit and discard the commit message

- `drop -` remove commit
