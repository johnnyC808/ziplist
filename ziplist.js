function zipList(list1, list2) {
  const lengthL = list1.length;
  let returnList = [];
  for (let i = 0; i < lengthL; i++) {
    returnList.push(list1[i], list2[i]);
  }
  return returnList;
}

const myList1 = ['a', 'b', 'c'];
const myList2 = [1, 2, 3];
console.log(zipList(myList1, myList2));

function zipListTheSimpleWay(list1, list2) {
  const arrays = _.zip(list1, list2);
  return _.flatten(arrays);
}
console.log(zipListTheSimpleWay(myList1, myList2));
