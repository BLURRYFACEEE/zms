import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
  // 1.创建构造器
  const constructor = Vue.extend(Toast)

  // 2.new 的方式 创建组件对象
  const toast = new constructor()

  //3. 将组建对象挂载在手动创建的div中
  toast.$mount(document.createElement('div'))

  //4. toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}
export default obj