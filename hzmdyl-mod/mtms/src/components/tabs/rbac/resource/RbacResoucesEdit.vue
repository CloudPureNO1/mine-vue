<template>
    <div class="rbac-resources-edit-main"> 
    
        <el-row>
          <el-col :span="24">
             <div class="top-bar">
                <el-card>
                    <el-button type="primary" icon="el-icon-plus" size="small" @click="addResource">添加</el-button>
                   <!-- <el-button type="warning" icon="el-icon-edit" size="small" @click="editResource">编辑</el-button>-->
                    <el-button type="success" icon="el-icon-delete" size="small" @click="addOrEditResource">保存</el-button>
                    <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteResource" >删除</el-button>
                </el-card>
             </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
                <el-card>
                    <el-form :model="resourceFormData" :size="size" :label-width="labelWidth" :label-position="labelPosition">
                        <el-row>
                            <el-col :span="22" :offset="1">
                                <el-form-item label="父资源" prop="parentResourceName">
                                    <el-input v-model="resourceFormData.parentResourceName" placeholder="父资源" readonly ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="22" :offset="1">
                                <el-form-item label="资源排序" prop="orderNum">
                                    <el-input-number v-model="resourceFormData.orderNum" controls-position="right"   :min="0" :max="100" style="width:100%;text-align: left;"></el-input-number>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="22" :offset="1">
                                <el-form-item label="资源名称" prop="resurceName">
                                    <el-input v-model="resourceFormData.resurceName" placeholder="请输入资源名称"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="22" :offset="1">
                                <el-form-item label="资源地址" prop="resurceUrl">
                                    <el-input v-model="resourceFormData.resurceUrl" placeholder="请输入资源地址" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="22" :offset="1">
                                <el-form-item label="资源类型" prop="resourceType">
                                    <el-select v-model="resourceFormData.resourceType" placeholder="请选择" style="width:100%;">
                                        <el-option v-for="typeItem in typeList" :key="typeItem.value" :label="typeItem.label" :value="typeItem.value" style="width:100%;"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="22" :offset="1">
                                <el-form-item label="资源状态" prop="status">
                                    <el-select v-model="resourceFormData.status" placeholder="请选择" style="width:100%;">
                                        <el-option v-for="statusItem in statusList" :key="statusItem.value" :label="statusItem.label" :value="statusItem.value" style="width:100%;"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                        <el-col :span="22" :offset="1">
                            <el-form-item label="资源描述" prop="resourceDesc">
                                <el-input v-model="resourceFormData.resourceDesc"  placeholder="请输入资源描述" 
                                type="textarea" :autosize="{ minRows: 4, maxRows: 5}"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>
                    </el-form>
                </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState, mapGetters ,mapActions} from 'vuex'
 import TreeMock from '@/mock/tree'
import axios from 'axios';

export default {
 
    data(){
        return{
            labelPosition:'right',
            labelWidth:'auto',
            size: 'medium',
            typeList:[
                {label:'节点',value:'1'},
                {label:'叶子',value:'2'},
                {label:'按钮',value:'3'}
            ],
            statusList:[
                {label:'有效',value:'1'},
                {label:'无效',value:'0'}
            ],
            resourceFormData:{
                parentResourceId:'',
                parentResourceName:'',//父资源名称
                resourceType:'',//资源类型
                resurceName:'',
                resurceUrl:'',
                orderNum:'',
                status:'',
                resourceDesc:''
            }
        }
    },
    watch:{
        nodeData:{
            handler(newVal,oldVal){
                if(Object.keys(this.nodeData).length>0){
                    //this.resourceFormData.parentResourceName=this.nodeData['nodeName'];
                    axios.post('/mtms/api/getNodeData',{"nodeId":this.nodeData.nodeId})
                    .then((resp)=>{
                        if(resp.data.code!=0){
                            this.$alert(resp.data.msg, '温馨提示', {
                                type: 'warning'
                            });
                        }else{
                            this.resourceFormData = resp.data.body;
                        }
                    })
                    .catch((err)=>{
                            this.$alert(err, '温馨提示', {
                                type: 'error'
                            });
                    })
                }else{
                    this.resourceFormData={
                        parentResourceId:'',
                        parentResourceName:'',//父资源名称
                        resourceType:'',//资源类型
                        resurceName:'',
                        resurceUrl:'',
                        orderNum:'',
                        status:'',
                        resourceDesc:''
                    }
                }
            },
            deep:true
        }
    },
    computed:{
        ...mapState({
            nodeData:state=>state.resource.nodeData
        }) 
    },
    methods:{
        addResource(){
            this.resourceFormData={
                parentResourceId:this.nodeData.nodeId,
                parentResourceName:this.nodeData.nodeName,//父资源名称
                resourceType:'',//资源类型
                resurceName:'',
                resurceUrl:'',
                orderNum:'',
                status:'',
                resourceDesc:''
            }
        },
        addOrEditResource(){
             axios.post('/mtms/api/addOrEditResource',this.resourceFormData)
             .then((resp)=>{
                 if(resp.data.code==0){
                     this.resourceFormData=resp.data.body;
                     this.$alert('成功','温馨提示',{type:'success'})
                 }else{
                     this.$alert(resp.data.msg,'温馨提示',{type:'warning'})
                 }
             }).catch((err)=>{
                 this.$alert(err,'温馨提示',{type:'error'});
             })
        },
        deleteResource(){
            //console.log('delete node');
            //调用接口
            this.setNodeData({})
        },
        ...mapActions({
            setNodeData:'resource/setNodeData'
        }),
        } 
}
</script>
<style scoped>
    .rbac-resources-edit-main{
        /*padding:4px;*/
        height: calc(84vh);
        width: 100%;
    }
    .rbac-resources-edit-main .top-bar{
        text-align: right;
    }
 
</style>
<style>
.rbac-resources-edit-main .el-input--medium .el-input__inner {
    height: 36px;
    line-height: 36px;
    text-align: left;
}
</style>