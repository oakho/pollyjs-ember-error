import { describe, it } from 'mocha';
import { expect } from 'chai';
import { setupApplicationTest } from 'ember-mocha';
import { visit, currentURL } from '@ember/test-helpers';
import { setupMocha as setupPolly } from '@pollyjs/core';

describe('Acceptance | not-working', function() {
  setupApplicationTest();
  setupPolly();

  it('can visit /not-working', async function() {
    this.polly.configure({ recordIfMissing: true });
    await visit('/not-working');
    expect(currentURL()).to.equal('/not-working');
  });
});
