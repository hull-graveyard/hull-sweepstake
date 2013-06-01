this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["sweepstake/buttons"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n  <button class=\"hull-btn\" data-hull-action=\"play\">Play</button>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, depth0.authProviders, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <button class=\"hull-btn\" data-hull-action=\"play\"\n      data-hull-provider="
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ">Play with ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.capitalize),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "capitalize", depth0, options)))
    + "</button>\n  ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  };

this["Hull"]["templates"]["sweepstake/intro"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"hull-sweepstake hull-sweepstake--intro\">\n  <h1 class=\"hull-sweepstake__title\">Hull Instant Invite</h1>\n  <div class=\"hull-sweepstake__description\">\n    <p>hull is a full stack social platform as a service. It lets you develop social apps in a weekend and is currently in private beta..</p>\n    <p>If you want an invite without waiting, play to win an immediate access to the platform.</p>\n  </div>\n  ";
  stack1 = self.invokePartial(partials['sweepstake/buttons'], 'sweepstake/buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["sweepstake/lost"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"hull-sweepstake hull-sweepstake--lost\">\n  <div class=\"hull-sweepstake-result\">\n    <h1 class=\"hull-sweepstake-result__title\">You Lose...</h1>\n    <p class=\"hull-sweepstake-result__description\">Come back tomorrow!</p>\n  </div>\n</div>\n";
  };

this["Hull"]["templates"]["sweepstake/played"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"hull-sweepstake hull-sweepstake--played\">\n  <div class=\"hull-sweepstake-result\">\n    <h1 class=\"hull-sweepstake-result__title\">You've already played today!</h1>\n    <p class=\"hull-sweepstake-result__description\">Come back tomorrow!</p>\n  </div>\n</div>\n";
  };

this["Hull"]["templates"]["sweepstake/won"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"hull-sweepstake hull-sweepstake--won\">\n  <div class=\"hull-sweepstake-result\">\n    <h1 class=\"hull-sweepstake-result__title\">You won!</h1>\n\n    <div class=\"hull-sweepstake-result__description\">\n      <p>Congratulations! Click below to activate your invite. It's a personal code.</p>\n      <a class=\"hull-btn\" href=\"http://accounts.alpha.hullapp.io/accounts/sign_up?token="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.badge),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.signature)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Activate my account</a>\n      <p>After signing in, why don't you have a look at some other <a href=\"http://hull.io/gallery/\">cool examples</a>?</p>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["sweepstake/working"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"hull-sweepstake hull-sweepstake--working\">\n</div>\n";
  };