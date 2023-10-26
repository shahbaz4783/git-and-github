## Cloning

We can clone any hosted repo in our machine by using `git clone` command.

```bash
git clone <url>
```

For example:

```bash
git clone https://github.com/gamemann/XDP-Forwarding.git
```


## SSH Keys

You need to be authenticated on Github to do certain operations, like pushing up code from your local machine.  Your terminal will prompt you every single time for your Github email and password, unless...

You generate and configure an SSH key! Once configured, you can connect to Github without having to supply your username/password.

## Git Remote

To push anything up to Github, we need to tell Git about our remote repository on Github.  We need to setup a "destination" to push up to. 

In Git, we refer to these "destinations" as remotes.  Each remote is simply a URL where a hosted repository lives.


To view any existing remotes for you repository:
```bash
git remote -v
```

> This just displays a list of remotes.  If you haven't added any remotes yet, you won't see anything!


### Adding A New Remote

A remote is really two things: a URL and a label.  
To add a new remote, we need to provide both to Git.

```bash
git remote add <name> <url>
```

For example,

```bash
git remote origin https://github.com/blah/repo.git
```

This will tell github to remember that url by the name of `origin`.

> Origin is a conventional Git remote name, but it is not at all special.  It's just a name for a URL. We can change it if we want.

### Rename remote

```bash
git remote rename <old> <new>
```

### Delete Remote

```bash
git remote remove <name>
```


## Pushing

We need to specify the remote we want to push up to AND the specific local branch we want to push up to that remote.

```bash
git push <remote> <branch>
```

For exmaple, git push origin main tells git to push up the master branch to our origin remote.

```bash
git push origin main
```


### local and remote pushing

We can push a local branch in different remote branch too.

```bash
git push <remote> <local-branch>:<remote-branch>
```

For example, to push local `newFeature` branch to remote `darkTheme` branch:

```bash
git push origin newFeature:darkTheme
```


### Upstream

The `-u` option allows us to set upstream of the branch we are pushing.
Its like connecting local branch to a branch on github.

```bash
git push -u <remote> <branch>
```

Once we have set the upstream for a branch, we can use the `git push` shorthand which will push our current branch to the upstream.

We can do it for any branch.

For example, to make `main` branch upstream:
```bash
git push -u origin main
```

For example, to make `darktheme` branch upstream:
```bash
git push -u origin darktheme
```