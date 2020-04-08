<template>
    <div>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader tag="div">
                        <h5>Sample Table</h5>
                        <p>(Using CoreUI table library)</p>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            :items="tableData"
                            :fields="fields"
                            :tableFilter="{
                                placeholder : 'Search...',
                                label: ''
                            }"
                            :itemsPerPage="10"
                            hover
                            sorter
                            pagination
                        >
                            <template #loading>
                                <div class="text-center">
                                    <h4>Loading...</h4>
                                </div>
                            </template>
                            <template #no-items-view>
                                <div class="text-center">
                                    <NoResult :msg="getNoItemsMsg"/>
                                </div>
                            </template>
                        </CDataTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
import { getTableData } from './functions'
import Vue from 'vue'

var NoResult = Vue.component('NoResult', {
    props:{
        msg: String
    },
    template: `<h4>{{msg}}</h4>`
})

export default {
    name: "SampleTable",
    components: {
        NoResult
    },
    data() {
        return {
            tableData : [],
            fields: [],
            noItemsMsg:'Loading...'
        }
    },
    methods: {
    },
    async mounted(){
        this.tableData = await getTableData();
        if (this.tableData === 'Timeout'){
            this.noItemsMsg = 'Request Timeout';
            this.tableData = [];
        } else {
            this.tableData = this.tableData.map((item) => {
                delete item.id; 
                return {...item}} );
            this.fields = Object.keys(this.tableData[0]);
            this.noItemsMsg = '';
        }
        this.tloadState = false;
    },
    computed: {
        getNoItemsMsg(){
            return this.noItemsMsg
        }
    }
}
</script>