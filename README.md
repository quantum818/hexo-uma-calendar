# hexo-uma-calendar
hexo page floating window plugin
## 使用方式
 ```
 $ npm install hexo-uma-calendar@0.0.4 --save
 ```
 ## 插件配置
 在hexo根目录下的_config.yml文件中加入
 ```
 umaCale:
  enable: true #是否启用
  mode: 'home' #显示模式home为在首页和有代码处注入normal为只在有代码处注入
 ```
 在需要插入的地方加入html代码
```html
<uma-card></uma-card>
```
## 效果
大概会在代码处或者博客首页左上角出现一个悬浮的小窗口

![](https://upload.cc/i1/2022/10/14/ISfQAm.jpg)

赛马娘热点信息采集自[赛马娘wiki](https://wiki.biligame.com/umamusume/%E9%A6%96%E9%A1%B5)。

