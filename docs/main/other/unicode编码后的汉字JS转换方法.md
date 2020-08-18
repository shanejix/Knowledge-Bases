1.&#x转汉字

```js
unescape("&#x5927;&#x5927;".replace(/&#x/g,'%u').replace(/;/g,''))
```

2.汉字转&#x

```js
"大大".replace(/[^\u0000-\u00FF]/g,function(a){return escape(a).replace(/(%u)(\w{4})/gi,"&#x$2;")})
```
