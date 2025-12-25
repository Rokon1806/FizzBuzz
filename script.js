function fizzbuzz(num)
{
    return num;
}
let number = fizzbuzz(20);
let i;
for(i = 1; i <= number; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    } 
    else if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }

}