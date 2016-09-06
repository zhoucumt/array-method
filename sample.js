/**
 * 随机返回数组中的某个元素
 * 
 * @param {Array} arr 需要返回元素的数组
 * @return {Array} arr[index]   随机返回的数组中的某个元素
 */
function sample(arr) {

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
    var index = random(0, length - 1);

    return arr[index];
}

// test
sample([1,2,3,4,5]);// 2
sample([1,2,3,4,5]);// 8