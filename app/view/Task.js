/** This example is a simple demo of some of the form and field components in Sencha Touch.
 * It also shows how you can bind a Model instance to a form, and then update that instance with values
 * from the form panel.
 */

/**
 * Here we define a User model. An instance of this model will be used to load data into our form
 * panel. We will also update this form panel when you press the submit button.
 */

// Define our simple application
Ext.define("DoWall.view.Task", {
    extend: 'Ext.form.Panel',
    
    // Require the components we will be using in this example
    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
        'Ext.Toolbar',
	'Ext.data.Store',
	'DoWall.view.Calendar'
    ],

    id:'taskform',
    autoScroll:true,
    xtype: 'taskcard',
    config: {
        style: 'background-color: #d2c2df',
	xtype: 'formpanel',
        title: "Do's", // this is better place for title and iconCls :)
        iconCls: 'action',
	store : 'DoWall.store.Task',
	



        // Set the width and height of the panel

            

        items: getFormItems(),
    },
    saveForm: function () {

	}

    
    
});
    /**
     * This method returns an array of all items we should add into the form panel we create above in our launch function.
     * We have created this function to simply make things cleaner and easier to read and understand. You could just put these items
     * inline up above in the form `config`.
     * @return {Array} items
     */

function getFormItems() {
       

        return [
            
	    {
                xtype: 'fieldset',
                title: 'Todays Effort',
                
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    // {
                    //     xtype: 'textfield',
                    //     name: 'name',
                    //     label: 'Name',
                    //     autoCapitalize: true
                    // },
                    
                    {
                        xtype: 'spinnerfield',
                        name: 'measure',
                        label: 'Miles',
			value: 3,
			minValue: 0,
			maxValue: 20
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: 'Date',
                        value: new Date(),
                        picker: {
                            yearFrom: 2013,
                            monthFrom: 'Feb',
			    
			}
                    },
            ]
            },
            {
		xtype: 'button',
		itemId: 'saveTask',
		text: 'Save Task',
		ui: 'confirm' ,
		handler: function(){
		    var form = Ext.getCmp('taskform');
		    values_dict = form.getValues()

		    form.setMasked({
                        xtype: 'loadmask',
                        message: 'Saving...'
                    });




		    setTimeout(function(){		
		    	
		    var task_store=Ext.StoreManager.get('TaskStore');

		    //task_store =Ext.getStore('TaskStore').setData(form.getValues());
		    


		    task_store.load();
		    var task =  {'name': 'Running', 'date':values_dict.date, 'measure':values_dict.measure};

		    // console.log(task_store);
		    // console.log(task);


		    task_store.add(task);		    
		    task_store.sync();
			
		    form.setMasked(false);
			
		    


		    
                        
                       
                       
                    }, 1000);

		}
		

	    }

            // Create a docked bottom toolbar which will contain buttons to trigger various functions in our formpanel.
        ]    
}
        


