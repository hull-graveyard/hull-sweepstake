Hull.init({
  appId : '512382f9e85f4250c4000015',
  orgUrl: 'http://hull-demos.hullapp.io',
  debug:true,
  verbose:true
}, function() {
  Hull.on('hull.sweepstake.*.template.render', function() {
    var el = $('.hull-sweepstake-working')[0];
    var spinner = Spinner({
      lines: 13,
      length: 5,
      width: 3,
      radius: 15,
      color: '#7c8a9e',
      speed: 1.5,
      opacity: 0.25
    }).spin(el);
  });
});
