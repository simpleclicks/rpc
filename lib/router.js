/**
 * Created by sheetal_paranjpe on 12/5/15.
 */
FlowRouter.route('/player1',{
    action: function (params) {
        BlazeLayout.render('player1',{area: 'main'})
    }
});

FlowRouter.route('/player2',{
    action: function (params) {
        BlazeLayout.render('player2',{area: 'main'})
    }
});
