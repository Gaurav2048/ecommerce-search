const obj = {
    a: 22, 
    j: 22, 
    b: 'John',
    d: false,
    e: 'gunjan'
}
// 2 -> replacer -> function or array

// function replacer(key, value) {
//     if (key === 'j') {
//         return value + 50
//     } else if (typeof value === 'string') {
//         return undefined;
//     }
//     return value;
// }

const replacer = ['a', 'b']

console.log(JSON.stringify(obj, replacer, 10));