import React from 'react';
import styled from 'styled-components';
import { BlockMath } from 'react-katex';

import * as P from '../common';

const Wrap = styled.div``;

export default function Prologue() {
  return (
    <Wrap>
      <P.ExampleBookCover />
      <P.BigTitle title="Preface" _id="preface" />
      <P.Article title="About This Book" _id="about_this_book">
        <P.Run>
          This textbook grew out of a collection of lecture notes that I wrote
          for various algorithms classes at the University of Illinois at
          Urbana-Champaign, which I have been teaching about once a year since
          January 1999. Spurred by changes of our undergraduate theory
          curriculum, I undertook a major revision of my notes in 2016; this
          book consists of a subset of my revised notes on the most fundamental
          course material, mostly reflecting the algorithmic content of our new
          required junior-level theory course.
        </P.Run>
      </P.Article>
      <P.Article title="Prerequisites" _id="prerequisites">
        <P.Run>
          The algorithms classes I teach at Illinois have two significant
          prerequisites: a course on discrete mathematics and a course on
          fundamental data structures. Consequently, this textbook is probably
          not suitable for most students as a first course in data structures
          and algorithms. In particular, I assume at least passing familiarity
          with the following specific topics:"
        </P.Run>
      </P.Article>
      <P.BulletList>
        <P.BulletListItem title="Discrete mathematics">
          <P.Run>
            High-school algebra, logarithm identities, naive set theory, Boolean
            algebra, first-order predicate logic, sets, functions, equivalences,
            partial orders, modular arithmetic, recursive definitions, trees (as
            abstract objects, not data structures), graphs (vertices and edges,
            not function plots).
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Proof techniques">
          <P.Run>
            direct, indirect, contradiction, exhaustive case analysis, and
            induction (especially "strong" and "structural" induction). Chapter
            0 uses induction, and whenever Chapter <P.InlMat>n-1</P.InlMat> uses
            induction, so does Chapter <P.InlMat>n</P.InlMat>.
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Iterative programming concepts">
          <P.Run>
            variables, conditionals, loops, records, indirection
            (addresses/pointers/references), subroutines, recursion. I do not
            assume fluency in any particular programming language, but I do
            assume experience with at least one language that supports both
            indirection and recursion.
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Fundamental abstract data types">
          <P.Run>
            scalars, sequences, vectors, sets, stacks, queues,
            maps/dictionaries, ordered maps/dictionaries, priority queues.
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Fundamental data structures">
          <P.Run>
            arrays, linked lists (single and double, linear and circular),
            binary search trees, at least one form of balanced binary search
            tree (such as AVL trees, red-black trees, treaps, skip lists, or
            splay trees), hash tables, binary heaps, and most importantly, the
            difference between this list and the previous list.
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Fundamental computational problems">
          <P.Run>
            elementary arithmetic, sorting, searching, enumeration, tree
            traversal (preorder, inorder, postorder, levelorder, and so on).
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Elementary algorithm analysis">
          <P.Run>
            elementary algorithm, sequential search, binary search, sorting
            (selection, insertion, merge, heap, quick, radix, and so on),
            breadth- and depth-first search in (at least binary) trees, and most
            importantly, the difference between this list and the previous list.
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem title="Mathematical maturity">
          <P.Run>
            Asymptotic notation{' '}
            <P.InlMat>(o, O, \Theta, \Omega, \omega)</P.InlMat>, translating
            loops into sums and recursive calls into recurrences, evaluating
            simple sums and recurrences.
          </P.Run>
        </P.BulletListItem>
      </P.BulletList>
      <P.Article>
        <P.Run>
          The book briefly covers some of this prerequisite material when it
          arises in context, but more as a reminder than a good introduction.
          For a more thorough overview, I strongly recommend the following
          freely available references:
        </P.Run>
      </P.Article>
      <P.BulletList>
        <P.BulletListItem>
          <P.Run>
            Margaret M. Fleck. Building Blocks for Theoretical Computer Science.
            Version 1.3 (January 2013) or later available from{' '}
            <a href="http://mfleck.cs.illinois.edu/building-blocks/">
              http://mfleck.cs.illinois.edu/building-blocks/
            </a>
            .
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem>
          <P.Run>
            Eric Lehman, F. Thomson Leighton, and Albert R. Meyer. Mathematics
            for Computer Science. June 2018 revision available from{' '}
            <a href="https://courses.csail.mit.edu/6.042/spring18/">
              https://courses.csail.mit.edu/6.042/spring18/
            </a>
            . (I strongly recommend searching for the most recent revision.)
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem>
          <P.Run>
            Pat Morin. Open Data Structures. Edition 0.1Gβ (January 2016) or
            later available from{' '}
            <a href="http://opendatastructures.org/">
              http://opendatastructures.org/
            </a>
            .
          </P.Run>
        </P.BulletListItem>
        <P.BulletListItem>
          <P.Run>
            Don Sheehy. A Course in Data Structures and Object-Oriented Design.
            February 2019 or later revision available from{' '}
            <a href="https://donsheehy.github.io/datastructures/">
              https://donsheehy.github.io/datastructures/
            </a>
            .
          </P.Run>
        </P.BulletListItem>
      </P.BulletList>
      <P.BigTitle title="Table of Contents" _id="table_of_contents" />
      <P.Link title="Preface" link="preface" />
      <P.Link isSubLink={true} title="About This Book" link="about_this_book" />
      <P.Link title="Table of contents" link="table_of_contents" />
      <P.Link title="0 Introduction" page="/reader/0" />
      <P.Link
        isSubLink={true}
        title="0.2 Multiplication"
        page="/reader/0"
        link="0.2_multiplication"
      />
      <P.Link title="1 Recursion" page="/reader/1" />
      <P.Link title="2 Backtracking" page="/reader/2" />
    </Wrap>
  );
}
