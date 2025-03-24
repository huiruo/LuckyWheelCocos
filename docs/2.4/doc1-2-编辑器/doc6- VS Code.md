
## 安装 VS Code 扩展插件
在 Cocos Creator 中打开你的项目，然后选择主菜单里的 开发者 -> VS Code 工作流 -> 安装 VS Code 扩展插件。

该操作会将 Cocos Creator API 适配插件安装到 VS Code 全局的插件文件夹中，一般在用户 Home 文件夹中的 .vscode/extensions 目录下。这个操作只需要执行一次，如果 API 适配插件更新了，则需要再次运行来更新插件。

安装成功后在 控制台 会显示绿色的提示：VS Code extension installed to ...。这个插件的主要功能是为 VS Code 编辑状态下注入符合 Cocos Creator 组件脚本使用习惯的语法提示。

## 2.在项目中生成智能提示数据
如果希望在代码编写过程中自动提示 Cocos Creator 引擎 API，需要通过菜单生成 API 智能提示数据并自动放进项目路径下。

选择主菜单的 开发者 -> VS Code 工作流 -> 更新 VS Code 智能提示数据。该操作会将根据引擎 API 生成的 creator.d.ts 数据文件复制到项目根目录下（注意是在 assets 目录外面），操作成功时会在 控制台 显示绿色提示：API data generated and copied to ...。

对于每个不同的项目都需要运行一次这个命令，如果 Cocos Creator 版本更新了，也需要打开您的项目重新运行一次这个命令，来同步最新引擎的 API 数据。



