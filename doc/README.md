# cp-home

## 1. 开发框架要求

vue2 或者 vue3 都行。

## 2. 构建工具要求

vue 自带的构建工具或者 vite 都行。


## 3. 开发流程要求

必须启动本地开发服务器开发。例如`npm run dev`

整个项目必须是单页App(Single Page App)，即SPA方式开发。页面跳转不能刷新页面，必须使用vue路由(vue router)实现。任何页面都不能使用静态html页面开发。

公共部分必须提取成vue组件，以便统一维护。比如头部导航条，底部导航条。

## 4. 双环境适配要求和相关开发要求

开发结果必须同时适配pc端和移动端。pc端和移动端的html结构必须使用同一套代码，通过css媒体查询实现自动适配。


## 5. `.env`文件要求

必须使用3个`.env`文件，对应3种环境，示例如下：

`.env.development`:

```
VITE_MODE=development
```

`.env.test`:

```
VITE_MODE=test
```

`.env.production`:

```
VITE_MODE=production
```

## 6. 环境变量数据配置要求

环境变量数据必须统一配置。

目前需要的环境变量包括: 市场url(marketURL),游戏url(playURL)，买蛋url(eggURL)，接口域名url(apiURL)。 这几个数据三种环境对应不同的值。

源码内使用这些数据的地方必须根据当前环境从统一配置的环境变量数据获取。


## 7. 上述环境变量数据配置文件示例(使用vite构建)

```
const env = import.meta.env.VITE_MODE;

const common = {
  wocd: 'WOCD',
};

const config = {
  development: {
    ...common,
    marketURL: 'https://market.kkchain.xyz',
    apiURL: 'https://marketserver.kkchain.xyz',
    playURL: 'https://game.kkchain.xyz/infinity/',
    eggURL: 'https://market.kkchain.xyz/purchase',
  },
  test: {
    ...common,
    marketURL: 'https://market.nnchain.xyz',
    apiURL: 'https://marketserver.nnchain.xyz',
    playURL: 'https://game.nnchain.xyz/infinity/',
    eggURL: 'https://market.nnchain.xyz/purchase',
  },
  production: {
    ...common,
    marketURL: 'https://market.cryptoids.world',
    apiURL: 'https://res.cryptoids.world',
    playURL: 'https://game.cryptoids.world/infinity/',
    eggURL: 'https://market.cryptoids.world/purchase',
  },
};

export default config[env];

```

## 8. 重要业务需求：c和p的url参数，业务需求与流程: 

1. 保存：从非官网页面进入任何页面时候，如果url里有c和p参数，把这两个参数存入localStorage。如果没有则存储，如果已经存储则用新的覆盖。

2. 使用：从任何页面打开非官网外部链接时候，如果localStorage里有c和p参数，则在此外链的url附加上 c=111&b=222 查询参数。

## 9. 要求区分3种构建环境(开发: inner，体验: test，生产: production)

package.json 内的构建命令必须有开发，测试，生产三个环境对应build命令，示例如下：

```
"scripts": {
    "dev": "vite",
    "build:development": "vite build --mode development",
    "build:test": "vite build --mode test",
    "build:production": "vite build --mode production",
  },
```

```
npm run build:development
npm run build:test
npm run build:production
```

三种构建结果的代码必须使用对应上述的环境配置数据。
