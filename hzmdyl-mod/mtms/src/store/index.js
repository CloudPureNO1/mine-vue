import Vue from 'vue'
import Vuex  from 'vuex'
import layout from '@/store/modules/layout'
import user from '@/store/modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store=new Vuex.Store({
    modules:{
        layout,
        user
    },

    strict: debug 
})

export default  store