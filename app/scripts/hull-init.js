Hull.init({
  appId : "512782505cc0175d22000009",
  orgUrl: "http://develop.hullapp.dev",
  debug : true // optional
}, function() {
  Hull.on('hull.instant_win.*.template.render', function() {
    var el = $('.hull-instant--wokrking')[0];
    var spinner = Spinner({
      lines: 13,
      length: 5,
      width: 2,
      radius: 15,
      color: '#fff',
      speed: 1.5,
      opacity: .25
    }).spin(el);
  })
});
