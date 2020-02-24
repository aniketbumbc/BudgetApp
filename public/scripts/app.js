'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionApp = function (_React$Component) {
      _inherits(DecisionApp, _React$Component);

      function DecisionApp(props) {
            _classCallCheck(this, DecisionApp);

            var _this = _possibleConstructorReturn(this, (DecisionApp.__proto__ || Object.getPrototypeOf(DecisionApp)).call(this, props));

            _this.handleDeleteAllOpts = _this.handleDeleteAllOpts.bind(_this);
            _this.handlePicOptions = _this.handlePicOptions.bind(_this);
            _this.handleAddOptions = _this.handleAddOptions.bind(_this);
            _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
            _this.state = {
                  options: []
            };
            return _this;
      }

      _createClass(DecisionApp, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                  var json = localStorage.getItem('opt');
                  var options = JSON.parse(json);
                  if (options) {
                        this.setState(function () {
                              return {
                                    options: options
                              };
                        });
                  }
            }
      }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevState, prevProps) {

                  if (prevState.options.length != this.state.options.length) {
                        var json = JSON.stringify(this.state.options);
                        localStorage.setItem('opt', json);
                  }
            }
      }, {
            key: 'handleDeleteAllOpts',
            value: function handleDeleteAllOpts() {
                  this.setState(function () {
                        return {
                              options: []
                        };
                  });
            }
      }, {
            key: 'handlePicOptions',
            value: function handlePicOptions() {
                  var ranNumber = Math.floor(Math.random() * this.state.options.length);
                  var value = this.state.options[ranNumber];
                  alert(value);
            }
      }, {
            key: 'handleAddOptions',
            value: function handleAddOptions(opt) {

                  if (!opt) {

                        return 'Invalid value add options';
                  } else if (this.state.options.indexOf(opt) > -1) {
                        return 'Duplicate option';
                  }
                  this.setState(function (preState) {
                        return {
                              options: preState.options.concat([opt])
                        };
                  });
            }
      }, {
            key: 'handleDeleteOption',
            value: function handleDeleteOption(optToRemove) {
                  this.setState(function (preState) {
                        return {
                              options: preState.options.filter(function (opt) {
                                    return optToRemove !== opt;
                              })

                        };
                  });
            }
      }, {
            key: 'render',
            value: function render() {

                  var subTitle = 'Follow your decision!!!';
                  return React.createElement(
                        'div',
                        null,
                        React.createElement(Header, { subTitle: subTitle }),
                        React.createElement(Action, { hasOption: this.state.options.length > 0,
                              handlePicOptions: this.handlePicOptions
                        }),
                        React.createElement(Options, {
                              options: this.state.options,
                              handleDeleteAllOpts: this.handleDeleteAllOpts,
                              handleDeleteOption: this.handleDeleteOption

                        }),
                        React.createElement(Addoptions, { handleAddOptions: this.handleAddOptions })
                  );
            }
      }]);

      return DecisionApp;
}(React.Component);

DecisionApp.defaultProps = {
      options: []
};

var Header = function Header(props) {
      return React.createElement(
            'div',
            null,
            React.createElement(
                  'h1',
                  null,
                  props.title
            ),
            props.subTitle && React.createElement(
                  'h2',
                  null,
                  props.subTitle,
                  ' '
            )
      );
};

Header.defaultProps = {
      title: 'Decision App'

};

var Action = function Action(props) {
      return React.createElement(
            'div',
            null,
            React.createElement(
                  'button',
                  {
                        onClick: props.handlePicOptions,
                        disabled: !props.hasOption
                  },
                  'what should I do'
            )
      );
};

var Options = function Options(props) {

      return React.createElement(
            'div',
            null,
            React.createElement(
                  'button',
                  { onClick: props.handleDeleteAllOpts },
                  'Remove All'
            ),
            props.options.length === 0 && React.createElement(
                  'h5',
                  null,
                  ' Please add option '
            ),
            React.createElement(
                  'p',
                  null,
                  'options are here'
            ),
            props.options.map(function (e) {
                  return React.createElement(SingleOption, {
                        key: e,
                        optionText: e,
                        handleDeleteOption: props.handleDeleteOption
                  });
            })
      );
};

var SingleOption = function SingleOption(props) {
      return React.createElement(
            'div',
            null,
            'option:',
            props.optionText,
            React.createElement(
                  'button',
                  { onClick: function onClick(e) {
                              props.handleDeleteOption(props.optionText);
                        } },
                  'remove'
            )
      );
};

var Addoptions = function (_React$Component2) {
      _inherits(Addoptions, _React$Component2);

      function Addoptions(props) {
            _classCallCheck(this, Addoptions);

            var _this2 = _possibleConstructorReturn(this, (Addoptions.__proto__ || Object.getPrototypeOf(Addoptions)).call(this, props));

            _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
            _this2.state = {
                  error: undefined
            };
            return _this2;
      }

      _createClass(Addoptions, [{
            key: 'handleAddOption',
            value: function handleAddOption(e) {
                  e.preventDefault();
                  var value = e.target.elements.opt.value;
                  value = value.trim();
                  var error = this.props.handleAddOptions(value);
                  this.setState(function () {
                        return { error: error };
                  });

                  if (!error) {
                        e.target.elements.opt.value = ' ';
                  }
            }
      }, {
            key: 'render',
            value: function render() {
                  return React.createElement(
                        'div',
                        null,
                        this.state.error && React.createElement(
                              'p',
                              null,
                              this.state.error
                        ),
                        React.createElement(
                              'form',
                              { onSubmit: this.handleAddOption },
                              React.createElement('input', { type: 'text', name: 'opt' }),
                              React.createElement(
                                    'button',
                                    null,
                                    'Add option'
                              )
                        )
                  );
            }
      }]);

      return Addoptions;
}(React.Component);

ReactDOM.render(React.createElement(DecisionApp, null), document.getElementById('app'));
