const JavaScriptObfuscator = require('webpack-obfuscator');
module.exports = {
    mode: 'production',
    entry: {
        app: __dirname + "/../src/index.js"
    },
    output: {
        path: __dirname +"/../dist",
        filename: "bundle.js"
    },
    plugins: [
        new JavaScriptObfuscator({
            compact: true,                  // 压缩代码
            controlFlowFlattening: true,    // 是否启用控制流扁平化(降低1.5倍的运行速度)
            deadCodeInjection: true,        // 随机的死代码块(增加了混淆代码的大小)
            renameGlobals: false,           // 是否启用全局变量和函数名称的混淆
            rotateStringArray: true,        // 通过固定和随机（在代码混淆时生成）的位置移动数组。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
            unicodeEscapeSequence: true     // 允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。
        }, [])
    ]
};