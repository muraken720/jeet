var postcss = require('postcss'),
    fs = require('fs'),
    inFile = fs.readFileSync('./in.css'),
    css = postcss.parse(inFile);

var contenter = postcss(function (css) {
    var frac = css.rules[0].decls[0]._value,
        ratioW = (frac.split("/")[0] / frac.split("/")[1] * 100);
    css.eachRule(function (rule) {
        if ( rule.selector.match(/.foo/) ) {
            rule.decls[0].removeSelf();
            rule.prepend({ prop: 'width', value: ratioW + '%'});
        }
    });
});

var fixed = contenter.process(css).css;

fs.writeFileSync('out.css', fixed);
