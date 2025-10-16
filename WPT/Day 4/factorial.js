function Factorial(a)
{
    let Factorial1 = 1;
    for(i=2; i<=a; i++)
        {
            Factorial1 = Factorial1 * i;
        }
        return Factorial1; 
}

console.log("Factorial is: "+ Factorial(5));