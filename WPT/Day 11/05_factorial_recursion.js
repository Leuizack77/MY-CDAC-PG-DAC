function factorial(n)
{
    if(n==0 || n==1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

const args = process.argv;
const num = Number(args[2]);

if (isNaN(num) || num < 0) 
    {
        console.log("Please provide a non-negative integer.");
    } 
    else 
    {
        const result = factorial(num);
        console.log(`Factorial of ${num} = ${result}`)
    };