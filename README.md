## 1.0 搭建脚手架
* ### 1.1 生成命令行
```
npx create-react-app my-app
cd my-app
npm start
``` 
## 2.0 搭建基础项目架构
- ### 2.1 配置路由<br>

引入`router`, 相对路径地址为： ("src\router\index.js"), 在`App.js`中引入路由router：
```javascript
import './App.css';
import Route from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route></Route>
      </header>
    </div>
  );
}

export default App;
```
- ### 2.2 引入scss、react-router-dom依赖项<br >

引入scss依赖项的时候，会有依赖兼容问题，建议是使用`"node-sass": "^5.0.0"`。根据报错提示进行error修复即可

## 3.0 部署遇到的问题
打包资源为绝对路径`/static`,部署在二级目录会出现404资源找不到问题。查阅资料后在`package.json`配置`  "homepage": "http://sankeyou.top/catwiki"`即可。


