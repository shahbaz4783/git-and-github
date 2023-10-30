# What is in .git?

## Config

The config file is for...configuration. We can configure things for global as well as per-repo basis.

```bash
git config --local user.name 'procoder'
```

> This will set `procoder` name for only that repo.


## Refs Folder

Inside of refs, you'll find a heads directory. `refs/heads` contains one file per branch in a repository.  Each file is named after a branch and contains the hash of the commit at the tip of the branch.


For example refs/heads/master contains the commit hash of the last commit on the master branch.


## HASHING FUNCTIONS

Hashing functions are functions that map input data of some arbitrary size to fixed-size output values.


### CRYPTOGRAPHIC HASH FUNCTIONS

- One-way function which is infeasible to invert
- Small change in input yields large change in the output
- Deterministic - same input yields same output
- Unlikely to find 2 outputs with same value


### SHA-1

Git uses a hashing function called SHA-1 (though this is set to change eventually).

- SHA-1 always generates 40-digit hexadecimal numbers
- The commit hashes we've seen a million times are the output of SHA-1


### Git Database

Git is a key-value data store.  We can insert any kind of content into a Git repository, and Git will hand us back a unique key we can later use to retrieve that content.

These keys that we get back are SHA-1 checksums.


### Let's Try Hash

The `git hash-object` command takes some data, stores in in our .git/objects directory and gives us back the unique SHA-1 hash that refers to that data object.


```bash
echo 'my name is shahbaz' | git hash-object --stdin
```

Rather than simply outputting the key that git would store our object under, we can use the `-w` option to tell git to actually write the object to the database.


### Manuallay commiting

```bash
git hash-object app.js -w
```

> This will store app.js file content same as commit


```bash
echo 'my name is shahbaz' | git hash-object --stdin -w
```

### Retrieving data from hash


Now that we have data stored in our Git object database, we can try retrieving it using the `git cat-file` command.   

```bash
git cat-file -p <object-hash>
```

For example;

```bash
git cat-file -p 95afa3bc45862b4090116d40ab70d8d6d5627bea95afa3bc45862b4090116d40ab70d8d6d5627bea
```

> We can provide min 4 to any lenght of hash
