function hours(numberOfPages, pagesPerHour, numberOfDays){
    let time = numberOfPages / pagesPerHour;
    let perDay = time / numberOfDays;

    console.log(perDay);
}

hours(212,
    20 ,
    2 )
hours(432,
    15 ,
    4 )