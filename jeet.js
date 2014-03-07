var postcss = require('postcss'),
    fs = require('fs'),
    inFile = fs.readFileSync('./in.css'),
    css = postcss.parse(inFile);

var contenter = postcss(function (css) {
    css.eachRule(function (rule) {
        if ( rule.selector.match(/.foo/) ) {

            rule.eachDecl(function (decl, i) {
              if(decl.prop == 'column') {
                var frac = decl._value,
                    ratioW = (frac.split("/")[0] / frac.split("/")[1] * 100);
                rule.remove(i);
                rule.prepend({prop: 'float', value: 'left'});
                rule.prepend({prop: 'width', value: ratioW + '%'});
              }
            });


        }
    });
});

var fixed = contenter.process(css).css;

fs.writeFileSync('out.css', fixed);
