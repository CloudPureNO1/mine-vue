import Vue from 'vue'
import Vuex  from 'vuex'
import comm from '@/store/modules/comm'
import layout from '@/store/modules/layout'
import user from '@/store/modules/user'
import dept from '@/store/modules/dept'
import role from '@/store/modules/role'
import group from '@/store/modules/group'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store=new Vuex.Store({
    modules:{
        comm,
        layout,
        user,
        dept,
        role,
        group
    },

    strict: debug 
})

export default  store