let date1 = prompt("Enter the date1 (YYYY-MM-DD)");
date3 = new Date(date1);
let date2 = prompt("Enter the date2 (YYYY-MM-DD)");
date4 = new Date(date2);
diff = (date3 - date4);
let newDateFormat=(diff/(1000*60*60*24));
    let years=0,days=0,months=0;
    temp = newDateFormat;
    while(temp>0){
            if((months==0 || months==2 || months==4 || months==6||months==7||months==9||months==11) && temp>=31){
                temp-=31;
                months++;
                if(months>=12){
                    months=0;
                    years++;
                }
            }
            else if((months==3 || months==5 || months==8 || months==10) && temp>=30){
                temp-=30;
                months++;
                if(months>=12){
                    months=0;
                    years++;
                }
            }
            else if(months==1 && temp>=28) {
                if((date4.getFullYear() + years) %4==0 ){
                    temp-=29;    
                }
                else {
                    temp-=28;
                }
                months++;
                if(months>12){
                    months=0;
                    years++;
                }
            }
            else {
                    break;
                }
        }

document.write(years+" Years,"+months+" Months, "+temp+" days");
