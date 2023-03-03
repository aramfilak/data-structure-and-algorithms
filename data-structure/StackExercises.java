
import java.util.Arrays;
import java.util.Stack;

public class StackExercises {

    public static void main(String[] args) {

        System.out.println(isValid("()(()){([])}[]{}"));
        System.out.println(removeDuplicates("assqaainni"));
        System.out.println(reverse_num(1234));
        int[] arr = {7, 6, -5, 5, -2, -2, 1, -2, 4};
        System.out.println(Arrays.toString(asteroidCollision(arr)));
        System.out.println(scoreOfParentheses("()(()())"));
        arr = new int[]{73, 74, 75, 71, 69, 72, 76, 73};
        System.out.println(Arrays.toString(dailyTemperatures(arr)));

    }


    // LeetCode 739 - Daily Temperatures (Medium)
    public static int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] answer = new int[n];
        Stack<Integer> stack = new Stack<>();

        for (int curr_day = 0; curr_day < n; curr_day++) {
            int curr_temp = temperatures[curr_day];
            while (!stack.empty() && temperatures[stack.peek()] < curr_temp) {
                int prev_day = stack.pop();
                answer[prev_day] = curr_day - prev_day;
            }
            stack.push(curr_day);
        }
        return answer;
    }

    // LeetCode 856 - Score of Parentheses (Medium)
    public static int scoreOfParentheses(String s) {
        Stack<Integer> st = new Stack<>();
        int score = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(') {
                st.push(score);
                score = 0;
            } else score = st.pop() + Math.max(2 * score, 1);

        }
        return score;
    }


    // LeetCode 735 - Asteroid Collision (Medium)
    public static int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();

        for (int ast : asteroids) {
            if (ast > 0) stack.push(ast);
            else {
                while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() < Math.abs(ast)) stack.pop();

                if (stack.isEmpty() || stack.peek() < 0) stack.push(ast);

                if (stack.peek() == Math.abs(ast)) stack.pop();

            }
        }
        return stack.stream().mapToInt(i -> i).toArray();
    }

    // LeetCode 20 - Valid Parentheses
    public static boolean isValid(String s) {
        Stack<Character> leftSymbols = new Stack<>();

        for (char c : s.toCharArray()) {

            if (c == '(' || c == '{' || c == '[') {
                leftSymbols.push(c);
            } else if (c == ')' && !leftSymbols.isEmpty() && leftSymbols.peek() == '(') {
                leftSymbols.pop();
            } else if (c == '}' && !leftSymbols.isEmpty() && leftSymbols.peek() == '{') {
                leftSymbols.pop();
            } else if (c == ']' && !leftSymbols.isEmpty() && leftSymbols.peek() == '[') {
                leftSymbols.pop();
            } else {
                return false;
            }
        }
        return leftSymbols.isEmpty();
    }

    // LeetCode 1047 - Remove all adjacent duplicates in String (Easy)

    public static String removeDuplicates(String s) {

        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char cur = s.charAt(i);
            if (stack.isEmpty() || cur != stack.peek())
                stack.push(cur);
            else {
                stack.pop();
            }
        }

        StringBuilder sb = new StringBuilder();
        while (!stack.isEmpty())
            sb.append(stack.pop());

        return sb.reverse().toString();
    }

    // Reverse an integer using stack (Easy)
    public static int reverse_num(int num) {
        Stack<Integer> stack = new Stack<>();
        int lastDigit;
        while (num > 0) {
            lastDigit = num % 10;
            stack.push(lastDigit);
            num = num / 10;
        }
        int tens = 1;
        while (!stack.isEmpty()) {
            num += stack.pop() * tens;
            tens *= 10;
        }

        return num;
    }
}
