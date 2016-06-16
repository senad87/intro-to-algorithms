describe('selection-sort', function() {

    it('should sort from min to max', function() {

        var arrayToSort = [5, 2, 4, 6, 1, 3];

        var sortedArray = [1, 2, 3, 4, 5, 6];

        expect(selectionSort(arrayToSort).sort()).toEqual(sortedArray);
    });

});