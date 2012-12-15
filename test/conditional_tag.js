var path = require("path")
  , expect = require("expect.js")
  , fs = require("fs")

script(path.join(__dirname, "..", "lib", "end-dash.js"), { module: true })
script(path.join(__dirname, "..", "lib", "collection.js"), { module: true })
script(path.join(__dirname, "..", "lib", "parser.js"), { module: true })
script(path.join(__dirname, "..", "lib", "util.js"), { module: true })

describe("A conditional tag", function() {

  it("should not be visible when false", function () {
    var TemplateGenerator = window.require("/lib/end-dash")
      , Template = new TemplateGenerator('<div class="isSet-"></div>').generate()
      , template = new Template

    $("body").append(template.template)

    expect($(".isSet-").is(":visible")).to.be(true)

    template.set("set", false)
    expect($(".isSet-").is(":visible")).to.be(false)

    template.set("set", true)
    expect($(".isSet-").is(":visible")).to.be(true)
  })

})