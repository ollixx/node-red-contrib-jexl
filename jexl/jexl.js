
module.exports = function (RED) {

    RED.nodes.registerType("jexl", jexlNode);
    function jexlNode(config) {
        var node = this;

        // Create our node and event handler
        RED.nodes.createNode(this, config);
        node.jexl = require('jexl');

        this.on("input", function (msg) {

            try {
                msg.payload = node.jexl.evalSync(msg.payload, msg.context);
                if (msg.payload === undefined) {
                    node.status({ fill: "yellow", shape: "ring", text: "-> undefined"});
                } else {
                    node.status({});
                }
                this.send(msg);
            } catch (err) {
                node.error("error parsing jexl: " + err);
                node.status({ fill: "red", shape: "ring", text: err.message });
            }

        });

    }
} 