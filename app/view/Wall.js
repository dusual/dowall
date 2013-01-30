Ext.define("DoWall.view.Wall", {
    extend: 'Ext.Container',
    xtype: 'homecard',
    config: {
        style: 'background-color: #0f0',
        layout: 'vbox',
        title: 'Vbox', // this is better place for title and iconCls :)
        iconCls: 'action',
        items: [
                // title bar is here :) 
            {
                type: 'titlebar',
                docked: 'top',
                title: 'Navigation',
            },
            {
                xtype: 'panel',
                html: 'baz',
                style: 'background-color: #ff0',
                flex: 1
            },
            {
                xtype: 'panel',
                html: 'foo',
                style: 'background-color: #f00',
                flex: 1
            },
            {
                xtype: 'panel',                
                html: 'bar',
                style: 'background-color: #fff',
                flex: 1
            }
            ]
    }
});


