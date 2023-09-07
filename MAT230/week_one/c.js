define("PropositionManipulationProgression", ["exports"], function (a) {
  function b(a) {
    if (Array.isArray(a)) {
      for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c
    }
    return Array.from(a)
  }

  function c() {
    this.isShown = !1, this.isDisabled = !1
  }

  function d(a, b) {
    this.expressionContainers = [], this.instructions = [], this.cancelButton = new c, this.errorMessage = "", this.okButton = new c, this.infoButtonLink = a, this.expressionType = b
  }

  function e(a) {
    this.$dom = a.$dom, this.expressionType = a.expressionType, this.templates = a.templates, this.lawsAreaController = a.lawsAreaController, this.infoButtonLink = a.infoButtonLink, this.checkIfLastExpressionIsExpectedAnswer = a.checkIfLastExpressionIsExpectedAnswer, this.showTermSelectionExample = a.showTermSelectionExample
  }

  function f(a) {
    this.symbol = a, this.html = "", this.isDisabled = !0, this.isColored = !1, this.undoButton = new c, this.applyButton = new c, this.nextButton = new c
  }

  function g(a) {
    this.numbering = a, this.isShown = this.isDisabled = !1
  }

  function h(a, b, c) {
    g.prototype.constructor.call(this, c), this.term = a, this.termHTML = "", this.lawSide = b, this.lawSideHTML = ""
  }

  function i(a, b) {
    g.prototype.constructor.call(this, b), this.text = a
  }

  function j(a, b) {
    this.leftSide = a, this.rightSide = b, this.useArrow = !1, this.arrowURL = ""
  }

  function k(a, b) {
    this.name = a, this.laws = b
  }

  function l() {
    this.sdk = require("PropositionalCalculusSDK").create()
  }

  function m(a, b, c, d) {
    this.symbol = a, this.isButton = b, this.terms = c || [], this.html = "", this.manipulation = d || ""
  }

  function n(a) {
    var b = [new p("equalitySymbol", "â‰¡"), new p("isDisabled", !1), new p("lawPanels", []), new p("title", a.title ? a.title : "Laws"), new p("rightArrowURL", ""), new p("leftArrowURL", "")];
    C(this, b, a)
  }

  function o(a) {
    this.$dom = a.$dom, this.expressionType = a.expressionType, this.templates = a.templates, this.setManipulationTerms = a.setManipulationTerms, this.lawsArea = new n({
      rightArrowURL: a.rightArrowURL,
      leftArrowURL: a.leftArrowURL,
      lawPanels: a.lawPanels,
      title: "digital" === this.expressionType ? "Properties" : "Laws"
    }), this.render()
  }

  function p(a, b) {
    this.name = a, this.defaultValue = b
  }

  function q() {
    this.PropositionManipulationProgression = this.PropositionManipulationProgression || {}, this.PropositionManipulationProgression.expressionArea = Handlebars.template({
      1: function (a, b, c, d, e, f, g) {
        var h, i, j = null != b ? b : a.nullContext || {};
        return "    <div class='expression-area'>\n" + (null != (h = c.each.call(j, null != b ? b.instructions : b, {
          name: "each",
          hash: {},
          fn: a.program(2, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "\n" + (null != (h = c.each.call(j, null != b ? b.expressionContainers : b, {
          name: "each",
          hash: {},
          fn: a.program(16, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "\n" + (null != (h = c["with"].call(j, null != b ? b.cancelButton : b, {
          name: "with",
          hash: {},
          fn: a.program(39, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "\n        <div class='error-message-container'>\n            <div class='error-message'>" + a.escapeExpression((i = null != (i = c.errorMessage || (null != b ? b.errorMessage : b)) ? i : c.helperMissing, "function" == typeof i ? i.call(j, {
          name: "errorMessage",
          hash: {},
          data: e
        }) : i)) + "</div>\n" + (null != (h = c["with"].call(j, null != b ? b.okButton : b, {
          name: "with",
          hash: {},
          fn: a.program(42, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "        </div>\n    </div>\n"
      },
      2: function (a, b, c, d, e) {
        var f;
        return null != (f = c["with"].call(null != b ? b : a.nullContext || {}, b, {
          name: "with",
          hash: {},
          fn: a.program(3, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      3: function (a, b, c, d, e) {
        var f;
        return null != (f = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isShown : b, {
          name: "if",
          hash: {},
          fn: a.program(4, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      4: function (a, b, c, d, e) {
        var f, g = null != b ? b : a.nullContext || {};
        return "                    <div class='instruction-container'>\n                        <div class='instruction" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + "'>\n                            " + (null != (f = c["if"].call(g, null != b ? b.numbering : b, {
          name: "if",
          hash: {},
          fn: a.program(7, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + "\n" + (null != (f = c["if"].call(g, null != b ? b.text : b, {
          name: "if",
          hash: {},
          fn: a.program(9, e, 0),
          inverse: a.program(11, e, 0),
          data: e
        })) ? f : "") + "                        </div>\n                    </div>\n"
      },
      5: function (a, b, c, d, e) {
        return " disabled"
      },
      7: function (a, b, c, d, e) {
        var f;
        return a.escapeExpression((f = null != (f = c.numbering || (null != b ? b.numbering : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : a.nullContext || {}, {
          name: "numbering",
          hash: {},
          data: e
        }) : f)) + "."
      },
      9: function (a, b, c, d, e) {
        var f;
        return "                                " + a.escapeExpression((f = null != (f = c.text || (null != b ? b.text : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : a.nullContext || {}, {
          name: "text",
          hash: {},
          data: e
        }) : f)) + "\n"
      },
      11: function (a, b, c, d, e) {
        var f, g, h = null != b ? b : a.nullContext || {},
          i = c.helperMissing,
          j = "function";
        return "                                Select&nbsp;" + (null != (g = null != (g = c.termHTML || (null != b ? b.termHTML : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "termHTML",
          hash: {},
          data: e
        }) : g) ? f : "") + "&nbsp;from&nbsp;\n                                <button class='md-action-button compact' disabled>" + (null != (g = null != (g = c.lawSideHTML || (null != b ? b.lawSideHTML : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "lawSideHTML",
          hash: {},
          data: e
        }) : g) ? f : "") + "</button>\n                                &nbsp;below\n\n                                " + (null != (f = c["if"].call(h, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(12, e, 0),
          inverse: a.program(14, e, 0),
          data: e
        })) ? f : "")
      },
      12: function (a, b, c, d, e) {
        return ""
      },
      14: function (a, b, c, d, e) {
        return "\n                                    <button class='md-button compact show-me-how'>Show me how</button>\n"
      },
      16: function (a, b, c, d, e, f, g) {
        var h;
        return "            <div class='expression-container'>\n" + (null != (h = c["with"].call(null != b ? b : a.nullContext || {}, b, {
          name: "with",
          hash: {},
          fn: a.program(17, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "            </div>\n"
      },
      17: function (a, b, c, d, e, f, g) {
        var h, i, j = null != b ? b : a.nullContext || {};
        return "                    <div class='expression" + (null != (h = c["if"].call(j, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + (null != (h = c["if"].call(j, null != b ? b.isColored : b, {
          name: "if",
          hash: {},
          fn: a.program(18, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "'>" + (null != (i = null != (i = c.html || (null != b ? b.html : b)) ? i : c.helperMissing, h = "function" == typeof i ? i.call(j, {
          name: "html",
          hash: {},
          data: e
        }) : i) ? h : "") + "</div>\n" + (null != (h = c["with"].call(j, null != b ? b.undoButton : b, {
          name: "with",
          hash: {},
          fn: a.program(20, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + (null != (h = c["with"].call(j, null != b ? b.nextButton : b, {
          name: "with",
          hash: {},
          fn: a.program(27, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + (null != (h = c["with"].call(j, null != b ? b.applyButton : b, {
          name: "with",
          hash: {},
          fn: a.program(30, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "")
      },
      18: function (a, b, c, d, e) {
        return " colored"
      },
      20: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isShown : b, {
          name: "if",
          hash: {},
          fn: a.program(21, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : ""
      },
      21: function (a, b, c, d, e, f, g) {
        var h, i = null != b ? b : a.nullContext || {};
        return "                            <button class='md-button undo'" + (null != (h = c["if"].call(i, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + ">\n                                Undo " + (null != (h = (c.ifCond || b && b.ifCond || c.helperMissing).call(i, null != g[4] ? g[4].expressionType : g[4], "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(22, e, 0, f, g),
          inverse: a.program(24, e, 0, f, g),
          data: e
        })) ? h : "") + "\n                            </button>\n"
      },
      22: function (a, b, c, d, e) {
        return "law"
      },
      24: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = (c.ifCond || b && b.ifCond || c.helperMissing).call(null != b ? b : a.nullContext || {}, null != g[3] ? g[3].expressionType : g[3], "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(22, e, 0, f, g),
          inverse: a.program(25, e, 0, f, g),
          data: e
        })) ? h : ""
      },
      25: function (a, b, c, d, e) {
        return "property"
      },
      27: function (a, b, c, d, e) {
        var f;
        return null != (f = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isShown : b, {
          name: "if",
          hash: {},
          fn: a.program(28, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      28: function (a, b, c, d, e) {
        var f;
        return "                            <div><button class='md-action-button compact next-term'" + (null != (f = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">Next term</button></div>\n"
      },
      30: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isShown : b, {
          name: "if",
          hash: {},
          fn: a.program(31, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : ""
      },
      31: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = (c.ifCond || b && b.ifCond || c.helperMissing).call(null != b ? b : a.nullContext || {}, null != g[4] ? g[4].manipulationName : g[4], "===", "reverseOrComplement", {
          name: "ifCond",
          hash: {},
          fn: a.program(32, e, 0, f, g),
          inverse: a.program(34, e, 0, f, g),
          data: e
        })) ? h : ""
      },
      32: function (a, b, c, d, e) {
        var f, g = null != b ? b : a.nullContext || {};
        return "                                <div class='complement-buttons-area'>\n                                    <p class='complement-apply'>Complement to apply</p>\n                                    <div>\n                                        <button id='x' class='md-action-button compact apply'" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">x+x'</button>\n                                        <button id='y' class='md-action-button compact apply'" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">y+y'</button>\n                                        <button id='z' class='md-action-button compact apply'" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">z+z'</button>\n                                    </div>\n                                </div>\n"
      },
      34: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = (c.ifCond || b && b.ifCond || c.helperMissing).call(null != b ? b : a.nullContext || {}, null != g[3] ? g[3].manipulationName : g[3], "===", "reverseOrComplement", {
          name: "ifCond",
          hash: {},
          fn: a.program(35, e, 0, f, g),
          inverse: a.program(37, e, 0, f, g),
          data: e
        })) ? h : ""
      },
      35: function (a, b, c, d, e) {
        var f, g = null != b ? b : a.nullContext || {};
        return "                                    <div class='complement-buttons-area'>\n                                        <p class='complement-apply'>Complement to apply</p>\n                                        <div>\n                                            <button id='x' class='md-action-button compact apply'" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">x+x'</button>\n                                            <button id='y' class='md-action-button compact apply'" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">y+y'</button>\n                                            <button id='z' class='md-action-button compact apply'" + (null != (f = c["if"].call(g, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">z+z'</button>\n                                        </div>\n                                    </div>\n"
      },
      37: function (a, b, c, d, e, f, g) {
        var h, i = null != b ? b : a.nullContext || {};
        return "                                    <div>\n                                        <button class='md-action-button compact apply'" + (null != (h = c["if"].call(i, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + ">\n                                            Apply " + (null != (h = (c.ifCond || b && b.ifCond || c.helperMissing).call(i, null != g[6] ? g[6].expressionType : g[6], "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(22, e, 0, f, g),
          inverse: a.program(24, e, 0, f, g),
          data: e
        })) ? h : "") + "\n                                        </button>\n                                    </div>\n"
      },
      39: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isShown : b, {
          name: "if",
          hash: {},
          fn: a.program(40, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : ""
      },
      40: function (a, b, c, d, e, f, g) {
        var h, i = null != b ? b : a.nullContext || {};
        return "                <button class='md-button cancel'" + (null != (h = c["if"].call(i, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + ">\n                    Cancel " + (null != (h = (c.ifCond || b && b.ifCond || c.helperMissing).call(i, null != g[1] ? g[1].expressionType : g[1], "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(22, e, 0, f, g),
          inverse: a.program(24, e, 0, f, g),
          data: e
        })) ? h : "") + "\n                </button>\n"
      },
      42: function (a, b, c, d, e) {
        var f;
        return null != (f = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isShown : b, {
          name: "if",
          hash: {},
          fn: a.program(43, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      43: function (a, b, c, d, e) {
        var f;
        return "                    <button class='md-action-button ok'" + (null != (f = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + ">OK</button>\n"
      },
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = c["with"].call(null != b ? b : a.nullContext || {}, null != b ? b.expressionArea : b, {
          name: "with",
          hash: {},
          fn: a.program(1, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : ""
      },
      useData: !0,
      useDepths: !0
    }), this.PropositionManipulationProgression.expressionParts = Handlebars.template({
      1: function (a, b, c, d, e) {
        var f, g, h = null != b ? b : a.nullContext || {};
        return "<span class='" + (null != (f = c["with"].call(h, null != b ? b.symbol : b, {
          name: "with",
          hash: {},
          fn: a.program(2, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + "'>" + (null != (g = null != (g = c.output || (null != b ? b.output : b)) ? g : c.helperMissing, f = "function" == typeof g ? g.call(h, {
          name: "output",
          hash: {},
          data: e
        }) : g) ? f : "") + "</span>"
      },
      2: function (a, b, c, d, e) {
        var f;
        return null != (f = c.each.call(null != b ? b : a.nullContext || {}, null != b ? b.marks : b, {
          name: "each",
          hash: {},
          fn: a.program(3, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      3: function (a, b, c, d, e) {
        return " mark-" + a.escapeExpression(a.lambda(b, b))
      },
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e) {
        var f;
        return null != (f = c.each.call(null != b ? b : a.nullContext || {}, null != b ? b.parts : b, {
          name: "each",
          hash: {},
          fn: a.program(1, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      useData: !0
    }), this.PropositionManipulationProgression.lawsArea = Handlebars.template({
      1: function (a, b, c, d, e, f, g) {
        var h, i, j = null != b ? b : a.nullContext || {};
        return "    <div class='laws-area" + (null != (h = c["if"].call(j, null != b ? b.isDisabled : b, {
          name: "if",
          hash: {},
          fn: a.program(2, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "'>\n        <div class='title'>" + a.escapeExpression((i = null != (i = c.title || (null != b ? b.title : b)) ? i : c.helperMissing, "function" == typeof i ? i.call(j, {
          name: "title",
          hash: {},
          data: e
        }) : i)) + "</div>\n        <div class='law-panels-container'>\n" + (null != (h = c.each.call(j, null != b ? b.lawPanels : b, {
          name: "each",
          hash: {},
          fn: a.program(4, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "        </div>\n    </div>\n"
      },
      2: function (a, b, c, d, e) {
        return " disabled"
      },
      4: function (a, b, c, d, e, f, g) {
        var h;
        return "                <div class='law-panel'>\n" + (null != (h = c.each.call(null != b ? b : a.nullContext || {}, b, {
          name: "each",
          hash: {},
          fn: a.program(5, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "                </div>\n"
      },
      5: function (a, b, c, d, e, f, g) {
        var h, i, j = null != b ? b : a.nullContext || {};
        return "                        <div class='category-container'>\n                            <div class='category-name'>" + a.escapeExpression((i = null != (i = c.name || (null != b ? b.name : b)) ? i : c.helperMissing, "function" == typeof i ? i.call(j, {
          name: "name",
          hash: {},
          data: e
        }) : i)) + "</div>\n" + (null != (h = c.each.call(j, null != b ? b.laws : b, {
          name: "each",
          hash: {},
          fn: a.program(6, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "                        </div>\n"
      },
      6: function (a, b, c, d, e, f, g) {
        var h;
        return "                                <div class='law-container'>\n" + (null != (h = c["with"].call(null != b ? b : a.nullContext || {}, b, {
          name: "with",
          hash: {},
          fn: a.program(7, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "                                </div>\n"
      },
      7: function (a, b, c, d, e, f, g) {
        var h, i = null != b ? b : a.nullContext || {};
        return (null != (h = c["with"].call(i, null != b ? b.leftSide : b, {
          name: "with",
          hash: {},
          fn: a.program(8, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + "\n                                        <div class='between-law-sides'>\n" + (null != (h = c["if"].call(i, null != b ? b.useArrow : b, {
          name: "if",
          hash: {},
          fn: a.program(13, e, 0, f, g),
          inverse: a.program(15, e, 0, f, g),
          data: e
        })) ? h : "") + "                                        </div>\n\n" + (null != (h = c["with"].call(i, null != b ? b.rightSide : b, {
          name: "with",
          hash: {},
          fn: a.program(8, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "")
      },
      8: function (a, b, c, d, e, f, g) {
        var h;
        return "                                            <div>\n" + (null != (h = c["if"].call(null != b ? b : a.nullContext || {}, null != b ? b.isButton : b, {
          name: "if",
          hash: {},
          fn: a.program(9, e, 0, f, g),
          inverse: a.program(11, e, 0, f, g),
          data: e
        })) ? h : "") + "                                            </div>\n"
      },
      9: function (a, b, c, d, e, f, g) {
        var h, i, j = null != b ? b : a.nullContext || {};
        return "                                                    <button class='md-action-button compact law-proposition'" + (null != (h = c["if"].call(j, null != g[4] ? g[4].isDisabled : g[4], {
          name: "if",
          hash: {},
          fn: a.program(2, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + (null != (h = c["if"].call(j, null != g[6] ? g[6].isDisabled : g[6], {
          name: "if",
          hash: {},
          fn: a.program(2, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : "") + ">" + (null != (i = null != (i = c.html || (null != b ? b.html : b)) ? i : c.helperMissing, h = "function" == typeof i ? i.call(j, {
          name: "html",
          hash: {},
          data: e
        }) : i) ? h : "") + "</button>\n"
      },
      11: function (a, b, c, d, e) {
        var f, g;
        return "                                                    <div class='law-side law-proposition'>" + (null != (g = null != (g = c.html || (null != b ? b.html : b)) ? g : c.helperMissing, f = "function" == typeof g ? g.call(null != b ? b : a.nullContext || {}, {
          name: "html",
          hash: {},
          data: e
        }) : g) ? f : "") + "</div>\n"
      },
      13: function (a, b, c, d, e) {
        var f, g;
        return "                                                <img src='" + (null != (g = null != (g = c.arrowURL || (null != b ? b.arrowURL : b)) ? g : c.helperMissing, f = "function" == typeof g ? g.call(null != b ? b : a.nullContext || {}, {
          name: "arrowURL",
          hash: {},
          data: e
        }) : g) ? f : "") + "'></img>\n"
      },
      15: function (a, b, c, d, e, f, g) {
        var h = a.lambda,
          i = a.escapeExpression;
        return "                                                " + i(h(null != g[3] ? g[3].equalitySymbol : g[3], b)) + i(h(null != g[5] ? g[5].equalitySymbol : g[5], b)) + "\n"
      },
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e, f, g) {
        var h;
        return null != (h = c["with"].call(null != b ? b : a.nullContext || {}, null != b ? b.lawsArea : b, {
          name: "with",
          hash: {},
          fn: a.program(1, e, 0, f, g),
          inverse: a.noop,
          data: e
        })) ? h : ""
      },
      useData: !0,
      useDepths: !0
    }), this.PropositionManipulationProgression.questionArea = Handlebars.template({
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e) {
        var f;
        return "<div class='prompt'></div>\n<div class='work-area'>\n    <div class='expression-area-container' style='min-width: " + a.escapeExpression((f = null != (f = c.expressionAreaWidth || (null != b ? b.expressionAreaWidth : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : a.nullContext || {}, {
          name: "expressionAreaWidth",
          hash: {},
          data: e
        }) : f)) + ";'></div>\n    <div class='laws-area-container'></div>\n</div>"
      },
      useData: !0
    }), this.PropositionManipulationProgression.simplifyPrompt = Handlebars.template({
      1: function (a, b, c, d, e) {
        return "Expand"
      },
      3: function (a, b, c, d, e) {
        return "Simplify"
      },
      5: function (a, b, c, d, e) {
        return " sum-of-minterms form"
      },
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e) {
        var f, g, h = null != b ? b : a.nullContext || {},
          i = c.helperMissing,
          j = "function";
        return (null != (f = (c.ifCond || b && b.ifCond || i).call(h, null != b ? b.type : b, "===", "expand", {
          name: "ifCond",
          hash: {},
          fn: a.program(1, e, 0),
          inverse: a.program(3, e, 0),
          data: e
        })) ? f : "") + " <span class='expression'>" + (null != (g = null != (g = c.initialExpression || (null != b ? b.initialExpression : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "initialExpression",
          hash: {},
          data: e
        }) : g) ? f : "") + "</span> to" + (null != (f = (c.ifCond || b && b.ifCond || i).call(h, null != b ? b.type : b, "===", "expand", {
          name: "ifCond",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : "") + " <span class='expression'>" + a.escapeExpression((g = null != (g = c.finalExpression || (null != b ? b.finalExpression : b)) ? g : i, ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "finalExpression",
          hash: {},
          data: e
        }) : g)) + "</span>\n"
      },
      useData: !0
    }), this.PropositionManipulationProgression.termSelectionExample = Handlebars.template({
      1: function (a, b, c, d, e) {
        return "law"
      },
      3: function (a, b, c, d, e) {
        return "property"
      },
      5: function (a, b, c, d, e) {
        return "proposition"
      },
      7: function (a, b, c, d, e) {
        return "expression"
      },
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e) {
        var f, g, h = null != b ? b : a.nullContext || {},
          i = c.helperMissing,
          j = "function";
        return "<div class='term-selection-example'>\n    " + (null != (g = null != (g = c.firstStep || (null != b ? b.firstStep : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "firstStep",
          hash: {},
          data: e
        }) : g) ? f : "") + "\n    <div class='label instruction-container'>2. Press: Next term</div>\n    " + (null != (g = null != (g = c.thirdStep || (null != b ? b.thirdStep : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "thirdStep",
          hash: {},
          data: e
        }) : g) ? f : "") + "\n    <div class='label instruction-container'>\n        4. Press: Apply " + (null != (f = (c.ifCond || b && b.ifCond || i).call(h, null != b ? b.expressionType : b, "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(1, e, 0),
          inverse: a.program(3, e, 0),
          data: e
        })) ? f : "") + "\n    </div>\n    <p>Notes:</p>\n    <ul>\n        <li>To select, click or tap a symbol.</li>\n        <li>" + (null != (g = null != (g = c.aVariable || (null != b ? b.aVariable : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "aVariable",
          hash: {},
          data: e
        }) : g) ? f : "") + " may be a compound " + (null != (f = (c.ifCond || b && b.ifCond || i).call(h, null != b ? b.expressionType : b, "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.program(7, e, 0),
          data: e
        })) ? f : "") + ". Ex: " + (null != (g = null != (g = c.notWOrMOrFalse || (null != b ? b.notWOrMOrFalse : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "notWOrMOrFalse",
          hash: {},
          data: e
        }) : g) ? f : "") + "</li>\n        <li>Selecting an operator (ex: <span class='mark-color-1'>+</span>) attempts to select the connected compound " + (null != (f = (c.ifCond || b && b.ifCond || i).call(h, null != b ? b.expressionType : b, "===", "proposition", {
          name: "ifCond",
          hash: {},
          fn: a.program(5, e, 0),
          inverse: a.program(7, e, 0),
          data: e
        })) ? f : "") + " (ex: " + (null != (g = null != (g = c.notWOrMOrFalse || (null != b ? b.notWOrMOrFalse : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "notWOrMOrFalse",
          hash: {},
          data: e
        }) : g) ? f : "") + ").</li>\n    </ul>\n</div>\n"
      },
      useData: !0
    }), this.PropositionManipulationProgression.termSelectionExampleStep = Handlebars.template({
      1: function (a, b, c, d, e) {
        var f, g, h = null != b ? b : a.nullContext || {},
          i = c.helperMissing,
          j = "function";
        return "    <div class='instruction-container'>\n        <div class='instruction'>\n            " + a.escapeExpression((g = null != (g = c.numbering || (null != b ? b.numbering : b)) ? g : i, ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "numbering",
          hash: {},
          data: e
        }) : g)) + ". Below, select&nbsp;" + (null != (g = null != (g = c.termHTML || (null != b ? b.termHTML : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "termHTML",
          hash: {},
          data: e
        }) : g) ? f : "") + "&nbsp;from&nbsp;\n            <button class='md-action-button compact' disabled>" + (null != (g = null != (g = c.lawSideHTML || (null != b ? b.lawSideHTML : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "lawSideHTML",
          hash: {},
          data: e
        }) : g) ? f : "") + "</button>\n        </div>\n    </div>\n    <div class='expression-container'>\n        <div class='expression normal-cursor colored'>" + (null != (g = null != (g = c.expressionHTML || (null != b ? b.expressionHTML : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "expressionHTML",
          hash: {},
          data: e
        }) : g) ? f : "") + "</div>\n    </div>\n"
      },
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e) {
        var f;
        return null != (f = c["with"].call(null != b ? b : a.nullContext || {}, null != b ? b.step : b, {
          name: "with",
          hash: {},
          fn: a.program(1, e, 0),
          inverse: a.noop,
          data: e
        })) ? f : ""
      },
      useData: !0
    }), this.PropositionManipulationProgression.wrongAnswerExplanation = Handlebars.template({
      compiler: [7, ">= 4.0.0"],
      main: function (a, b, c, d, e) {
        var f, g, h = null != b ? b : a.nullContext || {},
          i = c.helperMissing,
          j = "function",
          k = a.escapeExpression;
        return "Select a " + k((g = null != (g = c.operatorsName || (null != b ? b.operatorsName : b)) ? g : i, ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "operatorsName",
          hash: {},
          data: e
        }) : g)) + ", then apply that " + k((g = null != (g = c.operatorsName || (null != b ? b.operatorsName : b)) ? g : i, ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "operatorsName",
          hash: {},
          data: e
        }) : g)) + " to your " + k((g = null != (g = c.expressionOrProposition || (null != b ? b.expressionOrProposition : b)) ? g : i, ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "expressionOrProposition",
          hash: {},
          data: e
        }) : g)) + ". Continue until you transform " + (null != (g = null != (g = c.userAnswer || (null != b ? b.userAnswer : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "userAnswer",
          hash: {},
          data: e
        }) : g) ? f : "") + " to " + (null != (g = null != (g = c.expectedAnswer || (null != b ? b.expectedAnswer : b)) ? g : i, f = ("undefined" == typeof g ? "undefined" : E(g)) === j ? g.call(h, {
          name: "expectedAnswer",
          hash: {},
          data: e
        }) : g) ? f : "") + "\n<div>\n    <button class='md-button compact show-me-how'>Show me how</button>\n</div>\n"
      },
      useData: !0
    });
    var a = "PropositionManipulationProgression",
      b = this[a],
      c = null,
      d = "",
      f = null,
      g = null,
      h = null,
      i = null,
      j = null,
      k = null;
    this.init = function (l, m, n) {
      var p = this;
      c = l, d = n.expressionType, this.progressionType = n.progressionType;
      var q = null;
      if ("proposition" === d) switch (this.progressionType) {
        case "reduce1":
          q = new x;
          break;
        case "reduce2":
          q = new z;
          break;
        case "reduce3":
          q = new y;
          break;
        default:
          throw new Error("Unrecognized progressionType option: " + this.progressionType)
      } else if ("digital" === d) switch (this.progressionType) {
        case "reduce1":
          q = new v;
          break;
        case "reduce2":
          q = new w;
          break;
        case "expand":
          q = new u;
          break;
        default:
          throw new Error("Unrecognized progressionType option: " + this.progressionType)
      }
      var r = 5,
        s = require("utilities");
      s.addIfConditionalHandlebars(), f = s.getQuestionCache(q, r), g = require("progressionTool").create();
      var t = !0;
      g.init(l, m, {
        html: b.questionArea({
          expressionAreaWidth: q.expressionAreaWidth
        }),
        css: '<style>.zyante-bold{font-family:HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;font-weight:300}.zyante-section-bold{font-family:Helvetica;font-weight:300}.color-codings span.mark-color-1{color:#e8b493}.color-codings span.mark-color-2{color:#acc6e0}.color-codings span.mark-color-3{color:#ecbd36}.expression-container-styles div.expression-container{align-items:center;display:flex;height:35px;margin-bottom:5px;margin-left:20px}.expression-container-styles div.expression-container div.expression{color:#888;font-size:26px}.expression-container-styles div.expression-container div.expression:not(.disabled){color:#5780a6;font-weight:700}.expression-container-styles div.expression-container div.expression.colored span.mark-color-1{color:#e8b493}.expression-container-styles div.expression-container div.expression.colored span.mark-color-2{color:#acc6e0}.expression-container-styles div.expression-container div.expression.colored span.mark-color-3{color:#ecbd36}.expression-container-styles div.expression-container button{margin-left:15px}.expression-container-styles div.expression-container div.complement-buttons-area{margin-left:30px;text-align:center}.expression-container-styles div.expression-container div.complement-buttons-area p.complement-apply{margin-bottom:3px}.expression-container-styles div.expression-container div.complement-buttons-area button{margin:0 auto;text-transform:none}.instruction-container-styles div.instruction-container{align-items:center;background-color:transparent;display:flex;height:40px}.instruction-container-styles div.instruction-container div.instruction{align-content:center;color:#333;display:flex;font-size:20px}.instruction-container-styles div.instruction-container div.instruction span.mark-color-1{color:#e8b493}.instruction-container-styles div.instruction-container div.instruction span.mark-color-2{color:#acc6e0}.instruction-container-styles div.instruction-container div.instruction span.mark-color-3{color:#ecbd36}.instruction-container-styles div.instruction-container div.instruction.disabled{color:#888}.instruction-container-styles div.instruction-container div.instruction img{cursor:pointer;height:16px;margin-left:5px;width:16px}.instruction-container-styles div.instruction-container div.instruction button{text-transform:none}.PropositionManipulationProgression div.term-selection-example div.expression-container,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container{align-items:center;display:flex;height:35px;margin-bottom:5px;margin-left:20px}.PropositionManipulationProgression div.term-selection-example div.expression-container div.expression,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.expression{color:#888;font-size:26px}.PropositionManipulationProgression div.term-selection-example div.expression-container div.expression:not(.disabled),.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.expression:not(.disabled){color:#5780a6;font-weight:700}.PropositionManipulationProgression div.term-selection-example div.expression-container div.expression.colored span.mark-color-1,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.expression.colored span.mark-color-1{color:#e8b493}.PropositionManipulationProgression div.term-selection-example div.expression-container div.expression.colored span.mark-color-2,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.expression.colored span.mark-color-2{color:#acc6e0}.PropositionManipulationProgression div.term-selection-example div.expression-container div.expression.colored span.mark-color-3,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.expression.colored span.mark-color-3{color:#ecbd36}.PropositionManipulationProgression div.term-selection-example div.expression-container button,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container button{margin-left:15px}.PropositionManipulationProgression div.term-selection-example div.expression-container div.complement-buttons-area,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.complement-buttons-area{margin-left:30px;text-align:center}.PropositionManipulationProgression div.term-selection-example div.expression-container div.complement-buttons-area p.complement-apply,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.complement-buttons-area p.complement-apply{margin-bottom:3px}.PropositionManipulationProgression div.term-selection-example div.expression-container div.complement-buttons-area button,.PropositionManipulationProgression-modal div.term-selection-example div.expression-container div.complement-buttons-area button{margin:0 auto;text-transform:none}.PropositionManipulationProgression div.term-selection-example div.instruction-container,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container{align-items:center;background-color:transparent;display:flex;height:40px}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction{align-content:center;color:#333;display:flex;font-size:20px}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction span.mark-color-1,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction span.mark-color-1{color:#e8b493}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction span.mark-color-2,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction span.mark-color-2{color:#acc6e0}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction span.mark-color-3,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction span.mark-color-3{color:#ecbd36}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction.disabled,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction.disabled{color:#888}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction img,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction img{cursor:pointer;height:16px;margin-left:5px;width:16px}.PropositionManipulationProgression div.term-selection-example div.instruction-container div.instruction button,.PropositionManipulationProgression-modal div.term-selection-example div.instruction-container div.instruction button{text-transform:none}.PropositionManipulationProgression div.term-selection-example div.label,.PropositionManipulationProgression-modal div.term-selection-example div.label{font-size:20px;margin-bottom:5px}.PropositionManipulationProgression div.term-selection-example span.mark-underline,.PropositionManipulationProgression-modal div.term-selection-example span.mark-underline{text-decoration:underline}.PropositionManipulationProgression div.term-selection-example button.ok,.PropositionManipulationProgression-modal div.term-selection-example button.ok{margin-top:15px}.PropositionManipulationProgression div.term-selection-example p,.PropositionManipulationProgression-modal div.term-selection-example p{font-size:20px}.PropositionManipulationProgression div.term-selection-example ul li,.PropositionManipulationProgression-modal div.term-selection-example ul li{font-size:16px;margin-left:0}.PropositionManipulationProgression div.term-selection-example ul li span.mark-color-1,.PropositionManipulationProgression-modal div.term-selection-example ul li span.mark-color-1{color:#e8b493}.PropositionManipulationProgression div.term-selection-example ul li span.mark-color-2,.PropositionManipulationProgression-modal div.term-selection-example ul li span.mark-color-2{color:#acc6e0}.PropositionManipulationProgression div.term-selection-example ul li span.mark-color-3,.PropositionManipulationProgression-modal div.term-selection-example ul li span.mark-color-3{color:#ecbd36}.PropositionManipulationProgression button.compact{height:auto;padding:3px 6px}.PropositionManipulationProgression div.prompt{color:#888;font-size:22px;margin-bottom:20px}.PropositionManipulationProgression div.prompt:not(.disabled){color:#333}.PropositionManipulationProgression div.prompt:not(.disabled) span.expression{font-weight:700}.PropositionManipulationProgression div.prompt span.expression{font-size:26px;padding:0 3px}.PropositionManipulationProgression div.work-area{display:flex}.PropositionManipulationProgression div.work-area span.mark-bold{font-weight:700}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container{align-items:center;display:flex;height:35px;margin-bottom:5px;margin-left:20px}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.expression{color:#888;font-size:26px}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.expression:not(.disabled){color:#5780a6;font-weight:700}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.expression.colored span.mark-color-1{color:#e8b493}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.expression.colored span.mark-color-2{color:#acc6e0}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.expression.colored span.mark-color-3{color:#ecbd36}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container button{margin-left:15px}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.complement-buttons-area{margin-left:30px;text-align:center}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.complement-buttons-area p.complement-apply{margin-bottom:3px}.PropositionManipulationProgression div.work-area div.expression-area div.expression-container div.complement-buttons-area button{margin:0 auto;text-transform:none}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container{align-items:center;background-color:transparent;display:flex;height:40px}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction{align-content:center;color:#333;display:flex;font-size:20px}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction span.mark-color-1{color:#e8b493}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction span.mark-color-2{color:#acc6e0}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction span.mark-color-3{color:#ecbd36}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction.disabled{color:#888}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction img{cursor:pointer;height:16px;margin-left:5px;width:16px}.PropositionManipulationProgression div.work-area div.expression-area div.instruction-container div.instruction button{text-transform:none}.PropositionManipulationProgression div.work-area div.expression-area div.expression:not(.disabled){cursor:pointer}.PropositionManipulationProgression div.work-area div.expression-area button.show-me-how{margin-left:25px}.PropositionManipulationProgression div.work-area div.expression-area button.cancel{margin-top:15px}.PropositionManipulationProgression div.work-area div.expression-area div.error-message-container{align-items:center;display:flex;margin-top:15px}.PropositionManipulationProgression div.work-area div.expression-area div.error-message-container div.error-message{color:#bb0404;font-size:18px;max-width:225px}.PropositionManipulationProgression div.work-area div.expression-area div.error-message-container button{margin-left:20px}.PropositionManipulationProgression div.work-area div.laws-area{border:1px solid #ccc;border-radius:3px;margin-left:15px;padding:5px}.PropositionManipulationProgression div.work-area div.laws-area span.mark-color-1{color:#e8b493}.PropositionManipulationProgression div.work-area div.laws-area span.mark-color-2{color:#acc6e0}.PropositionManipulationProgression div.work-area div.laws-area span.mark-color-3{color:#ecbd36}.PropositionManipulationProgression div.work-area div.laws-area.disabled{color:#888}.PropositionManipulationProgression div.work-area div.laws-area div.title{font-size:22px;margin-bottom:7px;text-align:center;width:100%}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container{display:flex}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel:not(:first-of-type){border-left:1px solid #ccc;margin-left:12px;padding-left:12px}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel .margin-bottom-except-last{margin-bottom:10px}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel .margin-bottom-except-last:last-of-type{margin-bottom:0}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container{margin-bottom:10px}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container:last-of-type{margin-bottom:0}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.category-name{font-size:11px;font-weight:700;margin-bottom:3px}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.law-container{margin-bottom:10px;align-content:center;display:flex;flex-wrap:nowrap}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.law-container:last-of-type{margin-bottom:0}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.law-container div{margin:auto}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.law-container button{text-transform:none}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.law-container div.law-side{text-align:center}.PropositionManipulationProgression div.work-area div.laws-area div.law-panels-container div.law-panel div.category-container div.law-container div.between-law-sides{text-align:center;width:20px}</style>',
        numToWin: q.numberOfLevels,
        useMultipleParts: !0,
        start: function () {
          j.enable(), i.start(), p._getDOM("prompt").removeClass("disabled")
        },
        reset: function () {
          p._generateQuestionByLevelIndex(0), j.removeArrows(), j.disable(), p._getDOM("prompt").addClass("disabled")
        },
        next: function (a) {
          t ? (p._generateQuestionByLevelIndex(a), i.start()) : i.promptLawSelection(), j.removeArrows(), j.enable(), p._getDOM("prompt").removeClass("disabled"), t = !0
        },
        isCorrect: function () {
          i.disable(), j.disable(), j.removeArrows(), p._getDOM("prompt").addClass("disabled");
          var a = p._makeUserAnswer(),
            c = require("PropositionalCalculusSDK").create(),
            e = c.makeExpression(d, k.expectedSymbols[0]).print(),
            f = "Correct";
          return t = p._isUserAnswerCorrect(), t || (f = b.wrongAnswerExplanation({
            userAnswer: a,
            expectedAnswer: e,
            operatorsName: "digital" === d ? "property" : "law",
            expressionOrProposition: "digital" === d ? "expression" : "proposition"
          })), {
            explanationMessage: f,
            expectedAnswer: e,
            isCorrect: t,
            userAnswer: a,
            callbackFunction: function () {
              return p._getDOM("show-me-how").click(function () {
                return h.show()
              })
            }
          }
        }
      }), this._getDOM("prompt").addClass("disabled"), h = new B(m, b, d), j = new o({
        $dom: this._getDOM("laws-area-container"),
        expressionType: d,
        templates: b,
        setManipulationTerms: function (a, b, c) {
          i.setManipulationTerms(a, b, c)
        },
        rightArrowURL: m.getResourceURL("rightArrow.png", a),
        leftArrowURL: m.getResourceURL("leftArrow.png", a),
        lawPanels: q.lawPanels
      }), j.disable(), i = new e({
        $dom: this._getDOM("expression-area-container"),
        expressionType: d,
        templates: b,
        lawsAreaController: j,
        infoButtonLink: m.getResourceURL("InfoBlue.png", a),
        checkIfLastExpressionIsExpectedAnswer: function () {
          p._isUserAnswerCorrect() && g.check()
        },
        showTermSelectionExample: function () {
          h.show()
        }
      }), this._generateQuestionByLevelIndex(0)
    }, this._isUserAnswerCorrect = function () {
      var a = require("PropositionalCalculusSDK").create(),
        b = this._makeUserAnswer();
      return k.expectedSymbols.some(function (c) {
        return a.makeExpression(d, c).print() === b
      })
    }, this._makeUserAnswer = function () {
      return require("PropositionalCalculusSDK").create().makeExpression(d, i.expressionArea.getLastExpressionContainer().symbol).print()
    }, this._generateQuestionByLevelIndex = function (a) {
      k = f.makeQuestion(a);
      var c = require("PropositionalCalculusSDK").create(),
        e = c.makeExpression(d, k.initialSymbol),
        g = c.makeExpression(d, k.expectedSymbols[0]),
        h = g.print();
      "expand" === this.progressionType && (h = h.replace(/[\(\)]/g, ""));
      var j = b.simplifyPrompt({
        initialExpression: e.print(),
        finalExpression: h,
        type: this.progressionType
      });
      this._getDOM("prompt").html(j), i.setInitialSymbolicExpression(k.initialSymbol)
    }, this._getDOM = function (a) {
      return $("#" + c + " ." + a)
    }, this.reset = function () {
      g.reset()
    }
  }

  function r() {
    var a = new l;
    return [
      [new k("Distributive", [a.make("reverseAndDistribution"), a.make("reverseOrDistribution")]), new k("Commutative", [a.make("commutativeOr"), a.make("commutativeAnd")]), new k("De Morgan's", [a.make("deMorganAnd"), a.make("deMorganOr")]), new k("Conditional", [a.make("conditional"), a.make("biconditional")])],
      [new k("Complement", [a.make("complementOr", {
        makeRightSideButton: !1
      }), a.make("complementAnd"), a.make("complementTrue"), a.make("complementFalse")]), new k("Identity", [a.make("identityAndTrue", {
        makeRightSideButton: !1
      }), a.make("identityOrFalse", {
        makeRightSideButton: !1
      })]), new k("Double negation", [a.make("doubleNegation")])]
    ]
  }

  function s(a, b) {
    this.initialSymbol = a, this.expectedSymbols = b
  }

  function t() {
    this.numberOfLevels = 1, this.expressionAreaWidth = "", this.lawCategories = []
  }

  function u() {
    var a = new l;
    this.numberOfLevels = 3, this.expressionAreaWidth = "420px", this.lawPanels = [
      [new k("Distributive", [a.make("reverseAndDistribution"), a.make("reverseOrDistribution")]), new k("Commutative", [a.make("commutativeAnd"), a.make("commutativeOr")]), new k("Complement", [a.make("complementAnd"), a.make("complementOr")])],
      [new k("Identity", [a.make("identityAndTrue"), a.make("identityOrFalse")]), new k("Null elements", [a.make("andNullElements"), a.make("orNullElements")]), new k("Idempotence", [a.make("andIdempotence"), a.make("orIdempotence")])]
    ]
  }

  function v() {
    var a = new l;
    this.numberOfLevels = 2, this.expressionAreaWidth = "420px", this.lawPanels = [
      [new k("Distributive", [a.make("reverseAndDistribution", {
        makeRightSideButton: !1
      })]), new k("Commutative", [a.make("commutativeOr")]), new k("Complement", [a.make("complementOr", {
        makeRightSideButton: !1
      })]), new k("Identity", [a.make("identityAndTrue", {
        makeRightSideButton: !1
      })])]
    ]
  }

  function w() {
    var a = new l;
    this.numberOfLevels = 3, this.expressionAreaWidth = "420px", this.lawPanels = [
      [new k("Distributive", [a.make("reverseAndDistribution"), a.make("reverseOrDistribution")]), new k("Commutative", [a.make("commutativeAnd"), a.make("commutativeOr")]), new k("Complement", [a.make("complementAnd"), a.make("complementOr", {
        makeRightSideButton: !1
      })])],
      [new k("Identity", [a.make("identityAndTrue", {
        makeRightSideButton: !0
      }), a.make("identityOrFalse", {
        makeRightSideButton: !1
      })]), new k("Null elements", [a.make("andNullElements"), a.make("orNullElements")]), new k("Idempotence", [a.make("andIdempotence"), a.make("orIdempotence")])]
    ]
  }

  function x() {
    var a = new l;
    this.numberOfLevels = 3, this.expressionAreaWidth = "420px", this.lawPanels = [
      [new k("Distributive", [a.make("reverseAndDistribution", {
        makeRightSideButton: !1
      }), a.make("reverseOrDistribution", {
        makeRightSideButton: !1
      })]), new k("Commutative", [a.make("commutativeOr"), a.make("commutativeAnd")]), new k("Complement", [a.make("complementOr", {
        makeRightSideButton: !1
      }), a.make("complementAnd")]), new k("Identity", [a.make("identityAndTrue", {
        makeRightSideButton: !1
      }), a.make("identityOrFalse", {
        makeRightSideButton: !1
      })]), new k("Double negation", [a.make("doubleNegation")])]
    ]
  }

  function y() {
    this.numberOfLevels = 2, this.expressionAreaWidth = "470px", this.lawPanels = r()
  }

  function z() {
    this.numberOfLevels = 3, this.expressionAreaWidth = "470px", this.lawPanels = r()
  }

  function A(a, b, c) {
    this.termHTML = a, this.lawSideHTML = b, this.expressionHTML = c, this.numbering = 0
  }

  function B(a, b, c) {
    this._parentResource = a, this._templates = b, this._expressionType = c, this._html = this._buildHTML()
  }

  function C(a, b, c) {
    c && b.forEach(function (b) {
      a[b.name] = b.name in c ? c[b.name] : b.defaultValue
    })
  }
  var D = {},
    E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
      return typeof a
    } : function (a) {
      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    };
  d.prototype.addSymbol = function (a) {
    return this.expressionContainers.push(new f(a)), this
  }, d.prototype.promptLawSelection = function () {
    var a = "digital" === this.expressionType ? "property" : "law",
      b = "Select a " + (this.expressionContainers.length > 1 ? "next " : "") + a + " from the right to apply";
    return this.clearInstructions(), this.instructions.push(new i(b, 1)), this.instructions[0].isShown = !0, this
  }, d.prototype.enableLastExpression = function () {
    var a = this.getLastExpressionContainer();
    return a.isDisabled = !1, a.isColored = !0, this
  }, d.prototype.disableExpressionContainers = function () {
    return this.expressionContainers.forEach(function (a) {
      a.isDisabled = !0, a.isColored = !1, a.applyButton.isShown = !1, a.nextButton.isShown = !1
    }), this.expressionContainers.length > 1 && (this.getLastExpressionContainer().undoButton.isShown = !0), this
  }, d.prototype.addManipulationTerms = function (a, b, c) {
    this.manipulationName = c;
    var d = this;
    return a.forEach(function (a, c) {
      d.instructions.push(new h(a, b, c + 2))
    }), this
  }, d.prototype.clearInstructions = function () {
    return this.instructions.length = 0, this
  }, d.prototype.loadNextInstruction = function () {
    var a = this.instructions.filter(function (a) {
      return a.isShown
    })[0];
    a.isShown = !1, a instanceof h && (this.getLastExpressionContainer().nextButton.isShown = !1);
    var b = this.instructions.indexOf(a) + 1,
      c = this.instructions[b];
    return c.isShown = !0, c instanceof h && (c.term.addMarkRecursive("bold"), c.term.addMarkRecursive("color-" + b)), this
  }, d.prototype.removeAllMarks = function () {
    return this.getTermsInstructions().forEach(function (a) {
      a.term.removeAllMarks()
    }), this.expressionContainers.forEach(function (a) {
      a.symbol.removeAllMarks()
    }), this
  }, d.prototype.showCancelButton = function () {
    return this.cancelButton.isShown = !0, this.cancelButton.isDisabled = !1, this
  }, d.prototype.hideCancelButton = function () {
    return this.cancelButton.isShown = !1, this
  }, d.prototype.hideUndoButtons = function () {
    return this.expressionContainers.forEach(function (a) {
      a.undoButton.isShown = !1
    }), this
  }, d.prototype.addError = function (a) {
    return this.errorMessage = a, this.okButton.isShown = !0, this.cancelButton.isShown = !1, this.expressionContainers.forEach(function (a) {
      a.isDisabled = !0, a.applyButton.isShown = !1
    }), this.getTermsInstructions().forEach(function (a) {
      a.isDisabled = !0, a.term.removeMarkRecursive("bold")
    }), this
  }, d.prototype.removeError = function () {
    return this.errorMessage = "", this.okButton.isShown = !1, this.cancelButton.isDisabled = !1, this.getLastExpressionContainer().applyButton.isDisabled = !1, this
  }, d.prototype.addFeedbackInstruction = function () {
    var a = new i("See feedback below.", null);
    return a.isShown = a.isDisabled = !0, this.instructions.push(a), this
  }, d.prototype.getTermsInstructions = function () {
    return this.instructions.filter(function (a) {
      return a instanceof h
    })
  }, d.prototype.getLastExpressionContainer = function () {
    return this.expressionContainers[this.expressionContainers.length - 1]
  }, d.prototype.getCurrentInstruction = function () {
    return this.instructions.filter(function (a) {
      return a.isShown
    })[0]
  }, e.prototype.render = function () {
    var a = this;
    this.$dom.empty();
    var b = this.templates.expressionParts,
      c = require("PropositionalCalculusSDK").create(),
      d = c.makeExpression;
    this.expressionArea.expressionContainers.forEach(function (c) {
      c.parts = d(a.expressionType, c.symbol).toParts(), c.html = b({
        parts: c.parts
      })
    }), this.expressionArea.getTermsInstructions().forEach(function (c) {
      c.termHTML = b({
        parts: d(a.expressionType, c.term).toParts()
      }), c.lawSideHTML = b({
        parts: d(a.expressionType, c.lawSide).toParts()
      })
    });
    var e = this.templates.expressionArea({
      expressionArea: this.expressionArea,
      manipulationName: this.expressionArea.manipulationName
    });
    this.$dom.html(e), this.$dom.find("button.cancel").click(function () {
      return a.cancel()
    }), this.$dom.find("button.next-term").click(function () {
      a.expressionArea.loadNextInstruction(), a.render(), a.lawsAreaController.render()
    }), this.$dom.find("button.apply").click(function (b) {
      var e = a.expressionArea.getLastExpressionContainer(),
        f = a.expressionArea.getTermsInstructions().map(function (b, c) {
          return a.makeColorMark(c + 1)
        }).map(function (a) {
          return e.symbol.findRootOfMark(a)
        }).map(function (b) {
          return d(a.expressionType, b)
        }),
        g = e.symbol,
        h = d(a.expressionType, g),
        i = "reverseOrComplement" === a.expressionArea.manipulationName;
      e.symbol = e.symbol.clone();
      try {
        var j = b.target.id,
          k = i ? {
            variableName: j
          } : {};
        c.runManipulation(a.expressionArea.manipulationName, h, f, k)
      } catch (l) {
        var m = l.getMessage(a.expressionType);
        return a.expressionArea.addError(m), a.render(), void a.lawsAreaController.render()
      }
      a.expressionArea.addSymbol(h.root), a.cancel(), a.checkIfLastExpressionIsExpectedAnswer()
    }), this.$dom.find("button.show-me-how").click(function () {
      return a.showTermSelectionExample()
    }), this.$dom.find("button.ok").click(function () {
      return a.cancel()
    }), this.$dom.find("button.undo").click(function () {
      a.expressionArea.expressionContainers.pop(), a.cancel(), a.render()
    });
    var f = this.$dom.find("div.expression:not(.disabled) span");
    f.click(function (b) {
      var c = f.index(b.target),
        d = a.expressionArea.getLastExpressionContainer(),
        e = d.parts[c].symbol,
        g = a.expressionArea.getCurrentInstruction(),
        h = [e];
      e = a._getPrecedingNotOperators(e), h.unshift(e), g.term.isOperator() && (e = a._getAncestorWithSimilarStructure(e, g.term), h.unshift(e));
      for (var i = 0; i < h.length; ++i) {
        var j = a._tryToClickSymbol(h[i]);
        if (j) break
      }
      a.render(), a.lawsAreaController.render()
    })
  }, e.prototype._tryToClickSymbol = function (a) {
    var b = !1,
      c = this.expressionArea.getCurrentInstruction(),
      d = this.expressionArea.instructions.indexOf(c),
      e = this.makeColorMark(d),
      f = this.expressionArea.getLastExpressionContainer();
    if (a.hasMark(e)) {
      b = !0;
      var g = f.symbol.findAncestors(a),
        h = g.filter(function (a) {
          return a.hasMark(e)
        }),
        i = 1 === h.length;
      i ? a.removeMarkRecursive(e) : (h[0].removeMark(e), h[1].removeMarkRecursive(e));
      var j = null === f.symbol.findRootOfMark(e);
      j && (f.applyButton.isShown = f.nextButton.isShown = !1)
    } else if (a.isUnmarked()) {
      var k = a,
        l = f.symbol.findRootOfMark(e);
      if (l && (k = f.symbol.findCommonAncestor(l, k)), k.descendantHasSpecificMarkOrIsUnmarked(e)) {
        b = !0, k.addMarkRecursive(e);
        var m = this.expressionArea.getTermsInstructions().pop(),
          n = c === m;
        n ? (f.applyButton.isShown = !0, f.applyButton.isDisabled = !1) : f.nextButton.isShown = !0
      }
    }
    return b
  }, e.prototype.setInitialSymbolicExpression = function (a) {
    this.symbol = a, this.expressionArea && this.expressionArea.removeAllMarks(), this.expressionArea = new d(this.infoButtonLink, this.expressionType), this.render()
  }, e.prototype.promptLawSelection = function () {
    this.expressionArea.promptLawSelection(), this.render()
  }, e.prototype.start = function () {
    this.expressionArea.addSymbol(this.symbol), this.promptLawSelection()
  }, e.prototype.setManipulationTerms = function (a, b, c) {
    this.expressionArea.addManipulationTerms(a, b, c).enableLastExpression().loadNextInstruction().showCancelButton().hideUndoButtons(), this.render()
  }, e.prototype.disable = function () {
    this.expressionArea.removeAllMarks().clearInstructions().addFeedbackInstruction().disableExpressionContainers().hideCancelButton().hideUndoButtons().removeError(), this.render()
  }, e.prototype.makeColorMark = function (a) {
    return "color-" + a
  }, e.prototype.cancel = function () {
    this.expressionArea.removeAllMarks().promptLawSelection().disableExpressionContainers().hideCancelButton().removeError(), this.render(), this.lawsAreaController.enable()
  }, e.prototype._getAncestorWithSimilarStructure = function (a, b) {
    var c = this.expressionArea.getLastExpressionContainer().symbol.findAncestors(a),
      d = c.reverse(),
      e = a,
      f = 0,
      g = this;
    return b.findOperatorPaths().forEach(function (a) {
      var b = a.reverse(),
        c = g._findFirstStructureMatch(d, b);
      Boolean(c) && b.length > f && (e = c, f = b.length)
    }), e
  }, e.prototype._findFirstStructureMatch = function (a, b) {
    var c = a.filter(function (c, d) {
      return d <= a.length - b.length
    }),
      d = c.map(function (c, d) {
        var e = b.every(function (b, c) {
          var e = a[d + c];
          return e.name === b.name
        }),
          f = a[d + b.length - 1];
        return e ? f : null
      }),
      e = d.filter(function (a) {
        return Boolean(a)
      });
    return e[0]
  }, e.prototype._getPrecedingNotOperators = function (a) {
    for (var b = this.expressionArea.getLastExpressionContainer().symbol.findAncestors(a), c = b.reverse(), d = 1; d < c.length && "NOT" === c[d].name;) d++;
    return c[d - 1]
  }, h.prototype = new g, h.prototype.constructor = h, i.prototype = new g, i.prototype.constructor = i, j.prototype.setArrowURL = function (a) {
    this.useArrow = !0, this.arrowURL = a
  }, j.prototype.removeArrow = function () {
    this.useArrow = !1, this.arrowURL = ""
  }, l.prototype.make = function (a, b) {
    var c = "_make" + require("utilities").initialCapitalize(a),
      d = null;
    if (!(c in this)) throw new Error("Undefined type of law requested: " + a);
    var e = !0,
      f = !0,
      g = Boolean(b);
    return g && (e = "makeLeftSideButton" in b ? b.makeLeftSideButton : e, f = "makeRightSideButton" in b ? b.makeRightSideButton : f), d = this[c]({
      makeLeftSideButton: e,
      makeRightSideButton: f
    })
  }, l.prototype._makeReverseAndDistribution = function (a) {
    var b = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [this.sdk.makeSymbol("variable", "a"), this.sdk.makeSymbol("variable", "b")]),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [this.sdk.makeSymbol("variable", "a"), this.sdk.makeSymbol("variable", "c")]),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [b, c]),
      e = this.sdk.makeSymbol("variable", "a"),
      f = this.sdk.makeSymbol("variable", "b"),
      g = this.sdk.makeSymbol("variable", "c"),
      h = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [e, this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [f, g])]);
    return new j(new m(d, a.makeLeftSideButton, [b, c], "reverseAndDistribution"), new m(h, a.makeRightSideButton, [e, f, g], "andDistribution"))
  }, l.prototype._makeReverseOrDistribution = function (a) {
    var b = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [this.sdk.makeSymbol("variable", "a"), this.sdk.makeSymbol("variable", "b")]),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [this.sdk.makeSymbol("variable", "a"), this.sdk.makeSymbol("variable", "c")]),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [b, c]),
      e = this.sdk.makeSymbol("variable", "a"),
      f = this.sdk.makeSymbol("variable", "b"),
      g = this.sdk.makeSymbol("variable", "c"),
      h = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [e, this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [f, g])]);
    return new j(new m(d, a.makeLeftSideButton, [b, c], "reverseOrDistribution"), new m(h, a.makeRightSideButton, [e, f, g], "orDistribution"))
  }, l.prototype._makeCommutativeOr = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "b"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [a, b]),
      d = this.sdk.makeSymbol("variable", "a"),
      e = this.sdk.makeSymbol("variable", "b"),
      f = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [e, d]);
    return new j(new m(c, !0, [a, b], "commutativeOr"), new m(f, !1))
  }, l.prototype._makeCommutativeAnd = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "b"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [a, b]),
      d = this.sdk.makeSymbol("variable", "a"),
      e = this.sdk.makeSymbol("variable", "b"),
      f = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [e, d]);
    return new j(new m(c, !0, [a, b], "commutativeAnd"), new m(f, !1))
  }, l.prototype._makeComplementOr = function (a) {
    var b = this.sdk.makeSymbol("variable", "a"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "a")]),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [b, c]),
      e = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.TRUE);
    return new j(new m(d, !0, [b, c], "complementOr"), new m(e, a.makeRightSideButton, [e], "reverseOrComplement"))
  }, l.prototype._makeComplementAnd = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "a")]),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [a, b]),
      d = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.FALSE);
    return new j(new m(c, !0, [a, b], "complementAnd"), new m(d, !1))
  }, l.prototype._makeComplementTrue = function () {
    var a = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.TRUE)]),
      b = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.FALSE);
    return new j(new m(a, !0, [a], "complementTrue"), new m(b, !1))
  }, l.prototype._makeComplementFalse = function () {
    var a = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.FALSE)]),
      b = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.TRUE);
    return new j(new m(a, !0, [a], "complementFalse"), new m(b, !1))
  }, l.prototype._makeIdentityAndTrue = function (a) {
    var b = this.sdk.makeSymbol("variable", "a"),
      c = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.TRUE),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [b, c]),
      e = this.sdk.makeSymbol("variable", "a");
    return new j(new m(d, !0, [b, c], "identityAndTrue"), new m(e, a.makeRightSideButton, [e], "reverseIdentityAndTrue"))
  }, l.prototype._makeIdentityOrFalse = function (a) {
    var b = this.sdk.makeSymbol("variable", "a"),
      c = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.FALSE),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [b, c]),
      e = this.sdk.makeSymbol("variable", "a");
    return new j(new m(d, !0, [b, c], "identityOrFalse"), new m(e, a.makeRightSideButton, [e], "reverseIdentityOrFalse"))
  }, l.prototype._makeOrNullElements = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.TRUE),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [a, b]);
    return new j(new m(c, !0, [a, b], "orNullElements"), new m(b.clone(), !1))
  }, l.prototype._makeAndNullElements = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("constant", this.sdk.CONSTANT_SYMBOLS.FALSE),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [a, b]);
    return new j(new m(c, !0, [a, b], "andNullElements"), new m(b.clone(), !1))
  }, l.prototype._makeOrIdempotence = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "a"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [a, b]);
    return new j(new m(c, !0, [a, b], "orIdempotence"), new m(a.clone(), !1))
  }, l.prototype._makeAndIdempotence = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "a"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [a, b]);
    return new j(new m(c, !0, [a, b], "andIdempotence"), new m(a.clone(), !1))
  }, l.prototype._makeDoubleNegation = function () {
    var a = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "a")])]),
      b = this.sdk.makeSymbol("variable", "a");
    return new j(new m(a, !0, [a], "doubleNegation"), new m(b, !1))
  }, l.prototype._makeConditional = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "b"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.CONDITIONAL, [a, b]),
      d = this.sdk.makeSymbol("variable", "b"),
      e = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "a")]),
      f = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [e, d]);
    return new j(new m(c, !0, [a, b], "conditional"), new m(f, !0, [e, d], "reverseConditional"))
  }, l.prototype._makeBiconditional = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "b"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.BICONDITIONAL, [a, b]),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.CONDITIONAL, [a.clone(), b.clone()]),
      e = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.CONDITIONAL, [b.clone(), a.clone()]),
      f = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [d, e]);
    return new j(new m(c, !0, [a, b], "biconditional"), new m(f, !0, [d, e], "reverseBiconditional"))
  }, l.prototype._makeDeMorganAnd = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "b"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [a, b])]),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "a")]), this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "b")])]);
    return new j(new m(c, !0, [a, b], "deMorganAnd"), new m(d, !1))
  }, l.prototype._makeDeMorganOr = function () {
    var a = this.sdk.makeSymbol("variable", "a"),
      b = this.sdk.makeSymbol("variable", "b"),
      c = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.OR, [a, b])]),
      d = this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.AND, [this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "a")]), this.sdk.makeSymbol("operator", this.sdk.OPERATOR_SYMBOLS.NOT, [this.sdk.makeSymbol("variable", "b")])]);
    return new j(new m(c, !0, [a, b], "deMorganOr"), new m(d, !1))
  }, n.prototype.addDirectionForSelectedNthLawSideButton = function (a) {
    var b = this.findNthLawSideButton(a),
      c = this.findParentOfLawSide(b),
      d = c.leftSide === b ? this.rightArrowURL : this.leftArrowURL;
    c.setArrowURL(d)
  }, n.prototype.findParentOfLawSide = function (a) {
    return this.getLaws().filter(function (b) {
      return b.leftSide === a || b.rightSide === a
    })[0]
  }, n.prototype.findNthLawSideButton = function (a) {
    return this.getLawSides().filter(function (a) {
      return a.isButton
    }).filter(function (b, c) {
      return c === a
    })[0]
  }, n.prototype.getLawSides = function () {
    var a = [];
    return this.getLaws().forEach(function (b) {
      a.push(b.leftSide), a.push(b.rightSide)
    }), a
  }, n.prototype.getLaws = function () {
    var a = [];
    return this.lawPanels.forEach(function (b) {
      b.forEach(function (b) {
        a = a.concat(b.laws)
      })
    }), a
  }, o.prototype.render = function () {
    this.$dom.empty();
    var a = this.templates.expressionParts,
      c = require("PropositionalCalculusSDK").create(),
      d = this;
    this.lawsArea.getLawSides().forEach(function (b) {
      b.html = a({
        parts: c.makeExpression(d.expressionType, b.symbol).toParts()
      })
    }), this.$dom.html(this.templates.lawsArea({
      lawsArea: this.lawsArea
    }));
    var e = this.$dom.find("button");
    e.click(function () {
      var a = e.index(this),
        b = d.lawsArea.findNthLawSideButton(a);
      d.setManipulationTerms(b.terms, b.symbol, b.manipulation), d.lawsArea.addDirectionForSelectedNthLawSideButton(a), d.disable()
    }), this.$dom.find(".law-panel").each(function (a, c) {
      var d = $(c).find(".law-container").toArray().map(function (a) {
        return $(a)
      }),
        e = d.map(function (a) {
          return a.find(".law-proposition").eq(0)
        }),
        f = d.map(function (a) {
          return a.find(".law-proposition").eq(1)
        }),
        g = 5,
        h = Math.max.apply(Math, b(e.map(function (a) {
          return a.width()
        }))) + g,
        i = Math.max.apply(Math, b(f.map(function (a) {
          return a.width()
        }))) + g;
      e.forEach(function (a) {
        return a.width(h)
      }), f.forEach(function (a) {
        return a.width(i)
      })
    })
  }, o.prototype.enable = function () {
    this.lawsArea.isDisabled = !1, this.removeArrows(), this.render()
  }, o.prototype.disable = function () {
    this.lawsArea.isDisabled = !0, this.render()
  }, o.prototype.removeArrows = function () {
    this.lawsArea.getLaws().forEach(function (a) {
      a.removeArrow()
    })
  }, D.exports = {
    create: function () {
      return new q
    },
    dependencies: {
      tools: ["utilities", "progressionTool", "PropositionalCalculusSDK"]
    },
    runTests: function () { }
  }, t.prototype.make = function () {
    throw new Error("QuestionFactory's make function should not be called.")
  }, t.prototype._makeNVariables = function (a) {
    var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
      c = require("PropositionalCalculusSDK").create(),
      d = b ? ["w", "x", "y", "z"] : ["m", "n", "p", "q", "s", "w"];
    return require("utilities").pickNElementsFromArray(d, a).map(function (a) {
      return c.makeSymbol("variable", a)
    })
  }, u.prototype = new t, u.prototype.constructor = u, u.prototype.make = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = require("utilities"),
      d = !0,
      e = 3,
      f = null,
      g = null,
      h = this._makeNVariables(e, d);
    switch (h.sort(function (a, b) {
      return a.name < b.name ? -1 : b.name < a.name ? 1 : 0
    }), a) {
      case 0:
      case 1:
        var i = c.flipCoin() ? h[0] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[0]]),
          j = c.flipCoin() ? h[1] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[1]]),
          k = h[2],
          l = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [k.clone()]),
          m = [i, j, k],
          n = [i, j, l],
          o = [],
          p = [];
        m.forEach(function (a, c) {
          return m.forEach(function (d, e) {
            return m.forEach(function (f, g) {
              c !== e && c !== g && e !== g && o.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [a, d]), f]))
            })
          })
        }), n.forEach(function (a, c) {
          return n.forEach(function (d, e) {
            return n.forEach(function (f, g) {
              c !== e && c !== g && e !== g && p.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [a, d]), f]))
            })
          })
        }), f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [i, j]), g = [], o.forEach(function (a) {
          return p.forEach(function (c) {
            g.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [a, c])), g.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [c, a]))
          })
        });
        break;
      case 2:
        var q = h[0],
          r = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [q.clone()]),
          t = [q, r],
          u = h[1],
          v = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [u.clone()]),
          w = h[2],
          x = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [w.clone()]);
        c.shuffleArray(t);
        var y = [],
          z = [];
        y.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [t[0].clone(), u.clone()])), y.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [u.clone(), t[0].clone()])), z.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [t[1].clone(), v.clone()])), z.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [v.clone(), t[1].clone()])), f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [y[0], z[0]]);
        var A = [],
          B = [],
          C = [],
          D = [];
        y.forEach(function (a) {
          A.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [a.clone(), w.clone()])), A.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [w.clone(), a.clone()])), B.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [a.clone(), x.clone()])), B.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [x.clone(), a.clone()]))
        }), z.forEach(function (a) {
          C.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [a.clone(), w.clone()])), C.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [w.clone(), a.clone()])), D.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [a.clone(), x.clone()])), D.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [x.clone(), a.clone()]))
        }), g = [], A.forEach(function (a) {
          return B.forEach(function (c) {
            return C.forEach(function (d) {
              return D.forEach(function (e) {
                var f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [a, c]),
                  h = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [d, e]);
                g.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [f, h])), g.push(b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [h, f]))
              })
            })
          })
        });
        break;
      default:
        throw new Error("Level not supported: " + a)
    }
    return new s(f, g)
  }, v.prototype = new t, v.prototype.constructor = v, v.prototype.make = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = !0,
      d = 2,
      e = null,
      f = null,
      g = this._makeNVariables(d, c);
    switch (a) {
      case 0:
        var h = g[0],
          i = g[1],
          j = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [i.clone()]),
          k = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [i, j]);
        e = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [h, k]), f = h.clone();
        break;
      case 1:
        var l = g[0],
          m = g[1],
          n = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [l, m]),
          o = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [m.clone()]),
          p = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [l.clone(), o]);
        e = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [n, p]), f = l.clone();
        break;
      default:
        throw new Error("Level not supported: " + a)
    }
    return new s(e, [f])
  }, w.prototype = new t, w.prototype.constructor = w, w.prototype.make = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = require("utilities"),
      d = !0,
      e = 3,
      f = null,
      g = null,
      h = this._makeNVariables(e, d);
    switch (a) {
      case 0:
        var i = c.flipCoin() ? h[0] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[0]]),
          j = h[1],
          k = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [j.clone()]),
          l = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [i, j]),
          m = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [i.clone(), k]),
          n = [l, m];
        c.shuffleArray(n), f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, n), g = [i.clone()];
        break;
      case 1:
        if (c.flipCoin()) {
          var o = c.flipCoin() ? h[0] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[0]]),
            p = c.flipCoin() ? h[1] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[1]]),
            q = h[2],
            r = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [q.clone()]),
            t = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [o.clone(), q]),
            u = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [o.clone(), r]),
            v = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [o.clone(), p]),
            w = [t, u];
          c.shuffleArray(w), f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, w), v]), g = [o.clone()]
        } else {
          var x = c.flipCoin() ? h[0] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[0]]),
            y = c.flipCoin() ? h[1] : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [h[1]]),
            z = h[2],
            A = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [z.clone()]),
            B = [z, A];
          c.shuffleArray(B);
          var C = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [x.clone(), B[0].clone()]),
            D = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [x.clone(), B[1].clone()]),
            E = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [y.clone(), B[1].clone()]),
            F = [C.clone(), D.clone()];
          c.shuffleArray(F), f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, F), E.clone()]), g = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [x.clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [B[1].clone(), y.clone()])]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [x.clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [y.clone(), B[1].clone()])])]
        }
        break;
      case 2:
        var G = h[0],
          H = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [G.clone()]),
          I = [G, H],
          J = h[1],
          K = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [J.clone()]),
          L = [J, K],
          M = h[2],
          N = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [M.clone()]),
          O = [M, N];
        c.shuffleArray(I), c.shuffleArray(L), c.shuffleArray(O);
        var P = c.flipCoin(),
          Q = !P,
          R = I[0].clone(),
          S = L[0].clone(),
          T = P ? R.clone() : I[1].clone(),
          U = Q ? S.clone() : L[1].clone(),
          V = P ? [R, S] : [S, R],
          W = P ? [T, U] : [U, T],
          X = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, V),
          Y = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, W),
          Z = [X, Y];
        c.shuffleArray(Z);
        var $ = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, Z);
        c.shuffleArray(I);
        var _ = c.flipCoin(),
          aa = !_,
          ba = I[0].clone(),
          ca = O[0].clone(),
          da = _ ? ba.clone() : I[1].clone(),
          ea = aa ? ca.clone() : O[1].clone(),
          fa = _ ? [ba, ca] : [ca, ba],
          ga = _ ? [da, ea] : [ea, da],
          ha = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, fa),
          ia = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, ga),
          ja = [ha, ia];
        c.shuffleArray(ja);
        var ka = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, ja),
          la = [$, ka];
        if (c.shuffleArray(la), f = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, la), P && _) {
          var ma = b.makeSymbol("constant", b.CONSTANT_SYMBOLS.TRUE);
          g = R.deepEquals(ba) ? [R.clone()] : [ma]
        } else if (P && !_) g = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [R.clone(), ca.clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [ca.clone(), R.clone()])];
        else if (!P && _) g = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [S.clone(), ba.clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [ba.clone(), S.clone()])];
        else {
          if (P || _) throw new Error("Error building level: " + a);
          g = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [S.clone(), ca.clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [ca.clone(), S.clone()])]
        }
        break;
      default:
        throw new Error("Level not supported: " + a)
    }
    return new s(f, g)
  }, x.prototype = new t, x.prototype.constructor = x, x.prototype.make = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = require("utilities"),
      d = null,
      e = null,
      f = null;
    switch (a) {
      case 0:
        var g = this._makeNVariables(1)[0],
          h = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [g.clone()])]);
        d = this._randomIdentityLawWithSymbol(h), e = g.clone();
        break;
      case 1:
        f = this._makeNVariables(2);
        var i = [f[1].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[1].clone()])];
        c.shuffleArray(i), d = c.flipCoin() ? b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [f[0].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, i)]) : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [f[0].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, i)]), e = f[0].clone();
        break;
      case 2:
        f = this._makeNVariables(2);
        var j = [f[0].clone(), f[1].clone()],
          k = [f[0].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[1].clone()])];
        c.shuffleArray(k), d = c.flipCoin() ? b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, j), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, k)]) : b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, j), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, k)]), e = f[0].clone();
        break;
      default:
        throw new Error("Level not supported: " + a)
    }
    return new s(d, [e])
  }, x.prototype._randomIdentityLawWithSymbol = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = require("utilities"),
      d = null,
      e = [a];
    return c.flipCoin() ? (e.push(b.makeSymbol("constant", b.CONSTANT_SYMBOLS.TRUE)), d = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, e)) : (e.push(b.makeSymbol("constant", b.CONSTANT_SYMBOLS.FALSE)), d = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, e)), d
  }, y.prototype = new t, y.prototype.constructor = y, y.prototype.make = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = require("utilities"),
      d = null,
      e = null,
      f = this._makeNVariables(2);
    switch (a) {
      case 0:
        var g = [b.OPERATOR_SYMBOLS.OR, b.OPERATOR_SYMBOLS.AND];
        c.shuffleArray(g), d = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", g[0], [f[0].clone(), b.makeSymbol("operator", g[1], [f[1].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[0].clone()])])])]), e = [b.makeSymbol("operator", g[1], [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[0].clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[1].clone()])]), b.makeSymbol("operator", g[1], [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[1].clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[0].clone()])])];
        break;
      case 1:
        var h = [f[0], b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[0]])];
        c.shuffleArray(h), d = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.CONDITIONAL, [h[0].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[1].clone()]), h[0].clone()])])]), e = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [h[0].clone(), f[1].clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [f[1].clone(), h[0].clone()])];
        break;
      default:
        throw new Error("Level not supported: " + a)
    }
    return new s(d, e)
  }, z.prototype = new t, z.prototype.constructor = z, z.prototype.make = function (a) {
    var b = require("PropositionalCalculusSDK").create(),
      c = require("utilities"),
      d = null,
      e = null,
      f = this._makeNVariables(2),
      g = [f[0], b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[0]])];
    switch (c.shuffleArray(g), a) {
      case 0:
        var h = [b.OPERATOR_SYMBOLS.OR, b.OPERATOR_SYMBOLS.AND];
        c.shuffleArray(h), d = b.makeSymbol("operator", h[0], [b.makeSymbol("operator", h[1], [g[1].clone(), f[1].clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", h[0], [g[0].clone(), f[1].clone()])])]), e = [g[1].clone()];
        break;
      case 1:
        var i = f[0],
          j = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [i.clone()])]), i.clone()];
        c.shuffleArray(j), d = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.CONDITIONAL, j)]), e = [b.makeSymbol("constant", b.CONSTANT_SYMBOLS.FALSE)];
        break;
      case 2:
        var k = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, [f[0].clone(), b.makeSymbol("constant", b.CONSTANT_SYMBOLS.TRUE)]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.OR, [f[0].clone(), b.makeSymbol("constant", b.CONSTANT_SYMBOLS.FALSE)])];
        c.shuffleArray(k);
        var l = [
          [f[1].clone(), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[0].clone()])])],
          [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.NOT, [f[1].clone()])]), f[0].clone()]
        ];
        c.shuffleArray(l);
        var m = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.CONDITIONAL, [k[0], f[1].clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.CONDITIONAL, l[0])];
        c.shuffleArray(m), d = b.makeSymbol("operator", b.OPERATOR_SYMBOLS.AND, m), e = [b.makeSymbol("operator", b.OPERATOR_SYMBOLS.BICONDITIONAL, [f[0].clone(), f[1].clone()]), b.makeSymbol("operator", b.OPERATOR_SYMBOLS.BICONDITIONAL, [f[1].clone(), f[0].clone()])];
        break;
      default:
        throw new Error("Level not supported: " + a)
    }
    return new s(d, e)
  }, A.prototype.addNumbering = function (a) {
    return this.numbering = a, this
  }, B.prototype._buildHTML = function () {
    var a = require("PropositionalCalculusSDK").create(),
      b = a.makeSymbol("variable", "a"),
      c = a.makeSymbol("constant", a.CONSTANT_SYMBOLS.FALSE),
      d = a.makeSymbol("operator", a.OPERATOR_SYMBOLS.OR, [b, c]);
    b.addMarkRecursive("color-1");
    var e = a.makeSymbol("variable", "s"),
      f = a.makeSymbol("constant", a.CONSTANT_SYMBOLS.FALSE),
      g = a.makeSymbol("operator", a.OPERATOR_SYMBOLS.OR, [e, f]);
    e.addMark("color-1"), e.addMark("underline");
    var h = new A(this._toPartsHTML(b), this._toPartsHTML(d), this._toPartsHTML(g));
    e.removeMark("underline"), c.addMark("color-2"), f.addMark("color-2"), f.addMark("underline");
    var i = new A(this._toPartsHTML(c), this._toPartsHTML(d), this._toPartsHTML(g));
    h.addNumbering(1), i.addNumbering(3);
    var j = a.makeSymbol("variable", "w"),
      k = a.makeSymbol("operator", a.OPERATOR_SYMBOLS.NOT, [j]),
      l = a.makeSymbol("variable", "m"),
      m = a.makeSymbol("operator", a.OPERATOR_SYMBOLS.OR, [k, l]),
      n = a.makeSymbol("constant", a.CONSTANT_SYMBOLS.FALSE),
      o = a.makeSymbol("operator", a.OPERATOR_SYMBOLS.OR, [m, n]);
    return o.addMarkRecursive("color-1"), o.addMarkRecursive("underline"), this._templates.termSelectionExample({
      aVariable: this._toPartsHTML(b),
      firstStep: this._templates.termSelectionExampleStep({
        step: h
      }),
      notWOrMOrFalse: this._toPartsHTML(o),
      thirdStep: this._templates.termSelectionExampleStep({
        step: i
      }),
      expressionType: this._expressionType
    })
  }, B.prototype._toPartsHTML = function (a) {
    return this._templates.expressionParts({
      parts: require("PropositionalCalculusSDK").create().makeExpression(this._expressionType, a).toParts()
    })
  }, B.prototype.show = function () {
    this._parentResource.alert("Example of selecting terms", this._html)
  }, a["default"] = D.exports
});