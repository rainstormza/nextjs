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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

var PostLink = function PostLink(_ref) {
  var show = _ref.show;
  return console.log(show) || _react2.default.createElement('li', { key: show.id, 'data-jsx': 1528442980
  }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id }, _react2.default.createElement('a', {
    'data-jsx': 1528442980
  }, show.name)), _react2.default.createElement(_style2.default, {
    styleId: 1528442980,
    css: 'li[data-jsx="1528442980"]{list-style:none;margin:5px 0}a[data-jsx="1528442980"]{text-decoration:none;color:blue;font-family:"Arial"}a[data-jsx="1528442980"]:hover{opacity:0.6}'
  }));
};

var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', {
    'data-jsx': 1428431702
  }, _react2.default.createElement('p', {
    'data-jsx': 1428431702
  }, 'Hello Next.js')), _react2.default.createElement('h1', {
    'data-jsx': 1428431702
  }, 'Batman TV Shows'), _react2.default.createElement('ul', {
    'data-jsx': 1428431702
  }, props.shows.map(function (_ref2) {
    var show = _ref2.show;
    return _react2.default.createElement(PostLink, { key: show.id, show: show });
  })), _react2.default.createElement(_style2.default, {
    styleId: 1428431702,
    css: 'h1[data-jsx="1428431702"],a[data-jsx="1428431702"]{font-family:"Arial"}ul[data-jsx="1428431702"]{padding:0}'
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;