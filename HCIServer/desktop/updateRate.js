function updateRate(x, sum){
        totalSum[x] += sum;
        totalVotes[x] += 1;
        console.log(totalVotes[x]);
        console.log(totalSum[x]);
    }