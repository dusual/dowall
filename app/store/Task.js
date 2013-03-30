Ext.define('DoWall.store.TaskStore', {
    extend  : 'Ext.data.Store',
    requires: ['DoWall.model.Task'],
    config: {
        model   : 'DoWall.model.Task',

    }
});
