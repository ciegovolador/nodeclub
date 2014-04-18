# nodeclub [![Build Status](https://secure.travis-ci.org/cnodejs/nodeclub.png?branch=master)](http://travis-ci.org/cnodejs/nodeclub) [![依赖模块状态](https://david-dm.org/cnodejs/nodeclub.png)](http://david-dm.org/cnodejs/nodeclub)

Sistema de comunidades basada en Nodejs

## Introducción



Nodo Club es una comunidad desarrollada en **Node.js** y **MongoDB**, posee una interfaz elegante, rica en características, es compacto y rápido, se ha usado en [CNode](http://cnodejs.org), la comunidad técnica china de Node.js pero se puede utilizar para construir sus propias comunidades.

## Instalación

```bash
// install node npm mongodb
// run mongod
$ npm install
$ cp config.default.js config.js
// modify the config file as yours
$ node app.js
```

## TEST

```bash
$ make test
```

jscoverage

```bash
$ make test-cov
```

* jscoverage: [**31%**](http://fengmk2.github.com/coverage/nodeclub.html)

## Nota

Pequeñas modificaciones en ：node-markdown

* node-markdown/lib/markdown.js

allowedTags Añadido：

```
embed  //Soporte de video para flash
table|thead|tbody|tr|td|th|caption  //Ayuda
```

allowedAttributes 添加：

```
embed:'src|quality|width|height|align|allowScriptAccess|allowFullScreen|mode|type'
table: 'class'
```

## Sobre pull request

Todas las propuestas deben seguir estrictamente la [guia de estilo](https://github.com/windyrobin/iFrame/blob/master/style.md)。

## Contributors

Below is the output from `git-summary`. Only first ten.

```bash
$ git summary

project  : nodeclub
repo age : 2 years
active   : 205 days
commits  : 471
files    : 260
authors  :
 203  fengmk2                 43.1%
  49  jiyinyiyong             10.4%
  48  Jackson Tian            10.2%
  44  Alsotang                9.3%
  30  dead-horse              6.4%
  10  Kenny Zhao              2.1%
  10  Lei Zongmin             2.1%
   9  muyuan                  1.9%
   8  Zongmin Lei             1.7%
   7  young40                 1.5%
```

## License

( The MIT License )

Copyright (c) 2012 - 2013 muyuan, fengmk2 and other nodeclub contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
