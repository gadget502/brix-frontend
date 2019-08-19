import React from 'react';
import styled from 'styled-components';
import { BlockMath } from 'react-katex';

import * as P from '../common';

const Wrap = styled.div``;

export default function Chapter1() {
  return (
    <Wrap>
      <P.BigTitle title="Chapter 2. Backtracking" _id="2_backtracking" />
      <P.Article>
        <P.Run>
          This chapter describes another important recursive strategy called <P.Bold><P.Italic>backtracking</P.Italic></P.Bold>.
          A backtracking algorithm tries to construct a solution to a computational problem
          incrementally, one small piece at a time. Whenever the algorithm needs to
          decide between multiple alternatives to the next component of the solution, it
          recursively evaluates <P.Bold><P.Italic>every</P.Italic></P.Bold> alternative and then chooses the best one.
        </P.Run>
      </P.Article>
      <P.Article title="2.1 N Queens" _id="2.1_Nqueens">
        <P.Run>
          The prototypical backtracking problem is the classical <P.Bold><P.Italic>n Queens Problem</P.Italic></P.Bold>,
          first proposed by German chess enthusiast Max Bezzel in 1848 (under his pseudonym
          “Schachfreund”) for the standard 8×8 board and by François-Joseph Eustache
          Lionnet in 1869 for the more general n × n board. The problem is to place n
          queens on n × n chessboard, so that no two queens are attacking each other.
          For readers not familiar with the rules of chess, this means that no two queens
          are in the same row, the same column, or the same diagonal.
        </P.Run>
      </P.Article>
    </Wrap>
  );
}
