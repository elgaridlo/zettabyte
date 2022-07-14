const get4DayAgoByDateFunction = () => {
    const theDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todayDate = new Date()
    todayDate.setDate(todayDate.getDate() - 4) 
    return theDays[todayDate.getDay()]
}

const get4DayAgoByLogic = () => {
    let theDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    let hari = 'friday'
    const numOfDay = 4
    let position = theDays.indexOf(hari)
    let arrDays = []
    const right = theDays.slice(0, position + 1)
    const left = theDays.slice(position + 1,theDays.length)
    arrDays = [...left, ...right]
    position = arrDays.indexOf(hari)

    return arrDays[position - numOfDay]
}

console.log(get4DayAgoByDateFunction())
console.log(get4DayAgoByLogic())

module.exports = {get4DayAgoByDateFunction,get4DayAgoByLogic}