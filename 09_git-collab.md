## Centralised Workflow

The simplest collaborative workflow is to have everyone work on the main branch (or any other SINGLE branch).

### The Problem

While it's nice and easy to only work on the main branch, this leads to some serious issues on teams!

- Lots of time spent resolving conflicts and merging code, especially as team size scales up.

- No one can work on anything without disturbing the main codebase.  How do you try adding something radically different in?  How do you experiment?

- The only way to collaborate on a feature together with another teammate is to push incomplete code to main.  Other teammates now have broken code.



## Feature Branches

Rather than working directly on main branch, all new development should be done on separate branches!

- Treat main branch as the official project history

- Multiple teammates can collaborate on a single feature and share code back and forth without polluting the main branch

- Main branch won't contain broken code (or at least, it won't unless someone messes up)


### Feature Branch Naming

There are many different approaches for naming feature branches.  Often you'll see branch names that include slashes like `bug/fix-scroll` or `feature/login-form` or `feat/button/enable-pointer-events`.



## Merging In Feature Branches

At some point new the work on feature branches will need to be merged in to the main branch!  

We can:

1. Merge at will: Without any sort of discussion with teammates, if we are a collabrator.  JUST DO IT WHENEVER YOU WANT. We can do it from local repo.
   
2. Pull Requests!: If You are not a collabratore you have to raise a pull request. We can do it from github.


### Pull Requests

It allow developers to alert team-members to new work that needs to be reviewed.  They provide a mechanism to approve or reject the work on a given branch.  They also help facilitate discussion and feedback on the specified commits.  


> Its like developer is asking - "I have this new stuff I want to merge in to the main branch...what do you all think about it?"



### The Workflow

1. Do some work locally on a feature branch
   
2. Push up the feature branch to Github

3. Open a pull request using the feature branch just pushed up to Github

4. Wait for the PR to be approved and merged. Start a discussion on the PR.  This part depends on the team structure.


### Merging Confilct of pull request

Just like any other merge, sometimes there are conflicts that need to be resolved when merging a pull request.

You can perform the merge and fix the conflicts on the command line like normal, or you can use Github's interactive editor.

> To merge the branch and resolve the conflicts locally:

Step 1: Switch to the branch in question.  Merge in main and resolve the conflicts.

```bash
git fetch origin
git switch my-new-feature
git merge main
fix conflicts!
```

Step 2: Switch to main. Merge in the feature branch (now with no conflicts). Push changes up to Github

```bash
git switch main
git merge my-new-feature
git push origin main
```
