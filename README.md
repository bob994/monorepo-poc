# Monorepo POC
Idea of this POC is to get more insights is monorepo solution good for us and to get basic knowledge of working with [Lerna](https://lerna.js.org/).
## Prerequisite
Lerna should be installed globaly `npm i -g lerna` or be used with `npx`.
## Development
_Run all commands inside root folder._

### If lerna is installed globaly
Before starting application we need to [bootstrap](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) all dependencies `npm run bootstrap`.

After that we need to compile ui components from typescript to javascript with `npm run tsc`.

At the end start applications with `npm run start`. It will start both, admin (port 3000) and shop (port 4000).

### If `npx` is used
Before starting application we need to [bootstrap](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) all dependencies `npx lerna bootstrap --hoist`.

After that we need to compile ui components from typescript to javascript with `npm run tsc`.

At the end start applications with `npx lerna run start`. It will start both, admin (port 3000) and shop (port 4000).
## Packages
There is three packages inside of this repository:
1. Admin (SPA created with `create-react-app`)
2. Shop (next.js application created with `create-next-app`)
3. Ui-components (shared react components)
## Todo
* Investigate yarn workspaces and why is better to use yarn in alongside monorepo (lerna). [A Beginner's Guide - article](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d)
* Find is there other way to import shop (next.js application) in admin (pure react application) besides iframe.
