function t(s,d){
    for(var p in d)
	s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
    return s;
}


Ext.define('DoWall.view.Calendar', {
    statics: {
        init: function init(element,colors) {
	 

	 thisMonthColor = "#202020";
         prevMonthColor = "#909090";
         nextMonthColor = "#909090";

	    
        
	 todayDate = new Date();
         selectedDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
	  var thisMonth = selectedDate.getMonth() + 1;
                        
          prevMonthLastDate = getLastDayOfMonth(thisMonth - 1);
            thisMonthLastDate = getLastDayOfMonth(thisMonth);
            thisMonthFirstDay = selectedDate.getDay();
            thisMonthFirstDate = selectedDate.getDate();


	    if (thisMonth == 12)
                nextMonthFirstDay = 1;
            else
                nextMonthFirstDay = thisMonth + 1;
                                                
            dateOffset = thisMonthFirstDay;
	    
	    thismonthName = selectedDate.toDateString().split(' ')[1];

	    

	    
            
	    canvas = document.getElementById(element);
	    context = canvas.getContext("2d");
	    context.fillStyle = colors[1];
	    width = canvas.width ;
	    height = canvas.height  ;
	    // console.log(height);
	    // better algorithm for using space
	    rect_theight = height/7 ; 
	    rect_space = rect_theight/3;
	    rect_height = rect_theight - rect_space ;

    

	    //console.log(rect_height);
    
	    rect_twidth = (width - 50)/15; 
	    rect_space = rect_twidth/3;
	    rect_width = rect_twidth - rect_space ;
            size = Math.min(rect_width,rect_height)*1.35 
	    

    //console.log("init works");
	    drawCalendar(colors);
	}
    
    }

});


function centre_xoffset(){
    return width/2 - (size+size/3) * 3.5


}


function centre_yoffset(){
    return height/2 - (size+size/3) * 2.5


}




function drawCalendar(colors) {
    for(j=0; j<5; ++j) {
        drawWeek(j,colors,context);
    }
    drawMonthName();
}
                
function drawWeek(j,colors) {
    for(i=0; i<7; ++i) {
        drawDay(i, j,colors,context);
    }
}



function drawDay(i, j,colors) {
    x_offset = centre_xoffset() + (size + size/3) * i;
    y_offset = centre_yoffset() + (size + size/3) * j;
                        
    context.fillStyle = "#f0f0f0";
    context.fillRect(x_offset, y_offset, size, size); 
                        
                        // First week
    if (j == 0) {
        
	if (i < thisMonthFirstDay) {
            drawDayNumber(prevMonthLastDate - (dateOffset - i) + 1, prevMonthColor);
        }
        else if (i == thisMonthFirstDay) {
            monthDay = 1;
            drawDayNumber(thisMonthFirstDate + (dateOffset - i), thisMonthColor);
        }
        else {
            ++monthDay;
            drawDayNumber(monthDay, thisMonthColor);
        }
    }                       
                        // Last weeks
    else if (thisMonthLastDate <= monthDay) {
        ++monthDay;
        drawDayNumber(monthDay - thisMonthLastDate, prevMonthColor);
    }
                        // Other weeks
    else {
        ++monthDay;
        drawDayNumber(monthDay, thisMonthColor);
    }
    
}
                
function drawDayNumber(dayNumber, color) {
    context.fillStyle = color;
    context.font = t("bold {text_size}px sans-serif",{'text_size':size/3});
    context.fillText(dayNumber, x_offset + size/2, y_offset + size);
}

function drawMonthName() {
    color = thisMonthColor;
    
    context.fillStyle = color;
    context.font = t("bold {text_size}px sans-serif",{'text_size':size});
    console.log(context.font);
    context.fillText(thismonthName.toUpperCase(), 1*size, height/2);
}



function getLastDayOfMonth(month,year)
{
    var day;

    switch (month)
    {
    case 0 : // prevents error when checking for previous month in jan
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10:
    case 12:
    case 13: // prevents error when checking for next month in december
        day = 31;
        break;
    case 4 :
    case 6 :
    case 9 :
    case 11:
        day = 30;
        break;
    case 2 :
        if( ( (year % 4 == 0) && ( year % 100 != 0) ) 
            || (year % 400 == 0) )
            day = 29;
        else
            day = 28;
        break;

    }

    return day;
}



