const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
    // { firstName: 'Stone', lastName: 'Gare' },
  ];
  const groups = 3;
  
  const result = (students, groups) => {
    const memberTotal = Math.ceil(students.length / groups)
    let groupArr = new Array(groups)
    // get value 0,1 / 2,3 / 4
    let indexArr = []
    let count = 1
    let arrCount = 0
    for(let i = 0; i < students.length; i++) {
        indexArr.push(students[i])
        if(count === memberTotal) {
            groupArr[arrCount] = indexArr
            indexArr = []
            count = 0
            arrCount += 1
        }
        count++
    }
    if(groups > arrCount) {
        groupArr[arrCount] = indexArr
    }

    return groupArr
  }
  
  console.log(result(students, groups));

  module.exports = {result}