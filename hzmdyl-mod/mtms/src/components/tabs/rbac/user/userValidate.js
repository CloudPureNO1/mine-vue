import Vue from 'vue'
import validate from '@/utils/validate'
let userValidate={
    validateUsername:function(rule, value, callback){
        if(!validate.validateUsername(value)){
            //为了与elementui 自带的校验信息一致{message:'',field:''}
            let obj={};
            obj.message='用户名只能由字母、数组和下划线组成，必须以字母开头，长度大于等于6';
            obj.field=rule.field;
            return callback(obj);
        }
        return callback();
    },
    validatePasswd(rule, value, callback){
        if(!validate.validatePasswd(value)){
            let obj={};
            obj.message='密码必须包含大小写字母、数字和特殊字符，且长度大于等于在8在20之间';
            obj.field=rule.field;
            return callback(obj);
        }
        return callback();
    }
}
export default userValidate