function GetDays(month, year){
    console.log(new Date(year, month, 0).getDate());
}

GetDays(1, 2012)
GetDays(2, 2021)