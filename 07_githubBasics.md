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
