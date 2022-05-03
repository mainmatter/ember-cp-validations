import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'validator:<%= dasherizedModuleName %>',
  '<%= classifiedModuleName %>Validator',
  {
    needs: ['cpvalidator:messages']
  },
  function() {
    it('works', function() {
      const validator = this.subject();
      expect(validator).to.be.ok;
    });
  }
);
