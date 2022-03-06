import { readFileSync } from 'fs';
import * as _ from 'lodash';
import { join } from 'path';

const input_data = JSON.parse(
  readFileSync(join(__dirname, './json/test/input.json')).toString(),
);

// const result = _map(input_data, 'demo-module|demo2.prop_6[].prop_1');

const p = _.property('demo-module|demo2.prop_6.prop_1');

console.log(_.map(input_data, p));
