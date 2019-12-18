import Vue from "vue";
import "iview/dist/styles/iview.css"; // 组件样式文件
import { Button, Icon, Switch, Input, Message } from "iview"; // 引入自己用到的组件

Vue.component("Button", Button);
Vue.component("Icon", Icon);
Vue.component("i-switch", Switch);
Vue.component("Input", Input);

Vue.prototype.$Message = Message;
