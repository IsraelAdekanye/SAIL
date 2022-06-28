public class checkConcatenatedSum {
    public static void main(String[] args) {
        System.out.println(check(198, 2));
    }
    public static int check (int inum, int catlen){
        int num = inum;
        int newVul = 0;
        while (num>=1){
            int digit = num%10;
            int vul = 0;
               for (int i=0; i<catlen; i++){
                        vul = (vul * 10) + digit;
                }
            newVul = newVul + vul;            
            num = (num - digit)/10;
        }
        if (newVul == inum){
            return 1;
        }
        else{
            return 0;
        }
    }
    
}
