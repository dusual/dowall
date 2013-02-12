
Ext.define('DoWall.view.Calendar', {
    statics: {
        init: function init(element,colors) {
    //var selectedMonth = document.getElementById("ddlMonth").value;
    //var selectedYear = document.getElementById("txtYear").value;
    
    monthDay = 0;
    
    startdate = new Date();
	    

	    
            
    canvas = document.getElementById(element);
    context = canvas.getContext("2d");
    context.fillStyle = colors[1];
    width = canvas.width ;
    height = canvas.height  ;
   // console.log(height);
    
    // better algorithm for using space
    rect_theight = height/7 ; 
    rect_space = rect_theight/4;
    rect_height = rect_theight - rect_space ;

    

    //console.log(rect_height);
    num_months = number_of_months(width,rect_theight);
    rect_twidth = (width - 50)/(num_months * 8) ; 
    rect_space = rect_twidth/4;
    rect_width = rect_twidth - rect_space ;
	    //console.log("hello");
	    //console.log(rect_width)
	    size = sizemin(rect_width,rect_height) * 1.2
	    

    //console.log("init works");
	    drawCalendar(num_months,colors);
	}
    
    }
});





// function (a, b) {
//             return a + b;
//         }
//     }
// });

function number_of_months(width,rect_theight)
{
    //console.log("called number of months");
    temp_width_var = rect_theight * 24
    if (temp_width_var >= width){
	return 2
    }
    else{
	return 3
    }




}




function drawCalendar(num_months,colors) {
    //console.log("called drawCalendar");
    if (num_months == 2){
	left_offset = offsetMonth('left');
	drawMonth(left_offset,colors);
	right_offset = offsetMonth('right');
	drawMonth(right_offset,colors);

    }

    if (num_months == 3){
	left_offset = offsetMonth('left');
	drawMonth(left_offset,colors);
	
	centre_offset = offsetMonth('centre');
	drawMonth(centre_offset,colors);

	right_offset = offsetMonth('right');
	drawMonth(right_offset,colors);

    }



}

function offsetMonth(position) {
    console.log("offsetMonth");

    if (position=='left'){
	x_offset= 1.5 * size;
	return x_offset;
	
    }
    if (position=='right'){
	x_offset=width - (size + .5*size) * 8 + 1.5 * size
    
		
	return x_offset;


    }

    if (position=='centre'){
	x_offset=width/2 - 4 * (size + .5*size) ; //extra space 1/3 of 6 rect_height
	return x_offset;

	
    }


}
    


function drawMonth(x_offset,colors){
for (j=0; j<5 ; ++j){ 
    for(i=0; i<6  ; ++i) {
	drawDay(x_offset, i, j,colors);
    }
}
}


function sizemin(rect_width,rect_height){
    return Math.min(rect_width,rect_height);
    


}

function random_color(colors)
{   
    number = Math.floor((Math.random()*3)+1);
    return colors[number];

}



  
function drawDay(offset,i, j,colors) {
    x_offset = offset + (size + .5*size) * i;
    y_offset = 10 + (size + .5*size) * j;
    console.log(y_offset);
   
    context.fillStyle = random_color(colors);
    context.fillRect(x_offset, y_offset, size, size); 
    


}


