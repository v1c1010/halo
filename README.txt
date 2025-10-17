STRUCTURE
==========================================

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


