module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // 强制使用一致的缩进
    // http://eslint.cn/docs/rules/indent
    indent: [2, 2, { SwitchCase: 2 }],

    // 不强制使用一致的换行符风格
    // http://eslint.cn/docs/rules/linebreak-style
    'linebreak-style': 0,

    // 强制行的最大长度
    // http://eslint.cn/docs/rules/max-len
    'max-len': [2, 120],

    // 箭头函数允许三元表达式不使用大括号
    // http://eslint.cn/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 0,

    // 禁止未使用过的表达式
    // http://eslint.cn/docs/rules/no-unused-expressions
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],

    // 允许在返回语句中赋值
    // http://eslint.cn/docs/rules/no-return-assign
    'no-return-assign': 0,

    // 允许使用局部require
    // http://eslint.cn/docs/rules/global-require
    'global-require': 0,

    // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
    // http://eslint.cn/docs/rules/comma-dangle
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // 允许变量声明覆盖外层作用域的变量
    // http://eslint.cn/docs/rules/no-shadow
    'no-shadow': 0,

    // 允许对参数的任何属性的修改
    // http://eslint.cn/docs/rules/no-param-reassign
    'no-param-reassign': [2, { props: false }],

    // 允许所有的 key 和 value 在同一行
    // http://eslint.cn/docs/rules/object-property-newline
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],

    // 允许标识符中有悬空下划线
    // http://eslint.cn/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,

    // 允许payload参数通过lint，开启 ignoreRestSiblings
    // http://eslint.cn/docs/rules/no-unused-vars
    'no-unused-vars': [2, { argsIgnorePattern: '^payload', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

    // 允许连续的赋值表达式
    // https://cn.eslint.org/docs/4.0.0/rules/no-multi-assign
    'no-multi-assign': 0,

    // 关闭++运算符检查
    'no-plusplus': 0,

    // 对象的换行限制
    'object-curly-newline': 0,

    // class的方法中必须有this引用
    'class-methods-use-this': 0,

    // 允许使用 /// 注释，在 airbnb 基础上增加 line/markers '/'。
    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
  },
};
