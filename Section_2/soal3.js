const sortObjectData = (data) => {
    let arrData = []
    for(let item in data) {
        arrData.push({label: item, value: (data[item] || 0) * 3})
    }

    for(let i = 1; i <arrData.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arrData[i].value < arrData[j].value){
                let temp = arrData[i]
                arrData[i] = arrData[j]
                arrData[j] = temp
            }
        }
    }

    let objData = {}

    arrData.map((item) => {
        objData[item.label] = item.value
    })

    return objData
}

const data = { i: 6, j: null, k: 3, l: 12 };

console.log(sortObjectData(data))

module.exports = {sortObjectData}