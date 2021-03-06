"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_MARKUP_TEXT_COMPONENTS = exports.DEFAULT_TEXT_COMPONENTS = exports.DEFAULT_FIELDS_ATTR = exports.DEFAULT_PLURAL_ATTR = exports.DEFAULT_ID_ATTR = exports.DEFAULT_WITH_TEXT_RE = void 0;
const DEFAULT_WITH_TEXT_RE = /^withText$/;
exports.DEFAULT_WITH_TEXT_RE = DEFAULT_WITH_TEXT_RE;
const DEFAULT_ID_ATTR = 'id';
exports.DEFAULT_ID_ATTR = DEFAULT_ID_ATTR;
const DEFAULT_PLURAL_ATTR = 'plural';
exports.DEFAULT_PLURAL_ATTR = DEFAULT_PLURAL_ATTR;
const DEFAULT_FIELDS_ATTR = 'fields';
exports.DEFAULT_FIELDS_ATTR = DEFAULT_FIELDS_ATTR;
const DEFAULT_TEXT_COMPONENTS = [{
  nameRegex: '^Text$'
}];
exports.DEFAULT_TEXT_COMPONENTS = DEFAULT_TEXT_COMPONENTS;
const DEFAULT_MARKUP_TEXT_COMPONENTS = [{
  nameRegex: '^MarkupText$'
}];
exports.DEFAULT_MARKUP_TEXT_COMPONENTS = DEFAULT_MARKUP_TEXT_COMPONENTS;