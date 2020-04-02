import accounting from 'accounting'
import Bignumber from 'bignumber.js'
import axios from 'axios'

function thousandSeparator(value, fixed=0, separator=",", decimal="."){
    //var val = new Bignumber(value);
    //if (isNaN(val)) {
    //    return false 
    //} else {
        var splittedValue = value.split(decimal);
        if (splittedValue.length > 1) { value = splittedValue[0] }
        var val = accounting.unformat(value);
            val = new Bignumber(val);
            val = accounting.formatNumber(val.toString(), fixed, separator,  decimal);
        if (splittedValue.length > 1) { val = val + decimal + splittedValue[1] }
        return val;
    //}
}

function unformatNumber(value){
    return accounting.unformat(value);
}

function input_numberOnly(input){
    let reg = /^[a-zA-Z_\+\-=<>?/"'\\|{\][\]()!@#$%^&*`~]$/
    return reg.test(input);
}

function cmcdissectPrice(objects, base){
    objects = objects.quote;
    let result = {};
    Object.keys(objects).forEach((quote) => {
        result[base+'_'+quote] = objects[quote].price;
    });
    return result;
}

 async function coinmarketCapAPIFetcher(base, quote){
    return axios.get('/v1/cryptocurrency/quotes/latest',{
        params:{
            symbol : base,
            convert : quote
        }
    }).then((response) => {
        let tmp = Object.values(response.data.data);
        let result = {};
        let bs = base.split(',');
        tmp.forEach((cryptoQuotes, index) => {
            Object.assign(result, cmcdissectPrice(cryptoQuotes, bs[index]));
        });
        return result
    });
}

export {
    Bignumber, 
    thousandSeparator,
    input_numberOnly,
    unformatNumber,
    coinmarketCapAPIFetcher
}