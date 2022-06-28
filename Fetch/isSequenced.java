public class isSequenced {
    public static void main(String[] args) {
        System.out.println(sequenced(new int []{0, 1, 2, 3, 4, 5}, 1, 5));
    }

    public static int sequenced (int[] arr, int m, int n) {
        int outcome = 1;
            if(arr[0] != m || arr[arr.length-1] != n){
                return 0;
            }
            else
                {
                    for(int i=1; i<arr.length; i++){
                    if (arr[i] == arr[i-1] || arr[i] == arr[i-1]+1){
                        outcome++;
                    }
                    }
                    if (outcome == arr.length){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                }  
            }
}
