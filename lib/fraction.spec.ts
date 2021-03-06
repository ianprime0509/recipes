/**
 * @file tests for the Fraction class
 * @author Ian Johnson
 * @copyright 2018 Ian Johnson
 * @license MIT
 */
import { expect } from 'chai';
import 'mocha';

import { Fraction } from './fraction';

describe('Fraction', () => {
  describe('constructor', () => {
    it('constructs a fraction given a numerator and denominator', () => {
      const f = new Fraction(2, 3);
      expect(f.numerator).to.equal(2);
      expect(f.denominator).to.equal(3);
    });

    it('reduces numerator and denominator to lowest terms', () => {
      const f = new Fraction(6, 8);
      expect(f.numerator).to.equal(3);
      expect(f.denominator).to.equal(4);
    });
  });

  describe('fromMixedNumber', () => {
    it('constructs a fraction from a mixed number', () => {
      expect(Fraction.fromMixedNumber(1, new Fraction(1, 3))).to.deep.equal(
        new Fraction(4, 3),
      );

      expect(Fraction.fromMixedNumber(0, new Fraction(5, 6))).to.deep.equal(
        new Fraction(5, 6),
      );

      expect(Fraction.fromMixedNumber(4, new Fraction(2, 3))).to.deep.equal(
        new Fraction(14, 3),
      );
    });
  });

  describe('toMixedNumber', () => {
    it('converts a proper fraction into a mixed number', () => {
      expect(new Fraction(3, 4).toMixedNumber()).to.deep.equal([
        0,
        new Fraction(3, 4),
      ]);
    });

    it('converts an improper fraction into a mixed number', () => {
      expect(new Fraction(3, 2).toMixedNumber()).to.deep.equal([
        1,
        new Fraction(1, 2),
      ]);

      expect(new Fraction(15, 4).toMixedNumber()).to.deep.equal([
        3,
        new Fraction(3, 4),
      ]);
    });
  });
});
