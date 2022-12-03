## script
```bash
Due to breaking changes in the Jest library, we will need to modify our tests to avoid the following errors:

Test functions cannot both take a 'done' callback and return something. Either use a 'done' callback, or return a promise.

This was first raised in the QA here.

Find the src/users/auth.service.spec.ts file and make the following changes:

1) Add Import:

import { BadRequestException } from '@nestjs/common';


2) Refactor 'throws an error if user signs up' test to remove try/catch and done callback:

  it('throws an error if user signs up with email that is in use', async () => {
    fakeUsersService.find = () =>
 
      Promise.resolve([{ id: 1, email: 'a', password: '1' } as User]);
    await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });
```
