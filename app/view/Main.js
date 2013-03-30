Ext.define("DoWall.view.Main", {
    extend: 'Ext.tab.Panel',
  // ...    
    config: {
	tabBarPosition: 'bottom',
	items: [
	    {xtype: 'homecard'},
	    {xtype: 'taskcard'},

    ]
    }
});