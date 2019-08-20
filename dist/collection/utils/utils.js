import * as R from 'ramda';
export function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
export function getSubString(numberString, removeNumber) {
    return numberString.substring(0, numberString.length - removeNumber);
}
export function formatLargeNumber(func, postArray) {
    let number = R.sum(R.map(func, postArray));
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
