!new function(){function n(){$("h1,h2,h3,h4,h5,h6").widont()}function t(n){return n.replace(o.regexp,"&#160;$1")}var i={auto:function(n){return void 0!=n?o.auto=n:o.auto},init:function(){return o.init()},transform:function(n){return o.widont(n)}};$.jqwidont=i;var o={auto:!0,init:n,widont:t,regexp:new RegExp("[\\n\\r\\s]+([^\\n\\r\\s(?:&#160;)]+[\\n\\r\\s]*)$","m")};$(document).ready(function(){o.auto&&n()}),$.fn.widont=function(){return $(this).each(function(){var n=$(this);n.html(o.widont(n.html()))})}};