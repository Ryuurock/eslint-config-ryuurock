module.exports = {
  plugins: ['jsx-a11y'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforce that DOM elements without semantic behavior not have interaction handlers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': 0,

    // media elements must have captions
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
    'jsx-a11y/media-has-caption': 0,

    // 非交互元素不允许加事件，比如 img 标签
    // A non-interactive element does not support event handlers (mouse and key handlers)
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    // a标签必须具有href属性
    'jsx-a11y/anchor-is-valid': 0,

    // img标签必须具有alt属性
    'jsx-a11y/alt-text': 0,

    // click事件还需要配一个键盘事件
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
