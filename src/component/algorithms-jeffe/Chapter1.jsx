import React from 'react';
import styled from 'styled-components';
import { BlockMath } from 'react-katex';

import * as P from '../common';

const Wrap = styled.div``;

export default function Chapter1() {
  return (
    <Wrap>
      <P.BigTitle title="Chapter 1. Recursion" _id="1_recursion" />
      <P.Article title="1.1 Reductions" _id="1.1_reductions">
        <P.Run newline="true">
          <P.Italic>Reduction</P.Italic> is the single most common technique used in designing algorithms.
          Reducing one problem X to another problem Y means to write an algorithm
          for X that uses an algorithm for Y as a black box or subroutine. Crucially, the
          correctness of the resulting algorithm for X cannot depend in any way on <P.Italic>how</P.Italic> the
          algorithm for Y works. The only thing we can assume is that the black box
          solves Y correctly. The inner workings of the black box are
          simply <P.Italic>none of our business</P.Italic>;
          they’re somebody else’s problem. It’s often best to literally think of the
          black box as functioning purely by magic.
        </P.Run>
        <P.Run>
          For example, the peasant multiplication algorithm described in the previous
          chapter reduces the problem of multiplying two arbitrary positive integers to
          three simplerproblems: addition, mediation (halving), andparity-checking. The
          algorithm relies on an abstract “positive integer” data type that supports those
          three operations, but the correctness of the multiplication algorithm does not
          depend on the precise data representation (tally marks, clay tokens, Babylonian
          hexagesimal, quipu, counting rods, Roman numerals, finger positions, augrym
          stones, gobar numerals, binary, negabinary, Gray code, balanced ternary, phinary,
          quater-imaginary, ...), or on the precise implementations of those operations.
          Of course, the <P.Italic>running time</P.Italic> of the multiplication algorithm depends on
          the <P.Italic>running time</P.Italic> of the addition, mediation, and parity operations, but that’s
          a separate issue from <P.Italic>correctness</P.Italic>. Most importantly, we can create a more
          efficient multiplication algorithm just by switching to a more efficient number
          representation (from tally marks to place-value notation, for example).
        </P.Run>
      </P.Article>
    </Wrap>
  );
}
