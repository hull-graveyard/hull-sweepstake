this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["instant_win_admin/instant_admin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\""
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"hull-instant-admin\">\n  <h1>Instant Win Admin</h1>\n\n  <div class=\"hull-instant-admin__section\">\n    <h2 class=\"hull-instant-admin__section-title\">Create an Instant Win</h2>\n\n    <div>\n      <label for=\"hull-instant-name\">Name: </label>\n      <input id=\"hull-instant-name\" name=\"hull-instant-name\" type=\"text\">\n    </div>\n\n    <div>\n      <label for=\"hull-instant-description\">Description: </label>\n      <input id=\"hull-instant-description\" name=\"hull-instant-description\" type=\"text\">\n    </div>\n\n    <button data-hull-action=\"create\">Create</button>\n  </div>\n\n  <div class=\"hull-instant-admin__section\">\n    <h2 class=\"hull-instant-admin__section-title\">Update Achievement</h2>\n\n    <div>\n      <label for=\"hull-achievement-id\">Select an Instant Win to Edit: </label>\n      <select id=\"hull-achievement-id\" name=\"hull-achievement-id\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.achievements, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    </div>\n  </div>\n\n  <div class=\"hull-instant-admin__section\">\n    <div>\n      <label for=\"hull-instant-update-name\">Name: </label>\n      <input id=\"hull-instant-update-name\" name=\"hull-instant-update-name\" type=\"text\">\n    </div>\n\n    <div>\n      <label for=\"hull-instant-update-description\">Description: </label>\n      <input id=\"hull-instant-update-description\" name=\"hull-instant-update-description\" type=\"text\">\n    </div>\n\n    <button data-hull-action=\"updateAchievement\">Update Achievement</button>\n  </div>\n\n  <div class=\"hull-instant-admin__section\">\n    <div>\n      <label for=\"hull-prizes-json\">Prizes JSON: </label>\n      <textarea id=\"hull-prizes-json\" name=\"hull-prizes-json\" rows=\"20\" cols=\"30\"></textarea>\n    </div>\n\n    <button data-hull-action=\"updatePrizes\">Update Prize</button>\n  </div>\n</div>\n";
  return buffer;
  });