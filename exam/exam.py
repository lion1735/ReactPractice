import sys
n, m = map(int, sys.stdin.readline().rstrip().split())
li = [[0 for _ in range(n+1)]] + [[0]+list(map(int, sys.stdin.readline().rstrip().split()))
                                  for _ in range(n)]
prefix = [[0 for _ in range(n+1)]for _ in range(n+1)]
for i in range(1, n+1):
    for j in range(1, n+1):
        prefix[i][j] = li[i][j] + prefix[i][j-1] + \
            prefix[i-1][j] - prefix[i-1][j-1]


for _ in range(m):
    x1, y1, x2, y2 = map(int, sys.stdin.readline().rstrip().split())
    hap = prefix[x2][y2] - prefix[x2][y1-1] - \
        prefix[x1-1][y2] + prefix[x1-1][y1-1]
    print(hap)

# SK ICT


# #1
def solution(money, costs):
    answer = 0
    m = [1,5,10,50,100,500] #동전 종류
    li = []
    for i in range(len(costs)): # 생산단가/화폐단위 = 우선순위
        li.append(costs[i]/m[i])
    for i in range(len(costs)-1,0,-1): # 버블정렬 = 우선순위에 따라 동전,화폐 배열 정렬
        for j in range(i):
            if li[j] > li[j+1]:
                li[j],li[j+1] = li[j+1],li[j]
                costs[j],costs[j+1] = costs[j+1],costs[j]
                m[j], m[j+1] = m[j+1],m[j]
    for i in range(len(costs)):
        answer += (money // m[i] * costs[i])  # 돈 / 화폐단위 * 생산단가
        money %= m[i] # 돈 / 화페단위
    return answer

# #2
# from collections import deque
# d = [
#     [[0,1],[1,0],[0,-1],[-1,0]], # 우 하 좌 상
#     [[1,0],[0,-1],[-1,0],[0,1]], # 하 좌 상 우
#     [[0,-1],[-1,0],[0,1],[1,0]], # 좌 상 우 하
#     [[-1,0],[0,1],[1,0],[0,-1]] # 상 우 하 좌
# ]
# d2= [
#     [[0,-1],[-1,0],[0,1],[1,0]], # 좌 상 우 하
#     [[-1,0],[0,1],[1,0],[0,-1]], # 상 우 하 좌
#     [[0,1],[1,0],[0,-1],[-1,0]], # 우 하 좌 상
#     [[1,0],[0,-1],[-1,0],[0,1]] # 하 좌 상 우
# ]
# ##############################
# # clockwise가 true 일때
# ##############################
# def bfs(arr):
#     que = deque()
#     # 4개의 방면 동시에 실행
#     que.append((0,0,0,1))
#     que.append((0,size-1,1,1))
#     que.append((size-1,size-1,2,1))
#     que.append((size-1,0,3,1))
#     while que:
#         y,x,ptr,idx = que.popleft()
#         if arr[y][x] == 0: arr[y][x] =idx # 할당된 적이 없다면
#         for i in range(4):
#             ny = y + d[ptr][i][0]
#             nx = x + d[ptr][i][1]
#             # 범위 체크
#             if ny >= 0 and nx >= 0 and ny < size and nx < size and arr[ny][nx] == 0:
#                 que.append((ny,nx,ptr,idx+1))
#                 break
# ##############################
# # clockwise가 false 일때
# ##############################
# def bfs2(arr):
#     que = deque()
#     # 4개의 방면 동시에 실행
#     que.append((0,0,0,1))
#     que.append((0,size-1,1,1))
#     que.append((size-1,size-1,2,1))
#     que.append((size-1,0,3,1))
#     while que:
#         y,x,ptr,idx = que.popleft()
#         if arr[y][x] == 0: arr[y][x] =idx # 할당된 적이 없다면
#         for i in range(4):
#             ny = y + d2[ptr][3-i][0]
#             nx = x + d2[ptr][3-i][1]
#             # 범위 체크
#             if ny >= 0 and nx >= 0 and ny < size and nx < size and arr[ny][nx] == 0:
#                 que.append((ny,nx,ptr,idx+1))
#                 break
# def solution(n, clockwise):
#     answer = [[0 for i in range(n)]for i in range(n)]
#     global size
#     size = n
#     if clockwise:
#         bfs(answer)
#     else:
#         bfs2(answer)
#     return answer

# #3
# def factorial(k):
#     fact = 1
#     for i in range(1, k+1):
#         fact *= i
#     return fact

# def nCr(n, r):
#     return factorial(n) / (factorial(r) * factorial(n-r))
# # 모든 대각선중에 주어진 대각선의 좌표 하나를 선택
# # (0,0) 에서 대각선 (x-1,y) 까지의 경로의 수 + (x-1,y)부터 (n-1,n-1) 경로의 수
# # (0,0) 에서 대각선 (x,y-1) 까지의 경로의 수 + (x,y-1)부터 (n-1,n-1) 경로의 수
# # 모두 더해줌. 각각을 모듈러 연산의 합이나 모두의 합을 모듈러 한 값이나 같으므로 각각 연산
# def solution(width, height, diagonals):
#     li = []
#     for i in range(len(diagonals)):
#         li.append((diagonals[i][0]-1,diagonals[i][1],diagonals[i][0],diagonals[i][1]-1))
#     print(li)
#     answer = 0
#     for i in range(len(li)):
#         res = 10000019
#         n0 = li[i][0]+li[i][1]
#         c0 = li[i][1]
#         nn = width-li[i][0]+height-li[i][1]
#         cn = height-li[i][1]
#         answer += (nCr(n0,c0) % 10000019) + (nCr(nn,nc) % 10000019)  % 10000019
#         print(answer)
#         answer += (nCr(li[i][2]+li[i][3],li[i][3]) % 10000019) + (nCr(width-li[i][2]+height-li[i][3],height-li[i][3]) % 10000019)  % 10000019
#     return res

# #4 java
# class Solution {
#     static int n,m,cnt;
#     static int [][] parent;
#     static void union(int x, int y){
#         x = find(x);
#         y = find(y);
#         parent[x][1]++;
#         parent[y][1]++;
#         if(x<y) parent[y][0] = x;
#         else parent[x][0] = y;
#     }
#     static int find(int x){
#         if(parent[x][0] == x) return x;
#         else return parent[x][0] = find(parent[x][0]);
#     }
#     static boolean isSame(int x, int y){
#         x = find(x);
#         y = find(y);
#         if(x==y) return true;
#         else return false;
#     }
#     public long solution(int n, int[][] edges) {
#         parent = new int[10000000][2];
#         for(int i=0;i<n;i++){
#             parent[i][0] = i;
#         }
#         for(int i=0;i<n-1;i++){
#             union(edges[i][0],edges[i][1]);
#         }
#         for(int i=0;i<n;i++){
#             // isSame()
#         }
#         for
#         long answer = 0;
#         return answer;
#     }
# }
```