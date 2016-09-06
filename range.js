/**
 * 返回某一个范围内的数组成的数组
 * 
 * @param {number} start 数组的起始值
 * @param {number} end   数组的结束值
 * @param {number} step  数组每个值直接的间隔大小
 * @return {Array} res   返回的范围数组
 */
function range(start, end, step) {
    // 如果只有start一个参数的时候,就从0开始，把start的值赋值给end
    if (end == null) {
        end = start || 0;
        start = 0;
    }
    // 如果没有传step,那么默认值就为1
    step = step || 1;

    var res = [];
    var len = Math.max(Math.ceil((end - start) / step), 0);

    for (var i = 0; i < len; i++, start += step) {
        res[i] = start;
    }

    return res;
}

// test
range(10);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(0, 10, 3);// [0, 3, 6, 9] 