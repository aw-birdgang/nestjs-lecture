## script
```bash
Due to breaking changes in the Jest library, we will need to modify our tests to avoid the following errors:

Test functions cannot both take a 'done' callback and return something. Either use a 'done' callback, or return a promise.

This was first raised in the QA here.

Find the src/users/auth.service.spec.ts file and make the following changes:

1) Ensure that the import has been updated:

import { BadRequestException, NotFoundException } from '@nestjs/common';


2) Refactor 'throws if an invalid password is provided' test to remove try/catch and done callback:

  it('throws if an invalid password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { email: 'asdf@asdf.com', password: 'laskdjf' } as User,
      ]);
    await expect(
      service.signin('laskdjf@alskdfj.com', 'passowrd'),
    ).rejects.toThrow(BadRequestException);
  });
```
