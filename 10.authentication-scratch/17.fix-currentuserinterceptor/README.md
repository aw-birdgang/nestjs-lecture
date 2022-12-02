## script
```bash
Don't skip this note! A small fix is needed in the CurrentUserInterceptor.

Please change:

const { userId } = request.session;

To the following:

const { userId } = request.session || {};
```
