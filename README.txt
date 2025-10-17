STRUCTURE
==========================================
Create the structure after clone the repo and move the files to the correct location. This is due to permissions denied when GIT PUSH was executed. The current user has not permission because it is a git user from other external and formal project.
HALO/
│
├── playwright.config.ts    --> this contains basic and inicial settings needed to run the tests
├── package.json            --> needed packages and dependencies fo the solution
├── tests/
│   └── form.spec.ts
│   └── data/
│       └── image.png
│
└── src/
    ├── pages/
    │   └── form.page.ts
    └── utils/
        └── testData.ts


INSTALL
==============================================
npm install
npx playwright install


RUN TESTS
==============================================
npm test
or
npm run test:ui //then execute the suite and you will be able to see how it is working



