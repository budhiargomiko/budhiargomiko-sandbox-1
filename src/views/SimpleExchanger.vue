<template>
    <div>
        <CRow>
            <CCol xl="6" lg="12">
                <CCard tag="div">
                    <CCardHeader tag="div">
                        <h5>Simple Crypto - Fiat Price Exchanger</h5>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol class="
                                    d-flex
                                    align-items-top
                                    justify-content-center"
                                >
                                <CInput
                                    ref="pair0"
                                    v-model="pair0_value"
                                    type="text"
                                    @keydown="numberOnly($event)"
                                    @keyup="formatNum_pair0('pair0_value', 'pair1_value',
                                        'pair0_select', 'pair1_select')"
                                />
                                <CSelect
                                    :options='cryptooption'
                                    :value.sync='pair0_select'
                                     @update:value="formatNum_pair0('pair0_value', 'pair1_value',
                                        'pair0_select', 'pair1_select')"
                                />
                                <span class="mx-2">
                                    <h2>=</h2>
                                </span>
                                <CInput
                                    ref="target"
                                    type="text"
                                    :lazy="true"
                                    v-model="pair1_value"
                                    @keydown="numberOnly($event)"
                                    @keyup="formatNum_pair1('pair0_value', 'pair1_value',
                                        'pair0_select', 'pair1_select')"
                                />
                                <CSelect
                                    :options='forexoption'
                                    :value.sync='pair1_select'
                                    @update:value="formatNum_pair0('pair0_value', 'pair1_value',
                                        'pair0_select', 'pair1_select')"
                                />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol class="col d-flex justify-content-end">
                                <p>*All the prices value is historical and does not reflect actual current prices</p>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xl="6" lg="12">
                <CCard tag="div">
                    <CCardHeader tag="div">
                        <h5>Simple Crypto - Fiat Price Exchanger</h5>
                        <p>(Uses vue-select)</p>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol class="
                                    d-flex
                                    align-items-top
                                    justify-content-center"
                                >
                                <CInput
                                    ref="pair0"
                                    v-model="pair0_value1"
                                    type="text"
                                    @keydown="numberOnly($event)"
                                    @keyup="formatNum_pair0('pair0_value1', 'pair1_value1',
                                        'pair0_select1', 'pair1_select1')"
                                />
                                <v-select
                                    label="label"
                                    :options="cryptooption"
                                    v-model="pair0_select1"
                                    :value="pair0_select1"                                    
                                    :clearable="false"
                                    :reduce="pair0_select1 => pair0_select1.value"
                                    :filterable="false"
                                    @input="formatNum_pair0('pair0_value1', 'pair1_value1',
                                        'pair0_select1', 'pair1_select1')"
                                />
                                
                                <span class="mx-2">
                                    <h2>=</h2>
                                </span>
                                <CInput
                                    ref="target"
                                    type="text"
                                    :lazy="true"
                                    v-model="pair1_value1"
                                    @keydown="numberOnly($event)"
                                    @keyup="formatNum_pair1('pair0_value1', 'pair1_value1',
                                        'pair0_select1', 'pair1_select1')"
                                />
                                <v-select
                                    label="label"
                                    :options="forexoption"
                                    v-model="pair1_select1"
                                    :value="pair1_select1"
                                    :clearable="false"
                                    :reduce="pair1_select1 => pair1_select1.value"
                                    @input="formatNum_pair0('pair0_value1', 'pair1_value1',
                                        'pair0_select1', 'pair1_select1')"
                                />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol class="col d-flex justify-content-end">
                                <p>*All the prices value is historical and does not reflect actual current prices</p>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>
<style lang="scss">
    $vs-component-line-height: 1.5;
    .vs__dropdown-toggle {
        min-width: 6em;
        height: calc(1.5em + 0.75rem + 2px);
    }
    @import "vue-select/src/scss/vue-select.scss";
</style>
<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import { thousandSeparator, input_numberOnly, Bignumber, unformatNumber, coinmarketCapAPIFetcher} from './functions.js'

Vue.component('v-select', vSelect)
export default {
    name : "SimpleExchanger",
    data : function(){
        return {
            //CoreUI Select
            pair0_value: '',
            pair1_value: '',
            pair0_select : 'BTC',
            pair1_select : 'USD',

            //Vue-Select
            pair0_value1: '',
            pair1_value1: '',
            pair0_select1 : 'BTC',
            pair1_select1 : 'USD',
            forexoption: [
                {
                    value: "USD",
                    label: "USD",
                },
                {
                    value: "EUR",
                    label: "EUR"
                },
                {
                    value: "JPY",
                    label: "JPY"
                },
                {
                    value: "IDR",
                    label: "IDR"
                }
            ],
            cryptooption: [
                {
                    value: "BTC",
                    label: "BTC",
                },
                {
                    value: "XRP",
                    label: "XRP"
                },
                {
                    value: "ETH",
                    label: "ETH",
                },
                {
                    value: "USDT",
                    label: "USDT"
                }
            ]
        }
    },
    methods: {
        //pair0_store(){ //use in @keydown
        //    if (this.getPair0_validity) {
        //        return this.$store.commit("forexinput/simplePairSet", ['simpleEx', 'prev_pair0', this.pair0_value])
        //    }
        //},
        //pair0_validity(value) {
        //    return this.$store.commit("forexinput/simplePairSet", ['simpleEx', 'pair0_valid', value]);
        //},
        //formatNum_pair0() { //use in @input
        //    let result = thousandSeparator(this.pair0_value);   
        //    if (result) {
        //        this.pair0_validity(true);
        //        this.pair0_value = result;
        //    } else {
        //        this.pair0_validity(false);
        //    }
        //},
        dumpLog(value){
            console.log(this[value]);
        },
        numberOnly(event) {
            if (input_numberOnly(event.key)){
                event.preventDefault();
            }
        },
        async formatNum_pair0(pair0_val, pair1_val, pair0_sel, pair1_sel) {
            this[pair0_val] = thousandSeparator(this[pair0_val]);
            var multiplier = await this.getCurrencyValue(this[pair0_sel], this[pair1_sel]);
                multiplier = new Bignumber(multiplier);
            var result = multiplier.multipliedBy(unformatNumber(this[pair0_val]));
            this[pair1_val] = thousandSeparator(result.toString());
        },
        async formatNum_pair1(pair0_val, pair1_val, pair0_sel, pair1_sel) {
            this[pair1_val] = thousandSeparator(this[pair1_val]);
            var multiplier = await this.getCurrencyValue(this[pair0_sel], this[pair1_sel])
            var dividen = new Bignumber(1);
            var result = dividen.dividedBy(multiplier).multipliedBy(unformatNumber(this[pair1_val]));
            this[pair0_val] = thousandSeparator(result.toString());
        },
        async getCurrencyValue(base, quote){
            var getValue = this.$store.state.currencypair[base+'_'+quote];
            if (typeof(getValue ) === 'undefined'){
                let result = await coinmarketCapAPIFetcher(base, quote);
                getValue = result[base+'_'+quote];
                this.$store.commit('currencypair/updateCurrency', [base+'_'+quote, getValue]);
            }
            return getValue
        }
    },
    computed: {
        getPair0_validity  : function(){
            return this.$store.state.forexinput.simpleEx.pair0_valid;
        },
        getPair0() {
            return this.$store.state.forexinput.simpleEx.prev_pair0;
        }
    }
}
</script>