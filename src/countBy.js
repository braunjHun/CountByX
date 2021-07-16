class CountBy {
    
    countBy(multiplier, times) {
        var returnArray = [];

        for (let i=0;i<times;i++){
          returnArray[i]=(i+1)*multiplier;
        }
        
        return returnArray;
    }
}
  
module.exports = {
    CountBy,
};