class CountBy {
    
    countBy(multiplicand, times) {
        var returnArray = [];

        for (let i=0;i<times;i++){
          var multiplier = i+1;
          returnArray[i]=this.multiply(multiplier,multiplicand);
        }
        
        return returnArray;
    }

    multiply(multiplier, multiplicand) {
        return multiplier*multiplicand;
    }
}
  
module.exports = {
    CountBy,
};