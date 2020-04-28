import Vue from 'vue'
import validate from '@/utils/validate'
let userValidate={
    validateUsername:function(rule, value, callback){
        if(!validate.validateUsername(value)){
            return callback(new Error());
        }
    }
}
export default userValidate