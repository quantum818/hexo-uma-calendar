const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);
const _ = require("lodash");
const path = require('path');

const blogRoot = hexo.config.root || "/";

const defaultConfig = {
  'enable': true,
};

let config = _.defaultsDeep(
  {},
  hexo.config.umaCale,
  hexo.theme.config.umaCale,
  defaultConfig
);

if (hexo.config.umaCale.enable) {
  console.log("umaCale is enabled");
  hexo.extend.injector.register(
    "head_begin",
    () => {
      return css("https://cdn.jsdelivr.net/npm/hexo-uma-calendar@0.0.1/lib/umamusume.css");
    },
    hexo.config.umaCale.localtion
  );
  let tempale = `<div class=\"uma_parent\">\r\n  <div id=\"uma-container\"></div>\r\n  <div class=\"jx\">\r\n    <i class=\"fas fa-horse-head\"> UMA特雷森校历 </i>\r\n  </div>\r\n</div>\r\n`;
  hexo.extend.injector.register(
    "body_begin",
    tempale
  );
  hexo.extend.injector.register(
    "body_end",
    () => {
      return js("https://cdn.jsdelivr.net/npm/hexo-uma-calendar@0.0.1/lib/umamusume.js");
    },
    hexo.config.umaCale.localtion
  );
}
