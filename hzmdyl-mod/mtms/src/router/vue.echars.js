const MtmsEchars = resolve => require(['@/components/tabs/echars/MtmsEchars.vue'], resolve);

const vueEchars = [{
    path: '/mtmsEchars',
    name: 'MtmsEchars',
    component: MtmsEchars,
    meta: {
      title: '图表',
      sign: ['echars'],
      data: ['系统管理']
    }
}];

export default vueEchars;