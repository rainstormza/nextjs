'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Content = (props) => (
//   <div>
//     <h1>{props.url.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// )

// export default (props) => (
//     <Layout>
//        <Content url={props.url} />
//     </Layout>
// )

var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 693739417
  }, props.show.name), _react2.default.createElement('p', {
    'data-jsx': 693739417
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, 'data-jsx': 693739417
  }), _react2.default.createElement('br', {
    'data-jsx': 693739417
  }), _react2.default.createElement('div', { className: 'markdown', 'data-jsx': 693739417
  }, _react2.default.createElement(_reactMarkdown2.default, { source: '\n  This is our blog post.\n  Yes. We can have a [link](/link).\n  And we can have a title as well.\n\n  ### This is a title\n\n  And here\'s the content.\n      ' })), _react2.default.createElement(_style2.default, {
    styleId: 693739417,
    css: '.markdown{font-family:\'Arial\'}.markdown a{text-decoration:none;color:blue}.markdown a:hover{opacity:0.6}.markdown h3{margin:0;padding:0;text-transform:uppercase}'
  }));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;