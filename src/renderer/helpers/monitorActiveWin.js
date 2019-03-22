const monitor = require('active-window');

function monitorActiveWin() {
  let ls = null;
  return {
    start: function(callback, repeat, interval) {
      if (ls != null) {
        ls.kill();
      }

      ls = monitor.getActiveWindow(callback, repeat, interval);
    },
    stop: function() {
      if (ls != null) {
        ls.kill();
      }
    }
  }
}

module.exports = monitorActiveWin();
