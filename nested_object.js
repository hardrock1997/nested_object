function flattenArray(arr) {
    if (!arr.length) return []
    let toReturn = []
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            const temp = flattenArray(ele)
            toReturn=[...toReturn, ...temp]
        }
        else {
            toReturn.push(ele)
        }
    }
    return toReturn
}

const res1=flattenArray([1, [2, [3, 4], 5], 6]);
const res2=flattenArray([["a"], ["b", ["c", "d"]], "e"]);
console.log(res1, res2)
