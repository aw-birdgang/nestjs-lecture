## script
```bash
In the upcoming lecture, we will be adding a changeApproval method to our reports.services.ts file. There have been some breaking changes in the 0.3.0 TypeORM release which requires a small change.

This issue was first discovered in the QA here.

Find the changeApproval method and refactor findOne to use a 'where' clause and return an integer:



  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOne({ where: { id: parseInt(id) } });
 
    ...
 
  }

```
