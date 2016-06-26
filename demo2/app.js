$(function () {

  var VoteView = Backbone.View.extend({
    initialize: function () {
      this.score = 0;
      this.render();
    },
    render: function () {
      this.$el.html(this.score + " <button class='up'>Upvote!</button>");
    },
    events: {
      "click button": "upvote"
    },
    upvote: function() {
      this.score ++;
      this.render();
    }
  });

  var view = new VoteView({
    el: $('.post1')
  });
});





// Longhand in JQuery in the initializer
// Shorthand in events
// Events are scoped to the $el
// button click
// button click outside the $el
// {"event" : "callback"}
// {"event selector" : "callback"}

// preventDefault

// $(function () {

//   var SharkTankView = Backbone.View.extend({
//     initialize: function () {
//       this.render();
//     },
//     render: function () {
//       this.$el.html("Ouch, my legs!");
//     }
//   });

//   var view = new SharkTankView({
//     el: $('#tank')
//   });
// });
