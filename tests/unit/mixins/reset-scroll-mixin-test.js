import Ember from 'ember';
import ResetScrollMixinMixin from 'butchers-market/mixins/reset-scroll-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | reset scroll mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResetScrollMixinObject = Ember.Object.extend(ResetScrollMixinMixin);
  let subject = ResetScrollMixinObject.create();
  assert.ok(subject);
});