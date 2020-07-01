<template>
    <div class="rbac-resources-edit-main"> 
    
        <el-row>
          <el-col :span="24">
             <div class="top-bar">
                <el-card>
                    <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
                    <el-button type="warning" icon="el-icon-edit" size="small">编辑</el-button>
                    <el-button type="danger" icon="el-icon-delete" size="small">删除</el-button>
                </el-card>
             </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
                <el-card>
                    <el-form :model="getFormData" :size="size" :label-width="labelWidth" :label-position="labelPosition">
                        <el-row>
                        <el-col :span="10" :offset="1">
                            <el-form-item label="父资源" prop="parentResourceName">
                                <el-input v-model="resourceFormData.parentResourceName" placeholder="父资源" readonly ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10" :offset="1">
                            <el-form-item label="资源类型" prop="resourceType">
                                <el-select v-model="resourceFormData.resourceType" placeholder="请选择" style="width:100%;">
                                    <el-option v-for="typeItem in typeList" :key="typeItem.value" :label="typeItem.label" :value="typeItem.value" style="width:100%;"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        </el-row>
                        <el-row>
                        <el-col :span="10" :offset="1">
                            <el-form-item label="资源ID" prop="resourceId">
                                <el-input v-model="resourceFormData.resourceId" placeholder="资源ID不能为空" readonly ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10" :offset="1">
                            <el-form-item label="资源名称" prop="resurceName">
                                <el-input v-model="resourceFormData.resurceName" placeholder="请输入资源名称"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>
                        <el-row>
                        <el-col :span="20" :offset="1">
                            <el-form-item label="资源地址" prop="resurceUrl">
                                <el-input v-model="resourceFormData.resurceUrl" placeholder="请输入资源地址" ></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>
                        <el-row>
                        <el-col :span="10" :offset="1">
                            <el-form-item label="资源序号" prop="orderNum">
                                <el-input v-model="resourceFormData.orderNum" placeholder="请输入资源序号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10" :offset="1">
                            <el-form-item label="资源状态" prop="status">
                                <el-select v-model="resourceFormData.status" placeholder="请选择" style="width:100%;">
                                    <el-option v-for="statusItem in statusList" :key="statusItem.value" :label="statusItem.label" :value="statusItem.value" style="width:100%;"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        </el-row>
                        <el-row>
                        <el-col :span="20" :offset="1">
                            <el-form-item label="资源描述" prop="resourceDesc">
                                <el-input v-model="resourceFormData.resourceDesc"  placeholder="请输入资源描述" 
                                type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
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
import { mapState, mapGetters } from 'vuex'
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
                parentResourceName:'',//父资源名称
                resourceType:'',//资源类型
                resourceId:'',
                resurceName:'',
                resurceUrl:'',
                orderNum:'',
                status:'',
                resourceDesc:''
            }
        }
    },
    computed:{
        ...mapState({
            nodeData:state=>state.resource.nodeData
        }),
        ...mapGetters({
            getNodeName:'resource/getNodeName'
        }),
        getFormData(){
            //this.resourceFormData.parentResourceName=this.nodeData.nodeName;
            if(Object.keys(this.nodeData).length>0){
                this.resourceFormData.parentResourceName=this.nodeData['nodeName'];
            }
            return this.resourceFormData;
        }
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