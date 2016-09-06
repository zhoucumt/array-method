/**
 * 将数组乱序，复杂度为O(n)
 * 
 * @param {Array} arr 需要乱序的数组
 * @return {Array} res   返回的乱序后的数组
 */
function shuffle(arr) {

    /**
     * 返回一个 [min, max] 范围内的任意整数
     * 
     * @param {number} min 范围的最小值
     * @param {number} max 范围的最大值
     * @return {number} result   该范围的任意一个整数
     */
    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        var result = min + Math.floor(Math.random() * (max - min + 1));
        return result;
    }

    var length = arr.length;
    // 结果数组
    var res = [];

    for (var i = 0, rand; i < length; i++) {
        // 将当前所枚举位置的元素和 `i=rand` 位置的元素交换
        rand = random(0, i);
        if (rand !== i) {
            res[i] = res[rand];
        }
        res[rand] = arr[i];
    }

    return res;
}

// test
shuffle([1,2,3,4,5]);// [4, 5, 1, 3, 2]
shuffle([1,2,3,4,5]);// [1, 3, 4, 2, 5]