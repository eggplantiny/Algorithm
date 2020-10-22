import java.io.Console;
import java.util.ArrayList;
import java.util.Stack;

class Solution {
    public static int[] solution(int[] prices) {
        int[] answer = new int [prices.length];

        for (int c = 0; c < prices.length; c++) {
            answer[c] = 0;
        }

        for (int x = 0; x < prices.length; x++) {

            for (int y = x + 1; y < prices.length; y++) {
                int a = prices[x];
                int b = prices[y];

                answer[x] += 1;

                if (a > b) {
                    break;
                }
            }
        }
        
        return answer;
    }

    public static void main(String[] args) {
        int[] prices = {1, 2, 3, 2, 3};

        int[] answer = solution(prices);
        
        for (int c = 0; c < answer.length; c++) {
            System.out.println(answer[c]);
        }
    }
}