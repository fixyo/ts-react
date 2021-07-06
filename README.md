create-react-app 快速初始化 react 工程
npx create-react-app react-ts --template typescript

npm install --exact prettier -D
.prettierigonre
.prettierrc.json

use pre-commit-hook
npx mrm@2 lint-staged // formate your code before commit

npm install eslint-config-prettier -D // solve the conflict between prettier and eslint

```json
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      // 使用prettier规则覆盖一部分原来的规则
      "prettier"
    ]
  },
```

规范 git commit msg
npm install @commitlint/{config-conventional,cli} -D

-- gitbash 中 npm run xxx 不能使用
'"node"' is not internal or external xxx
使用以下命令可暂时解决
set path=%PATH%; setx path “%PATH%”

使用 css-in-js
引入`@emotion/react`, `@emotion/styled`
