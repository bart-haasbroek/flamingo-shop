import Vue from 'vue'

export default () => {
    Vue.filter('price', function (value) {
        if (!isNaN(parseFloat(value))) {
            value = `€ ${value}`;
        }
        return value;
    })
}