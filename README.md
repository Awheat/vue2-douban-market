# vue2-douban-market 
这是基于vue2 + vue-router2 + vuex + axios 仿(豆瓣市集)的一个webapp项目！ 在这之前只是简单的了解一点关于vue相关的知识，也只停留在写过一点很简单的demo ，但是在对比react和angular之后,还是更加的青睐vue ,so 一直想找个时间更加深入一点的体会一下这个，算是后起之秀的一个MVVM框架吧 ！
so 在最近工作之余的时间就正儿八经的撸起袖子开始了我的vue之旅啦 ！通过这么一个还算完整的demo ，
一开始的时候还是习惯性的思维使用曾经的jquery那样的方式来进行开发 ，越用感觉越别扭，此时也意识到自己可能走偏了 ，所以也不断的根据文档API去看 ，去慢慢尝试转变自己的思维方式 ，以数据作为驱动，慢慢的就开始尝到了框架所带来的好处及方便，
对于数据双向绑定,组件化,模块化, 数据的处理和模板的渲染，性能的优化 ,滚动加载， 图片懒加载 等！有一个完整的认识 ，不过毕竟还是第一次使用，还是有很多不足 ，只能算是一个入门的demo，在大体上对vue有一个认识的 。


### 线上访问地址

http://www.5ishe.win/pages/7/douban/#/

### 手机扫码访问

![Markdown](http://i4.buimg.com/587986/57db1ba3f9a1be19.png)

### 部分截图

![Markdown](http://p1.bqimg.com/587986/50a15b82eaf7347b.jpg)

### 项目地址：（`git clone`）

```shell
git clone https://github.com/Awheat/vue2-douban-market.git
```

### 安装

```
npm install
```

### 运行

```
npm run dev
```
浏览器输入:(http://localhost:8080)即可看到效果

### 发布

```
npm run build
```

### 技术栈

在此DEMO中使用了一下技术
* vue2
* vue-router2
* vuex
* webpack2
* es6
* axios
* vue-infinite-scroll
* vue-lazyload


### 目录结构

<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── mock           // 模拟数据
│   ├── pages          // 各页面
│   ├── router         // 存放路由的文件夹
│   ├── store	       // 状态管理store
│   ├── App.Vue        // 模板文件入口
│   └── main.js        // Webpack 预编译入口
│	

</pre>

### 感谢

感谢您的来访 ，如果对于您有帮助 ，麻烦您使劲的给个Star吧 ！ ^_^ 




