## Git Tags

Tags are pointers that refer to particular points in Git history.  We can mark a particular moment in time with a tag.  Tags are most often used to mark version releases in projects (v4.1.0, v4.1.1, etc.)



## Semantic Versioning

The semantic versioning spec outlines a standardized versioning system for software releases. It provides a consistent way for developers to give meaning to their software releases (how big of a change is this release??)

> Versions consist of three numbers separated by periods.

```bash
Major Release . Minor Release . Patch Relase

3.14.7
```

### Initial Release
Typically, the first release is 1.0.0


### Patch Release
Patch releases normally do not contain new features or significant changes.  They typically signify bug fixes and other changes that do not impact how the code is used.


### Minor Release
Minor releases signify that new features or functionality have been added, but the project is still backwards compatible.  No breaking changes.  The new functionality is optional and should not force users to rewrite their own code.


### Major Release
Major releases signify significant changes that is no longer backwards compatible.  Features may be removed or changed substantially.




## Viewing Tags

git tag will print a list of all the tags in the current repository.

We can search for tags that match a particular pattern by using `git tag -l` and then passing in a wildcard pattern.  

For example, 
```bash
git tag -l "*beta*"
```

 It will print a list of tags that include "beta" in their name.



## Checking Out Tags

To view the state of a repo at a particular tag, we can use:

```bash
 git checkout <tag>
```
 
> This puts us in detached HEAD!






## Types of Tags

There are two types of Git tags we can use:

- `lightweight tags:` They are just a name/label that points to a particular commit.

- `annotated tags:` They store extra meta data including the author's name and email, the date, and a tagging message (like a commit message)



### Creating Lightweight Tags

```bash
git tag <tagname>
```

For example:

```bash
git tag v4.3.2
```

> By default, Git will create the tag referring to the commit that HEAD is referencing.


### Creating Annotated Tags

```bash
git tag -a <tagname>
```
This will prompt to text editor for additional information. Same as commit messages.

To pass a message directly and forgo the opening of the text editor, use -m instead of -a with message

```bash
git tag -m 'this is latest version' v7.0.0
```


### Tagging Previous Commits

```bash
git tag <tagname> <commit-hash>
```

> We can also use annited tags for tagging previous commits.


### Forcing Tags

Git will yell at us if we try to reuse a tag that is already referring to a commit. If we use the -f option, we can FORCE our tag through.

```bash
git tag -f <tagname>
```

### Deleting Tags

```bash
git tag -d <tagname>
```

### Pushing Tags

To push all tags at once:

```bash
git push <remote> --tags
```

To push a single tag:

```bash
git push origin v2.4.1
```
