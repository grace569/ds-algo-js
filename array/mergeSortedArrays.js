const mergeSortedArrays = (arr1, arr2) => {
  if(typeof arr1 !== 'object' || typeof arr2 !== 'object') {
    return 'Input error'
  }
  let point1 = 0;
  let point2 = 0;
  const result = [];

  while(point1 < arr1.length && point2 < arr2.length) {
    if(arr1[point1] < arr2[point2]){
      result.push(arr1[point1]);
      point1++;
    } else if(arr1[point1] > arr2[point2]) {
      result.push(arr2[point2]);
      point2 ++;
    } else {
      result.push(arr1[point1]);
      result.push(arr2[point2]);
      point1 ++;
      point2 ++;
    }
  }

  for(point1; point1 < arr1.length; point1++){
    result.push(arr1[point1]);
  }
  for(point2; point2 < arr2.length; point2++){
    result.push(arr2[point2]);
  }

  return result;
} 

console.log(mergeSortedArrays([0,2,3,6], []));
