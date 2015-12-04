/*
 * Copyright (c) 2015 by Greg Reimer <gregreimer@gmail.com>
 * MIT License. See mit-license.txt for more info.
 */

import Converter from './converter';
import Collector from './collector';

export default function graphify(opts) {
  return new Converter(opts);
}

export function collector(...args) {
  return new Collector(...args);
}