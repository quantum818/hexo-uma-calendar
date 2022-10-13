const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);
const path = require('path');
const fs = require('fs');
const defaultConfig = {
  'enable': true,
  'mode': 'normal',
};
if (hexo.config.umaCale.enable) {
  const csscode = `<style>${fs.readFileSync(`${__dirname}/lib/umamusume.css`, 'utf8')}</style>`;
  hexo.extend.injector.register(
    "body_end",
    csscode,
    //hexo.config.umaCale.localtion
  );


  const jscode = `<script>${fs.readFileSync(`${__dirname}/lib/umamusume.js`, 'utf8')}</script>`;

  hexo.extend.injector.register(
    "body_end",
    jscode,
    //hexo.config.umaCale.localtion
  );
  if(hexo.config.umaCale.mode == 'home'){
    hexo.extend.injector.register(
      "body_begin",
      "<uma-card></uma-card>",
      "home"
    );
  }
}
