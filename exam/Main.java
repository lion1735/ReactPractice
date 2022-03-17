import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

/**
 * 1
 * 10
 * 4 5
 * 6 2
 * 10 2
 */
public class Main {
    static int N, M, cnt, res;
    static int[] map;
    static int[][] list;
    static int[][] choice = { { 1, 2, 3 }, { 1, 3, 2 }, { 2, 1, 3 }, { 2, 3, 1 }, { 3, 1, 2 }, { 3, 2, 1 } };
    static int[] dy = { -1, 1 };
    static StringTokenizer st;

    static void bfs(int n) {
        Queue<int[]> que = new LinkedList<>();
        int ptr = 0;
        while (true) {
            if (map[n + ptr] == 0) {
                map[n] = 1;
                que.add(new int[] { list[n + ptr][0], 2 });
                break;
            } else if (map[n - ptr] == 0) {
                map[n] = 1;
                que.add(new int[] { list[n - ptr][0], 2 });
                break;
            } else {
                ptr++;
            }
        }
        // System.out.println(list[n][1] + 1);
        while (!que.isEmpty()) {
            int[] temp = que.poll();
            if (cnt >= list[n][1])
                break;
            if (map[temp[0]] == 0) {
                map[temp[0]] = temp[1];
                cnt++;
                if (temp[0] - 1 > 0) {
                    que.add(new int[] { temp[0] - 1, temp[1] + 1 });
                }
                if (temp[0] + 1 < N) {
                    que.add(new int[] { temp[0] + 1, temp[1] + 1 });
                }
            } else {
                for (int i = 0; i < 2; i++) {
                    int ny = temp[0] + dy[i];
                    if (0 < ny && ny < N && map[ny] == 0) {
                        map[ny] = temp[1];
                        cnt++;
                        que.add(new int[] { ny, temp[1] + 1 });
                    }
                }
            }
            System.out.println(cnt);
            System.out.println(Arrays.toString(map));
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(bf.readLine());
        cnt = 0;
        res = Integer.MAX_VALUE;
        for (int testCase = 0; testCase < T; testCase++) {
            N = Integer.parseInt(bf.readLine());
            list = new int[N][2];
            for (int i = 0; i < 3; i++) {
                st = new StringTokenizer(bf.readLine());
                list[i][0] = Integer.parseInt(st.nextToken());
                list[i][1] = Integer.parseInt(st.nextToken());
            }
            for (int[] ch : choice) {
                map = new int[N + 1];
                for (int p : ch) {
                    cnt = 0;
                    bfs(p - 1);
                    System.out.println("==================================");
                }
                res = Math.min(res, cnt);
            }

        }

    }

}