# 脚手架

#### 流程

1. 选择框架
2. 是否需要 typescript
3. 选择脚手架构建方式，选择社区的执行相应命令，选择自定义进入自定义流程
4. 命令式创建自定义模板
5. 如果是 react 项目，选择全局状态管理工具 redux、mobx 或者不选
6. 如果是移动端项目，添加 postcss-px-to-viewport 后处理器
7. 是否需要 eslint、prettier、Stylelint、Husky、commitlint 等规范工具
8. 是否需要 nginx 配置

#### 相关插件

- ts-node：node 不能直接运行 ts 文件，需要借助 ts-node 运行
- commander：命令行工具
- inquirer：命令行问答交互
- chalk：终端字符样式
- ora：终端 loading

#### 调试

```bash
# 软链到本地
npm link
m-cli create app
```

#### 参考

1. [Awesome Vite.js](https://github.com/vitejs/awesome-vite#templates)
