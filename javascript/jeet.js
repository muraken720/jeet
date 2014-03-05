$(function() {

  var aside = $('aside'),
      asideRatio = aside.attr('jeet-span'),
      article = $('article'),
      articleRatio = article.attr('jeet-span');

  aside.css('width', eval(asideRatio) * 100 + '%');
  article.css('width', eval(articleRatio) * 100 + '%');

});
