# Cypress Issue 22153

See [issue](https://github.com/cypress-io/cypress/issues/22153) filed

### Steps to reproduce

Inside your terminal, run:

```js
yarn
yarn cypress open
```

* Select `E2E Testing`
* Select `Chrome` (Or any browser)
* Click `web_component.cy.js` spec
* wait for test to finish, text displayed should be `I am header 1`
* hover over a command in the command log, the test displayed is `I am header 2`. This should be `I am header 1`
* hover over a **different** command in the command log, the test displayed is `I am header 3`. This should be `I am header 1`

![custom-element-reproduction](https://user-images.githubusercontent.com/3980464/172932286-8e93780c-7574-4db4-949d-4653fea216d1.gif)
