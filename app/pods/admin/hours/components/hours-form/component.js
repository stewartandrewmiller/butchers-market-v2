import Component from '@ember/component';
import { computed } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import HoursValidations from 'butchers-market/validations/hour';
import { task } from 'ember-concurrency';

export default Component.extend({
  hours: null,
  saved() {},
  cancelled() {},

  changeset: null,
  errorMessage: null,
  saveDisabled: computed('changeset.isInvalid', function() {
    return this.get('changeset.isInvalid');
  }),

  init() {
    this._super(...arguments);

    let changeset = new Changeset(this.hours, lookupValidator(HoursValidations), HoursValidations);

    if (this.hours.get('isNew')) {
      let now = new Date();

      changeset.setProperties({
        type: 'Store',
        activeStartDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
        activeEndDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59),
      });
    }

    this.set('changeset', changeset);
  },

  saveHours: task(function*() {
    yield this.changeset.validate();

    if (!this.changeset.get('isValid')) {
      return;
    }

    try {
      yield this.changeset.save();
      this.saved();
    } catch (ex) {
      if (ex.body) {
        this.set('errorMessage', ex.body.error);
      } else {
        this.set('errorMessage', ex);
      }
    }
  }).drop(),

  actions: {
    startDateSelected(date) {
      this.changeset.set(
        'activeStartDate',
        new Date(date[0].getFullYear(), date[0].getMonth(), date[0].getDate(), 0, 0, 0)
      );
    },

    endDateSelected(date) {
      this.changeset.set(
        'activeEndDate',
        new Date(date[0].getFullYear(), date[0].getMonth(), date[0].getDate(), 23, 59, 59)
      );
    },
  },
});
