this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["instant_win/intro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"hull-instant hull-instant--intro\">\n  <h1 class=\"hull-instant__title\">Hull Instant Invit</h1>\n  <div class=\"hull-instant__description\">\n    <p>hull is a full stack social platform as a service. It makes it easy for developers to build social apps with open and reusable components.</p>\n    <p>If you want an invite without waiting, play to win an immediate access to the platform.</p>\n  </div>\n  ";
  stack1 = self.invokePartial(partials['instant_win/buttons'], 'instant_win/buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["Hull"]["templates"]["instant_win/won"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"hull-instant hull-instant--won\">\n  <div class=\"hull-instant-result\">\n    <h1 class=\"hull-instant-result__title\">You won!</h1>\n\n    <div class=\"hull-instant-result__description\">\n      <p>Congratulations! Now that you're in, go create your account qnd start using Hull.</p>\n      <p>Before diving in, why don't you have a look at our <a href=\"http://hull.io/docs/demos/\">demo application</a>.</p>\n      <a class=\"hull-btn\" href=\"http://alpha.hullapp.io/accounts/registrations?token="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.badge),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.signature)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Create my account</a>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });

this["Hull"]["templates"]["instant_win/working"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"hull-instant hull-instant--wokrking\">\n</div>\n";
  });