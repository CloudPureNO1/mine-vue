<template>
    <div>
        <mtms-export></mtms-export>
        <mtms-excel-export></mtms-excel-export>
        <mtms-excel-download></mtms-excel-download>
    </div>
</template>
<script>
import Export from './Export'
import ExcelExport from './ExcelExport'
import ExcelDownload from './ExcelDownload'
export default {
    components:{
        'mtms-export':Export,
        'mtms-excel-export':ExcelExport,
        'mtms-excel-download':ExcelDownload
    }
}
</script>