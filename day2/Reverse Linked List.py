
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    # 재귀 구조로 뒤집기
    def reverseListRecur(self, head: ListNode) -> ListNode:
        # 다음 노드 next와 현재 노드 node를 파라미터로 지정한 함수를 계속해서 재귀 호출.
        def reverse(node: ListNode, prev: ListNode = None):
            # node.next에는 이전 prev 리스트를 계속 연결해주면서 node가 None이 될때까지 재귀 호출하면
            # 마지막에는 백트래킹되면서 연결 리스트가 거꾸로 연결됨.
            if not node:
                return prev
            next, node.next = node.next, prev
            # 여기서 맨 처음에 리턴된 prev는 뒤집힌 연결리스트의 첫번째 노드가 된다.
            return reverse(next, node)

        return reverse(head)



    # 반복 구조로 뒤집기
    def reverseListList(self, head: ListNode) -> ListNode:
        node, prev = head, None

        # node.next를 이전 prev 리스트로 계속 연결하면서 끝날때까지 반복.
        # node가 None이 될 때 prev는 뒤집힌 연결리스트의 첫번째 노드가 된다.
        # prev에 node를, node에 next를 별도로 셋팅하며, 이를 이용해 node가 None이 될 때까지 계속 while 반복문을 돌게 됨
        while node:
            next, node.next = node.next, prev
            prev, node = node, next

        return prev

    def print_list(self, list):

        while list:
            if list.next:
                print(list.val, ' -> ', end='')
            else:
                print(list.val)
            list = list.next


Solution().print_list(Solution().reverseListList(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))))
