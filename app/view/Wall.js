function t(s,d){
    for(var p in d)
	s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
    return s;
}




width = window.innerWidth;
height = (window.innerHeight - 100)


Ext.define("DoWall.view.Wall", {
    extend: 'Ext.Container',
    requires:['DoWall.view.Calendar'],
    autoScroll:true,
    xtype: 'homecard',
    config: {
        style: 'background-color: #0f0',
        layout: 'vbox',
        title: 'Home', // this is better place for title and iconCls :)
        iconCls: 'home',
        items: [
                // title bar is here :) 
            {
                type: 'titlebar',
                docked: 'top',
                title: 'Navigation',
            },
            {
                xtype: 'panel',
		title: 'task1',
                items: [
		    {
		    docked: 'top',
		    xtype: 'titlebar',
		    title: 'My First Half',
		    items: [
			{   xtype:'button',
			    iconMask:true,
			    iconCls: 'compose',
			    ui:      'plain',
			    align:   'right',
			    action: function() {
				alert('You clicked the button!');
			    }
			    
			
			},{
			    iconMask:true,
			    iconCls: 'delete',
			    ui:      'plain',
			    align:   'left',
			    action:  'clearHomeBadge'
			}
		    ]
		    },
		    {   
			xtype: 'carousel',
			html: t("<canvas id='panel_one' width='{width}' height='{height}'></canvas>", {'width':width,'height':height}),
			style: 'background-color: #dbbdc5',
			flex: 1,
		    
			listeners: {
			    
			    painted: function(){
				console.log(this.getHeight())
				color_codes = {1:'#f0f0f0',
					       0:'#dbbdc5',
					       2:'#db7d97',
					       3:'#dc416b'
					      }

				DoWall.view.Calendar.init('panel_one',color_codes);
			    }
			}


		    }
		





            ]
			

            }
            

	    // {
            //     xtype: 'panel',
	    // 	title: 'task1',
            //     items: [
	    // 	    {
	    // 	    docked: 'top',
	    // 	    xtype: 'titlebar',
	    // 	    title: 'Walking',
	    // 	    items: [
	    // 		{
	    // 		    iconMask:true,
	    // 		    iconCls: 'compose',
	    // 		    ui:      'plain',
	    // 		    align:   'right',
	    // 		    action:  'pingHomeBadge'
	    // 		},{
	    // 		    iconMask:true,
	    // 		    iconCls: 'delete',
	    // 		    ui:      'plain',
	    // 		    align:   'left',
	    // 		    action:  'clearHomeBadge'
	    // 		}
	    // 	    ]
	    // 	    },
	    // 	    {   
	    // 		xtype: 'panel',
	    // 		html: t("<canvas id='panel_two' width='{width}' height='{height}'></canvas>", {'width':width,'height':height}),
	    // 		style: 'background-color:#d2c2df',
	    // 		flex: 1,
		    
	    // 		listeners: {
	    // 		    painted: function(){
	    // 			color_codes = {1:'#f0f0f0',
	    // 				       0:'#d2c2df',
	    // 				       2:'#c9a8e1',
	    // 				       3:'#9c3de3'
	    // 				      }

	    // 		    DoWall.view.Calendar.init('panel_two',color_codes);
	    // 		    }
	    // 		}


//		    }
		





            
			

		


	    
 //           ]
			

   //         }
	    
	    
	    
	    ]
    }
});


