# @fzf404/stylelint-config

[![npm](https://img.shields.io/npm/v/@fzf404/stylelint-config?color=f03e3e)](https://npmjs.com/package/@fzf404/stylelint-config)
[![star](https://img.shields.io/github/stars/fzf404/stylelint-config?color=1c7ed6)](https://github.com/fzf404/stylelint-config)
[![license](https://img.shields.io/npm/l/@fzf404/stylelint-config?color=37b24d)](https://github.com/fzf404/stylelint-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/stylelint-config)

My personal Stylelint config ( 我的 Stylelint 配置 )

## Features ( 特性 )

- Support SCSS lint ( 支持 SCSS 语法检查 )
- Compatible with Prettier 3 ( 兼容 Prettier 3 )

## Install ( 安装 )

```bash
npm i -D stylelint @fzf404/stylelint-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
// script
"scripts": {
  "lint": "stylelint --cache --fix '**/*.scss'",
}

// config
"stylelint": {
  "extends": [
    "@fzf404/stylelint-config"
  ]
}
```
