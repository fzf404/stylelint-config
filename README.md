# @fzf404/stylelint-config

[![npm](https://img.shields.io/npm/v/@fzf404/stylelint-config?style=flat&color=f03e3e)](https://npmjs.com/package/@fzf404/stylelint-config)
[![star](https://img.shields.io/github/stars/fzf404/stylelint-config?style=flat&color=1c7ed6)](https://github.com/fzf404/stylelint-config)
[![license](https://img.shields.io/npm/l/@fzf404/stylelint-config?style=flat&color=37b24d)](https://github.com/fzf404/stylelint-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/stylelint-config)

My personal Stylelint config ( 我的 Stylelint 配置 )

## Features ( 特性 )

- Support SCSS order ( 支持 SCSS 排序 )
- Compatible Prettier 3 ( 兼容 Prettier 3 )

## Install ( 安装 )

```bash
# npm
npm i -D @fzf404/stylelint-config

# yarn
yarn i -D @fzf404/stylelint-config

# pnpm
pnpm i -D @fzf404/stylelint-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
{
  "scripts": {
    "lint": "stylelint --cache --fix '**/*.scss'",
  },
  "stylelint": {
    "extends": ["@fzf404/stylelint-config"],
  },
}
```

Edit `Visual Studio Code` Setting ( 编辑 `Visual Studio Code` 设置 )

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
  },
  "stylelint.validate": ["scss"],
}
```
