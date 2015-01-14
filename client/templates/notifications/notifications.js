Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({userId: Meteor.userId(), read: false});
  },
  notificationCount: function(){
    return Notifications.find({userId: Meteor.userId(), read: false}).count();
  }
});

Template.notificationItem.helpers({
  notificationPostPath: function() {
    return Router.routes.postPage.path({_id: this.postId});
  },
  /*
      template error cuando ingresas a submitpost
      "Exception in template helper: .postTtile@http://localhost:3000/client/templates/notifications/notifications.js?bf843f3db14bf362e4e64d15a713f1baeebef0ed:21:1
  */

  postTtile: function() {
    var post = Posts.findOne(this.postId);
    if (post.title.length > 10) {
      return post.title.substring(0,10) +'...'
    } else{
      return post.title;
    };
  }
})

Template.notificationItem.events({
  'click a': function() {
    Notifications.update(this._id, {$set: {read: true}});
  }
})