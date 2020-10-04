const emojis = ["👌", "🤘", "🖖", "✌️", "🤙"];

var holder = document.getElementById("frames");

$(document).ready(function() {
  var i;
  var randIndex;

  for (i = 0; i < 7; i++) {
    randIndex = Math.floor(Math.random() * emojis.length);
    holder.innerHTML += emojis[randIndex] + "   ";
  }
});

$("#reroll").on({
  mouseenter: function() {
    $(this).css("filter", "none");
  },
  mouseleave: function() {
    $(this).css("filter", "none");
  },
  click: function() {
    $("#frames").empty();
    var i;
    var randIndex;

    for (i = 0; i < 7; i++) {
      randIndex = Math.floor(Math.random() * emojis.length);
      holder.innerHTML += emojis[randIndex] + "   ";
    }
  }
});
