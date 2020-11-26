let arr = []

function generatearr(arr) {
    for (let i = 0; i < 1100; i++) {
        arr.push(Math.random() * 1100)
    }
    return arr
}

function max(arr) {
    let max = -100
    let min = 100
    let median = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
    }

    arr.sort()
    if (arr.length % 2 === 0)
        median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    else
        median = arr[Math.round(arr.length / 2)];

    console.log(max, min, median)
}

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items
}

function sortbyQuickSort(items) {
    console.log(quickSort(items, 0, items.length - 1))
}

function consists(arr, element) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

function count() {
    let arr = document.getElementsByTagName('*')
    let arr2 = []
    let size = []
    for (let i = 0; i < arr.length; i++) {
        k = consists(arr2, arr[i].tagName.toLowerCase())
        if (k !== -1) {
            size[k]++
        } else {
            arr2.push(arr[i].tagName.toLowerCase())
            size.push(1)
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i], " - ", size[i])
    }
}

arr = generatearr(arr)
sortbyQuickSort(arr)
max(arr)
