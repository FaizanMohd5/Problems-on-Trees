/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function dfsHeight(node){
        if(node == null) return 0;

        const leftHeight = dfsHeight(node.left);
        if(leftHeight === -1) return -1;
        const rightHeight = dfsHeight(node.right);
        if(rightHeight === -1) return -1;

        if(Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;

    }

    return dfsHeight(root) !== -1;

};
