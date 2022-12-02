## script
```bash
In the upcoming lecture, we will be adding service methods to our users.services.ts file. There have been some breaking changes in the 0.3.0 TypeORM release which deprecates findBy and requires a small change to find.

Locate the findOne method and update the return to look like this:

findOne(id: number) {
  return this.repo.findOneBy({ id });
}
Locate the find method and update the return to look like this:

find(email: string) {
  return this.repo.find({ where: { email } });
}

```
