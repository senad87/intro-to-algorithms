function selectionSort(arr) {

    arr.forEach(sort);

    function sort(val, index) {
        exchange(arr, val, findMin(arr, index));
    }

    function exchange(arr, val1, val2) {
        var index1 = arr.indexOf(val1);
        var index2 = arr.indexOf(val2);
        arr[index1] = val2;
        arr[index2] = val1;
    }

    function findMin(arr, start) {
        var j = start;

        var min = arr[j];

        for (j; j < arr.length; j++) {

            if (arr[j] < min) {
                min = arr[j];
            }
        }

        return min;

    }

    return arr;
}


