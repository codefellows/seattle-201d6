// Here's the constructor for the individual comments
var Comment  = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return liEl;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Just setting up some variables for DOM access
var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var clearChatList = document.getElementById('clear-chat-list');
var allComments = [];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Each comment is an instance of the Comment constructor.
// This is a global function to render all of them.
//
// Each time a new comment is created...
//   what this actually does is clear and then re-display all comments,
//   even though it looks like we are just adding a comment.
//
// The parameter 'unicorn' below is just a placeholder that is used in the
//   forEach() method that is built in to all arrays, kind of like the
//   built-in .length property of arrays that we use in 'for' loops.
//
// This is your first taste of "functional programming", in which we use
//   functions as parameters/arguments to other functions. The function
//   being passed in is a "callback function". It is basically the same
//   thing we do in an event listener when we specify what function is to be
//   called when an event is triggered.
//
// forEach() is the functional programming way to do a 'for' loop.
//
// Remember that each element of the 'allComments' array is a Comment instance,
//   so that means every one of them has the render() method available to it,
//   the method that we set with Comment.prototype.render above.
//
// Thus, 'unicorn' is specified as a parameter to the callback function and
//   serves as a name that stands in for each element of the array, just like
//   you've used arrayName[i] in the past.
//
var renderAllComments = function() {
  chatList.innerHTML = '';
  allComments.forEach(function(unicorn) {
    chatList.appendChild(unicorn.render());
  });
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function handles the submission of comments
function handleCommentSubmit(event) {
  console.log(event);
  event.preventDefault(); //gotta have it. prevents page reload

   if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
   }

   var commenter = event.target.who.value;
   var remark = event.target.says.value;

   if (commenter === 'Emily') {
    remark = 'YOLO SWAG 420!!!!';
   }

   var newComment = new Comment(commenter, remark);

   console.log('Comment by ' + event.target.who.value + ' at ' + Date());
   event.target.who.value = null;
   event.target.says.value = null;

   allComments.push(newComment);
   renderAllComments();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the 'Clear all comments' button
clearChatList.addEventListener('click', function() {
  console.log('You just cleared the chat list!');
  chatList.innerHTML = '';
  allComments = [];
});
