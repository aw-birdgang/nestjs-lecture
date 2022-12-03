## script
```bash
Due to breaking changes in the Jest library, we will need to modify our tests to avoid the following errors:

Test functions cannot both take a 'done' callback and return something. Either use a 'done' callback, or return a promise.

This was first raised in the QA here.

Find the src/users/users.controller.spec.ts file and make the following changes:

1) Add the import:

import { NotFoundException } from '@nestjs/common';


2) Refactor 'findUser throws an error if user with given id is not found' test to remove try/catch and done callback:

  it('findUser throws an error if user with given id is not found', async () => {
    fakeUsersService.findOne = () => null;
    await expect(controller.findUser('1')).rejects.toThrow(NotFoundException);
  });
```
