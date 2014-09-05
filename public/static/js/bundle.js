(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var DB;

  DB = (function() {
    function DB() {}

    DB.prototype.setData = function(data) {
      var fn, _i, _len, _ref, _results;
      this.data = data;
      if (this.todo != null) {
        _ref = this.todo;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          fn = _ref[_i];
          _results.push(typeof fn === "function" ? fn() : void 0);
        }
        return _results;
      }
    };

    DB.prototype.ready = function(fn) {
      if (this.data != null) {
        return typeof fn === "function" ? fn() : void 0;
      } else {
        if (this.todo == null) {
          this.todo = [];
        }
        return this.todo.push(fn);
      }
    };

    DB.prototype.filter = function(fn) {
      return this.data.filter(fn);
    };

    return DB;

  })();

  module.exports = DB;

}).call(this);

},{}],2:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var DB, View, baseURL, search, view;

  DB = require('./db');

  View = require('./view');

  window.db = new DB;

  baseURL = $('[rel="kizz-base-url"]').attr('href');

  view = new View(baseURL);

  $('body').on('click', 'li.tag', function() {
    var html, posts, tag;
    tag = $(this).text();
    posts = db.filter(function(post) {
      return post.tags.indexOf(tag) > -1;
    });
    html = view.archives(posts);
    return $('#main').html(html);
  });

  search = function(keyword) {
    return db.ready(function() {
      var html, match;
      match = db.filter(function(post) {
        return JSON.stringify(post).indexOf(keyword) > -1;
      });
      if (match.length > 0) {
        html = view.archives(match);
        return $('#main').html(html);
      } else {
        return $('#main').html('<div class="error">404 - Not Found</div>');
      }
    });
  };

  $('#search').on('input', function() {
    var keyword;
    keyword = $(this).val();
    return setTimeout((function() {
      return search(keyword);
    }), 1);
  });

}).call(this);

},{"./db":1,"./view":3}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var View;

  View = (function() {
    function View(baseURL) {
      this.baseURL = baseURL;
    }

    View.prototype.archives = function(posts) {
      var html;
      html = posts.map((function(_this) {
        return function(post) {
          var link, tags;
          tags = post.tags.map(function(tag) {
            return "<li class='tag'>" + tag + "</li>";
          });
          if (post.link.indexOf('http') !== 0) {
            link = _this.baseURL + '/' + post.link;
          } else {
            link = post.link;
          }
          return "<article>\n    <h1>\n        <a href=\"" + link + "\">" + post.title + "</a>\n    </h1>\n    <div class=\"meta\">\n        <div class=\"key\">Update:</div>\n        <div class=\"value\">" + post.modificationTime + "</div>\n        <div class=\"key\">Tags:</div>\n        <div class=\"value\">\n            <ul>\n                " + (tags.join('')) + "\n            </ul>\n        </div>\n    </div>\n</article>";
        };
      })(this));
      return html.join('');
    };

    return View;

  })();

  module.exports = View;

}).call(this);

},{}]},{},[2]);
