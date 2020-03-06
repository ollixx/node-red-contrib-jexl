# node-red-contrib-jexl
[node-red](https://nodered.org/) [node](https://nodered.org/docs/tutorials/first-flow) to parse and evaluate an expression against a context using [jexl](https://www.npmjs.com/package/jexl)

## What does it do?
The jexl node expects a ```msg.payload``` that contains a valid jexl expression, e.g.

```(data.someprop + 2) > 42 ? "cannot be" : "this is right"```

It also expects some data in the ```msg.context``` property. The expression is parsed and evaluated against this data, e.g.

``` json
{
    "data": {
        "someprop": 40      
    }
}
```

This would result in this string: ```this is right``` in ```msg.payload```.

## Ideas to improve this node
* set the input property name for payload / context
* allow to add [operators](https://github.com/TomFrost/jexl#jexladdbinaryopstring-operator-number-precedence-function-fn) or [transforms](https://github.com/TomFrost/jexl#jexladdtransformstring-name-function-transform) by passing in more message parts, that contain javascript code
* allow to set [xml / yaml transforms](https://github.com/TomFrost/jexl#advanced-transforms) to run these formats with the node.

If you have a feature request, please contact me or open a pull request.