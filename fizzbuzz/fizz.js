var numero = 100;
var resultado;

for (var i = 1; i <= numero; i++) 
{
	if(esDivisible(i,3))
	{
		resultado = "Fizz";
	}

	if(esDivisible(i,5))
	{
		resultado = "Buzz";
	}

	if(esDivisible(i,3) && esDivisible(i,5))
	{
		resultado = "FizzBuzz";
	}

	if(!esDivisible(i,3) && !esDivisible(i,5))
	{
		resultado = i;
	}


	document.write(resultado+"<br>");
}

function esDivisible(num, divisor)
{
	if(num % divisor === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}