function findmax(arr)
{
    let max = arr[0];

    for(i=0; i<arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}
let arr = [10,50,60,30,20];
let max = findmax(arr);
console.log("Maximun element is:" + max);



function findmax(arr)
{
    let max = arr[0];

    arr.forEach(element =>
        {
            if(element > max)
            {
                max = element;
            }
        }
    );
    return max;
}
let arr = [10,50,60,90,20];
let max = findmax(arr);
console.log("Maximun element is:" + max);



function findmax(arr) 
{
    arr.sort((a,b)=> a - b);

    let max = arr[arr.length - 1];

    return max;
}

let arr = [100, 50, 60, 30, 20];
let max = findmax(arr);
console.log("Maximum element is:" + max);