explaining package.json:
------------------------

- 'package.json' is installed by using the node package manager 'npm', it is responsible for storing the metadata like the info about the app (name, version, etc..).

- It also stores the dependencies (the packages the app is using) and their versions.
A dependencies object looks like this: 

```javascript
  "dependencies" {
      "lodash": "^4.12.18"
  }
```

The first number (4) refers to the major changes, which mean that the whole code from the last version is unusable anymore.
The first number (12) refers to the minor changes, which mean that the a new features are added or or updated but without breaking any old code.
The first number (18) refers to the patch changes, which is something related to debugging and so.

The carrot sign (^) means that only the 'manor' and the 'patch' updates will be applied automatically but not the 'major' update.

The total sign (~) means that only the 'patch' updates will be applied automatically but not the 'manor' neither the 'major' updates.