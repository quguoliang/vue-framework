module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,  // 函数定义时括号前面要不要有空格
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
    // "valid-jsdoc": [2, { // jsdoc规则
    //     "requireParamDescription": true,
    //     "requireReturnDescription": true
    // }],
    "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
    // "space-infix-ops": [2, {"int32Hint": true}], //操作符周围的空格
    "curly": 1, // 必须使用 if(){} 中的{}
    "no-extra-semi": 0, // 可以多余的冒号
    "semi": 0,  // 语句可以不需要分号结尾
    "eqeqeq": 0, // 必须使用全等
    "one-var": 0, // 连续声明
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
