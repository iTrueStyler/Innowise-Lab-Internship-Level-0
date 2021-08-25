export const eulerConstant=2.71828;

export const Mathemathic={
  
   logarithm :  
      function log(n , base=eulerConstant, depth = 20) {
         let curr = 64, precision = curr / 2;
         while(depth-- > 0 && base ** curr !== n) {
           if(base ** curr > n) {
             curr -= precision;
           } else {
             curr += precision;
           }
           precision /= 2;
          }
          return curr;
        },
    
    pow: function(number,base){
      return number**base
    },

    constBasePow: function (base,number) {
      return base**number
    }
   
}