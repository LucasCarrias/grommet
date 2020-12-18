"use strict";

exports.__esModule = true;
exports.CustomSizeCalendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("grommet/utils");

var _grommet = require("grommet");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var customHeading = (0, _utils.deepMerge)(_grommet.grommet, {
  calendar: {
    heading: {
      level: '3'
    }
  }
});

var CustomSizeCalendar = function CustomSizeCalendar() {
  var _useState = (0, _react.useState)(),
      date = _useState[0],
      setDate = _useState[1];

  var onSelect = function onSelect(nextDate) {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customHeading
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Calendar, {
    date: date,
    onSelect: onSelect,
    bounds: ['2018-09-08', '2020-12-13']
  })));
};

exports.CustomSizeCalendar = CustomSizeCalendar;
CustomSizeCalendar.story = {
  name: 'Heading size'
};