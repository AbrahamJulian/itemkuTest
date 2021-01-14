function solution(N, users) {
  var stages = new Array(N+2);

  // count all user's level
  stages.fill(0);
  for(var i = 0; i < users.length; i++){
    if(users[i] > N+1)
      continue;
    else
      stages[users[i]]++;
  }


  // sum number of users passed the stage
  var total = [...stages];
  for(var i = total.length - 2; i > 0; i--){
    total[i] += total[i+1];
  }

  var temp = [];
  for(var i = 1; i < N+1; i++){
    var rate = stages[i] / total[i];
    temp.push([i, rate]);
  }

  // sort failure rate
  temp.sort(sortFunction);
  var answer = [];
  for(var i = 0; i < temp.length; i++){
    answer.push(temp[i][0]);
  }
  console.log(temp);
  
  return answer;
}

function sortFunction(a, b) {
  if (a[1] === b[1]) {
      return 0;
  }
  else {
      return (a[1] > b[1]) ? -1 : 1;
  }
}

console.log(solution(4,[4,4,4,4,4]));