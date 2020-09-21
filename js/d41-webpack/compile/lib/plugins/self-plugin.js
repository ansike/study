const { SyncHook } = require("tapable")
class SelfPlugin {
  apply(compiler) {


    compiler.plugin("environment", (compilation) => {
      console.log("environment");
    })
    compiler.plugin("afterEnvironment", (compilation) => {
      console.log("afterEnvironment");
    })
    compiler.plugin("entryOption", (compilation) => {
      console.log("entryOption");
    })
    compiler.plugin("afterPlugins", (compilation) => {
      console.log("afterPlugins");
    })
    compiler.plugin("afterResolvers", (compilation) => {
      console.log("afterResolvers");
    })
    compiler.plugin("beforeRun", (compilation) => {
      console.log("beforeRun");
    })
    compiler.plugin("run", (compilation) => {
      console.log("run");
    })



    // compiler.plugin("shouldEmit", (compilation) => {
    //   console.log("shouldEmit");
    // })
    // compiler.plugin("done", (compilation) => {
    //   console.log("done");
    // })
    // compiler.plugin("additionalPass", (compilation) => {
    //   console.log("additionalPass");
    // })

    // compiler.plugin("emit", (compilation) => {
    //   console.log("emit");
    // })
    // compiler.plugin("assetEmitted", (compilation) => {
    //   console.log("assetEmitted");
    // })
    // compiler.plugin("afterEmit", (compilation) => {
    //   console.log("afterEmit");
    // })
    // compiler.plugin("thisCompilation", (compilation) => {
    //   console.log("thisCompilation");
    // })
    compiler.plugin("compilation", (compilation) => {
      console.log("compilation");
    })
    // compiler.plugin("normalModuleFactory", (compilation) => {
    //   console.log("normalModuleFactory");
    // })
    // compiler.plugin("contextModuleFactory", (compilation) => {
    //   console.log("contextModuleFactory");
    // })
    // compiler.plugin("beforeCompile", (compilation) => {
    //   console.log("beforeCompile");
    // })
    // compiler.plugin("compile", (compilation) => {
    //   console.log("compile");
    // })
    // compiler.plugin("make", (compilation) => {
    //   console.log("make");
    // })
    // compiler.plugin("afterCompile", (compilation) => {
    //   console.log("afterCompile");
    // })
    // compiler.plugin("watchRun", (compilation) => {
    //   console.log("watchRun");
    // })
    // compiler.plugin("failed", (compilation) => {
    //   console.log("failed");
    // })
    // compiler.plugin("invalid", (compilation) => {
    //   console.log("invalid");
    // })
    // compiler.plugin("watchClose", (compilation) => {
    //   console.log("watchClose");
    // })
    // compiler.plugin("infrastructureLog", (compilation) => {
    //   console.log("infrastructureLog");
    // })




    // compiler.hooks.myhook = new SyncHook(['data'])
    // compiler.hooks.myhook.tap("listenSlef", (...args) => {
    //   console.log('listenSlef1', args);
    // })


    // // console.log(compiler);
    // compiler.hooks.shouldEmit.tap('listenSlef', (...args) => {
    //   console.log('listenSlef-shouldEmit', args);
    // })
  }
}
module.exports = SelfPlugin