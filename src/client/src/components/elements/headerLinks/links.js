import $store from '@store';
import {$bus} from '#/plugins/Bus';

let buttons = [];
buttons.push({
  title: "Уввійти",
  class: "is-hidden-desktop",
  handler: () => {
    $bus.$emit('login');
  },
  icon: {
    name: "sign-in",
    pack: "fa"
  },
  tooltip: "Уввійти до акаунту",
  condition: () => !$store.getters.isLogged()
})
buttons.push({
  title: "Реєстрація",
  class: "is-hidden-desktop",
  handler: () => {
    $bus.$emit('register');
  },
  icon: {
    name: "account",
    pack: "mdi"
  },
  tooltip: "Створити акаунт",
  condition: () => !$store.getters.isLogged()
})
buttons.push({
  title: "Вийти",
  class: "is-hidden-desktop",
  handler: () => {
    $bus.$emit('logout');
  },
  icon: {
    name: "sign-out",
    pack: "fa"
  },
  tooltip: "Вийти з акаунту",
  condition: () => $store.getters.isLogged()
})
buttons.push(
  {
    title: "Сторінка",
    class: "is-hidden-desktop",
    icon: {
      name: "user",
      pack: "fa"
    },
    to: {
      name: 'Profile'
    },

    tooltip: "Ваш персональна сторінка",
    condition: () => $store.getters.isLogged()
  }
)
export default buttons;
