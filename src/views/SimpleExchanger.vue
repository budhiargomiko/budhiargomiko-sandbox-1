import { thousandSeparator, Bignumber } from './functions';
<template>
    <div>
        <CRow>
            <CCol>
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
                                    @keyup="formatNum_pair0"
                                />
                                <CSelect
                                    :options='cryptooption'
                                    :value.sync='pair0_select'
                                     @update:value='formatNum_pair0'
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
                                    @keyup="formatNum_pair1"
                                />
                                <CSelect
                                    :options='forexoption'
                                    :value.sync='pair1_select'
                                    @update:value='formatNum_pair0'
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

<script>
import { thousandSeparator, input_numberOnly, Bignumber, unformatNumber, coinmarketCapAPIFetcher} from './functions.js'

export default {
    name : "SimpleExchanger",
    data : function(){
        return {
            pair0_value: '',
            pair1_value: '',
            pair0_select : 'BTC',
            pair1_select : 'USD',
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
        numberOnly(event) {
            if (input_numberOnly(event.key)){
                event.preventDefault();
            }
        },
        async formatNum_pair0() {
            this.pair0_value = thousandSeparator(this.pair0_value);
            var multiplier = await this.getCurrencyValue(this.pair0_select, this.pair1_select);
                multiplier = new Bignumber(multiplier);
            var result = multiplier.multipliedBy(unformatNumber(this.pair0_value));
            this.pair1_value = thousandSeparator(result.toString());
        },
        async formatNum_pair1() {
            this.pair1_value = thousandSeparator(this.pair1_value);
            var multiplier = await this.getCurrencyValue(this.pair0_select, this.pair1_select)
            var dividen = new Bignumber(1);
            var result = dividen.dividedBy(multiplier).multipliedBy(unformatNumber(this.pair1_value));
            this.pair0_value = thousandSeparator(result.toString());
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