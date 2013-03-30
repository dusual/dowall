Ext.define('DoWall.model.Task', {
    extend: 'Ext.data.Model',

    config: {
	fields: [
            { name: 'name',     type: 'string' },
            { name: 'date',     type: 'date' },
            { name: 'measure',   type: 'integer' },

        ],

	proxy: {
            type: 'localstorage',
            id  : 'tasks'
        }
	
    }
});

