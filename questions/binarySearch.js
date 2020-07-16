/**
 * Binary Search Implementation (Recursive & Iterative)
 * @param {Array} items
 * @param {variant} value
 * @return {int}
 */
function binarySearch(items, value) {
    let leftIndex = 0;
    let rightIndex = items.length - 1;
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

    if (value === undefined) {
        return "no value supplied";
    }

    while (items[middleIndex] !== value && leftIndex < rightIndex) {
        if (value < items[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            leftIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((rightIndex + leftIndex)/2);
    }

    return (items[middleIndex] !== value) ? -1 : middleIndex;
}

function binarySearchRecursive(items, value, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return false;
    }

    const middle = Math.floor((leftIndex + rightIndex) / 2);

    if (items[middle] === value) {
        return middle;
    } else if (value < items[middle]) {
        return binarySearchRecursive(items, value, leftIndex, (middle - 1));
    } else {
        return binarySearchRecursive(items, value, (middle + 1), rightIndex);
    }
}

exports.binarySearch = binarySearch;