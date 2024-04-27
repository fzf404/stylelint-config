/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'no-invalid-position-at-import-rule': null,
  },
}
