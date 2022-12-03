## script
```bash
Due to breaking changes in the Jest library, we will need to modify our tests to avoid the following errors:

Test functions cannot both take a 'done' callback and return something. Either use a 'done' callback, or return a promise.

This was first raised in the QA here.

Find the src/users/auth.service.spec.ts file and make the following changes:

1) Ensure that the import has been updated:

import { BadRequestException, NotFoundException } from '@nestjs/common';


2) Refactor 'throws an error if user signs up with email that is in use', 'throws if signin is called with an unused email' and 'throws if an invalid password is provided' tests to remove try/catch and done callback:

  it('throws an error if user signs up with email that is in use', async () => {
    await service.signup('asdf@asdf.com', 'asdf');
    await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });
 
  it('throws if signin is called with an unused email', async () => {
    await expect(
      service.signin('asdflkj@asdlfkj.com', 'passdflkj'),
    ).rejects.toThrow(NotFoundException);
  });
 
  it('throws if an invalid password is provided', async () => {
    await service.signup('laskdjf@alskdfj.com', 'password');
    await expect(
      service.signin('laskdjf@alskdfj.com', 'laksdlfkj'),
    ).rejects.toThrow(BadRequestException);
  });
```
