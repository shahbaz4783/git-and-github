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

