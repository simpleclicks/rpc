Game = new Mongo.Collection('currentGame');

if (Meteor.isClient) {


  Template.player1.helpers({
    player: function() {
      Session.set('player',"this is player1");
      return Session.get('player');
    },
    gameStarted : function() {
      return "";
    }
  });

  Template.player2.helpers({
    player: function() {
      Session.set('player',"this is player2");
      return Session.get('player');
    },
    gameStarted : function() {
      return "";
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
