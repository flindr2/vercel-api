# 8-deploy-API-med-vercel

## Setup project with Vercel

- Create a directory named `/api` in root
- Create `vercel.json` in root and add the following:

```json
    { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
```

- Create folder `public` in root and in it add empty file `.gitkeep`

- Install `vercel` globally on your system with the command (choose GitHub)

    ```bash
    npm i -g vercel
    ```

- Create a Vercel account at <https://vercel.com>

- Login in to your account using the CLI in the terminal with the command

    ```bash
    vercel login
    ```

- Install `cors` and `dotenv` npm packages:

```bash
  npm install cors dotenv
```

- Add `.env` file and add environmental variable `MONGODB_URI`

```env
MONGODB_URI="mongodb+srv://username:password@yoururl.x4lmd.mongodb.net/yourCollection"
```

- Add the following scripts to `package.json`

```json
"scripts": {
    "dev": "npx tsx watch ./src/index.ts",
    "start:dist": "node dist/src/index.js",
    "build": "tsc",
    "vercel-build": "echo 'vercel-build'"
  },
```

- Update `.env` and use it where you connect to your database
- rename `index.ts` to `app.ts`
  - Add `import 'dotenv/config'` in `app.ts`
  - Use cors in `app.ts`
  - Add catch all GET-endpoint in app.ts
  - Create new index.ts and move `app.listen` to it

```javascript
app.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});
```
  
- Export `app` as `export default app`
- Create new file `index.ts` in root folder `/api` and import `app` from `app.ts`

- Add integration with Vercel in MongoDb Atlas
  - [Vercel Integration in MongoDB Atlas](https://www.mongodb.com/docs/atlas/reference/partner-integrations/vercel/#add-a-vercel-integration)
  - Use the default selections
- Add integration with MongoDb Atlas in Vercel
  - [Connect MongoDB Atlas to Vercel](https://vercel.com/integrations/mongodbatlas)

<!-- - Update `tsconfig.json` and make sure it has  -->

### Länkar

- [Using Express.js with Vercel](https://vercel.com/guides/using-express-with-vercel)
- [Guide - Vercel Integration in MongoDB Atlas](https://www.mongodb.com/docs/atlas/reference/partner-integrations/vercel/#add-a-vercel-integration)
- [Connect MongoDB Atlas to Vercel](https://vercel.com/integrations/mongodbatlas)
