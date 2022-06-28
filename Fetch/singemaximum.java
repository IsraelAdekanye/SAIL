public class singemaximum{
    public static void main(String[] args) {
    
        System.out.println(singled(new int []{1,6,3,4,18,5,6,14}));

    }
    public static int singled (int [] arr){

       int returnValue = 0;
        int max = 0;

       for(int i = 0; i<=arr.length-1; i++){
        if (arr[i] > max)
            max = arr[i]; 
       }

       for(int i = 0; i<=arr.length-1; i++){
        if (arr[i] == max) returnValue++;
        }
        
        // returnValue = 1 ? return 1: return 0;
       if (returnValue == 1) {
       return 1;
        }
        else{return 0;
        }
    }
}