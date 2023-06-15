function customPower(base, expo)
{
    console.log('base ' +base)
    console.log('expo ' +expo)

    if (expo == 0) {
        return 1;
    }
    
    var temp = customPower(base, parseInt(expo / 2));
    console.log('temp ' +temp)
    
    if (expo % 2 == 0) {
        return temp * temp;
    } else {
        if (expo > 0)
            return base * temp * temp;
        else
            return (temp * temp) / base;
    }

}

console.log(customPower(2,-2))