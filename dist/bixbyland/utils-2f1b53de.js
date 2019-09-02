import { s as sortBy, p as prop, r as reverse } from './index-c80d6ea7.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
function getSubString(numberString, removeNumber) {
    return numberString.substring(0, numberString.length - removeNumber);
}
function formatLargeNumber(number) {
    let numberString = number.toString();
    let numberLength = number.toString().length;
    switch (numberLength) {
        //35000
        case 5:
        case 6:
            return `${getSubString(numberString, 3)}K`;
        // return numberString.replace('000', 'K');
        //3300000
        case 7:
        case 8:
        case 9:
            // str.substring(0, str.length - 1);
            return `${getSubString(numberString, 6)}M`;
        case 10:
        case 11:
        case 12:
            return `${getSubString(numberString, 9)}B`;
    }
    return numberString;
}
/**
 * TODO: Use R.sortWith with R.ascend & R.descend
 */
function sorter(value, haystack) {
    switch (value) {
        case 'alpha_asc':
            var sortByNameCaseInsensitive = sortBy(prop('post_title'));
            var sort = sortByNameCaseInsensitive(haystack);
            return sort;
        case 'alpha_dsc':
            var sortByNameCaseInsensitive = sortBy(prop('post_title'));
            var sort = sortByNameCaseInsensitive(haystack);
            return reverse(sort);
        case 'sqft_asc':
            var sortByNameCaseInsensitive = sortBy((haystack) => haystack.meta.sq_ft[0]);
            var sort = sortByNameCaseInsensitive(haystack);
            return sort;
        case 'sqft_dsc':
            var sortByNameCaseInsensitive = sortBy((haystack) => haystack.meta.sq_ft[0]);
            var sort = sortByNameCaseInsensitive(haystack);
            return reverse(sort);
    }
}

export { formatLargeNumber as f, sorter as s };
