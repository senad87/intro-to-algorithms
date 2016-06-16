describe('insertion-sort', function() {



    it('should sort from min to max', function() {

        var arrayToSort = [5, 2, 4, 6, 1, 3];

        var sortedArray = [1, 2, 3, 4, 5, 6];

        expect(insertionSort(arrayToSort)).toEqual(sortedArray);
    });

    it(' 2 should sort from min to max', function() {

        var arrayToSort = [31, 41, 59, 26, 41, 58];

        var sortedArray = [26, 31, 41, 41, 58, 59];

        expect(insertionSort(arrayToSort)).toEqual(sortedArray);
    });


    it('my index of', function() {

        expect(myIndexOf([5, 8, 10], 8)).toBe(1);
    })

});