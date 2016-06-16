// Starting from the second number shift all greater numbers to the right
// until you reach the number that is smaller or the start of the array.
// then you place the current number after the smaller number.

function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {

        var current = arr[i];
        var leftIndex = i - 1;

        while (leftIndex >= 0 && arr[leftIndex] > current) {
            arr[leftIndex + 1] = arr[leftIndex];
            leftIndex--;
        }

        arr[leftIndex + 1] = current;

    }

    return arr;
}


function myIndexOf(arr, val) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == val)
            return i;

    }

    return undefined;
}


// exercise