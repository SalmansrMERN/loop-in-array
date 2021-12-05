
var num = [10, 20, 30, 40];

for (var i = 0; i < 4; i++) {
    console.log(num[i])
}

// ========= sum of elements of array ===========

var nums = [50, 60, 70, 80];
nums.push(90);
console.log(nums.length)

var sum = 0;
for (var i = 0; i < nums.length; i++) {
    var all = nums[i];
    sum = sum + all;
}
console.log(sum)

// ======== another one ========

var numbers = [10, 20, 30, 40, 50];
var sum = 0;

for (var i = 0; i < 5; i++) {
    sum = sum + numbers[i];
}
console.log("Sum = " + sum)


