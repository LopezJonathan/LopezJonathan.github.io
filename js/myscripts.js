// JavaScript Document
"use strict";

$(".bounce").on("mouseenter", function() {
  var duration = 1;
  TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
  TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
});