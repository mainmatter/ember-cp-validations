import { moduleFor, test } from 'ember-qunit';

moduleFor('cpvalidator:<%= dasherizedModuleName %>', 'Unit | Validator | <%= dasherizedModuleName %>', {
  needs: ['cpvalidator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
