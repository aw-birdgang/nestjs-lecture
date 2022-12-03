## script
```bash
You can dramatically speed up your tests by updating the package.json file.

In the scripts section, find the following line:

"test:watch": "jest --watch",

And change it to:

"test:watch": "jest --watch --maxWorkers=1",

Restart your test runner at your terminal after making this change
```
