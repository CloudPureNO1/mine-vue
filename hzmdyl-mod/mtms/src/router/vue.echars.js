const MtmsEcharsIn = resolve => require(['@/components/tabs/echars/MtmsEcharsIn.vue'], resolve);
const MtmsEcharsOut = resolve => require(['@/components/tabs/echars/MtmsEcharsOut.vue'], resolve);
const MtmsPersons = resolve => require(['@/components/tabs/echars/MtmsPersons.vue'], resolve);
const YtgOuter = resolve => require(['@/components/tabs/echars/ygt/YtgOuter.vue'], resolve);
const ExpenseSettlement = resolve => require(['@/components/tabs/echars/ygt/ExpenseSettlement.vue'], resolve);

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
},
{
  path: '/ytgOuter',
  name: 'YtgOuter',
  component: YtgOuter,
  meta: {
    title: '结余留用、超支分担',
    sign: ['echars','ygt'],
    data: ['系统管理']
  }
}
,
{
  path: '/ExpenseSettlement',
  name: 'ExpenseSettlement',
  component: ExpenseSettlement,
  meta: {
    title: '费用结算',
    sign: ['echars','ygt'],
    data: ['系统管理']
  }
}
];

export default vueEchars;