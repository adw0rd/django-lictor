"use strict";

/**
 * @class Lictor.Ster
 *
 * @property {jQuery} node
 * @property {Number} posX
 */
Lictor.Step = go.Class({

    'HTML_PATTERN': "<div class='lictor-step'><div class='title'>{{ title }}</div><div class='content'></div></div>",

    /**
     * @param {String} title
     */
    '__construct': (function (title) {
        this.title = title;
        this.createNode();
    }),
    
    'createNode': (function () {
        this.node = $(this.HTML_PATTERN.replace("{{ title }}", this.title));
        this.pos(0);
    }),
    
    'pos': (function (x) {
        this.posX = x;
        this.node.css("left", x + "px");
    }),
    
    'shift': (function (d) {
        this.pos(this.posX + d);
    }),
    
    'eoc': null
});