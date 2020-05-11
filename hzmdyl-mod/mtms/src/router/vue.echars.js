const MtmsEcharsIn = resolve => require(['@/components/tabs/echars/MtmsEcharsIn.vue'], resolve);
const MtmsEcharsOut = resolve => require(['@/components/tabs/echars/MtmsEcharsOut.vue'], resolve);
const MtmsPersons = resolve => require(['@/components/tabs/echars/MtmsPersons.vue'], resolve);

const vueEchars = [{
    path: '/mtmsEcharsIn',
    name: 'MtmsEcharsIn',
    component: MtmsEcharsIn,
    meta: {
      title: '医保基金收缴',
      sign: ['echars'],
      data: ['系统管理']
    }
},
{
  path: '/mtmsEcharsOut',
  name: 'MtmsEcharsOut',
  component: MtmsEcharsOut,
  meta: {
    title: '医保基金支付',
    sign: ['echars'],
    data: ['系统管理']
  }
}
,
{
  path: '/mtmsPersons',
  name: 'MtmsPersons',
  component: MtmsPersons,
  meta: {
    title: '辖区人员',
    sign: ['echars'],
    data: ['系统管理']
  }
}
];

export default vueEchars;