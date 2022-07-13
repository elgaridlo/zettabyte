

const findTheHighestValue = (arr) => {
    let highest = 0

    arr.map((item) => {
        if(highest < item) {
            highest = item
        }
    })

    return highest
}

console.log(findTheHighestValue([3, 1, 2, 3, 7, 5, 6, 8, 2, 1]))


module.exports = {findTheHighestValue}