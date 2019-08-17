import React from 'react';
import styled from 'styled-components';

import ExampleBookCover from './ExampleBookCover';
import BigTitle from './BigTitle';
import Article from './Article';
import BulletList from './BulletList';
import Expression from './Expression';
import Link from './Link';
import Remark from './Remark';
import Image from './Image';

const Wrap = styled.div``;

const bulletList_00 = [
  {
    title: 'Discrete mathematics',
    content: `High-school algebra, logarithm identities, naive
    set theory, Boolean algebra, first-order predicate logic, sets, functions,
    equivalences, partial orders, modular arithmetic, recursive definitions, trees
    \(as abstract objects, not data structures\), graphs \(vertices and edges, not
    function plots\).
    `,
  },
  {
    title: 'Proof techniques',
    content: `direct, indirect, contradiction, exhaustive case analysis,
    and induction \(especially “strong” and “structural” induction\). Chapter 0
    uses induction, and whenever Chapter n−1 uses induction, so does Chapter n..
    `,
  },
  {
    title: 'Iterative programming concepts',
    content: `variables, conditionals, loops, records,
    indirection \(addresses/pointers/references\), subroutines, recursion. I do not
    assume fluency in any particular programming language, but I do assume
    experience with at least one language that supports both indirection and
    recursion.
    `,
  },
  {
    title: 'Fundamental abstract data types',
    content: `scalars, sequences, vectors, sets, stacks,
    queues, maps/dictionaries, ordered maps/dictionaries, priority queues.
    `,
  },
  {
    title: 'Fundamental data structures',
    content: `arrays, linked lists \(single and double,
      linear and circular\), binary search trees, at least one form of balanced binary
      search tree \(such as AVL trees, red-black trees, treaps, skip lists, or splay
      trees\), hash tables, binary heaps, and most importantly, the difference
      between this list and the previous list.
    `,
  },
  {
    title: 'Fundamental computational problems',
    content: `elementary arithmetic, sorting,
    searching, enumeration, tree traversal \(preorder, inorder, postorder, levelorder, and so on\).
    `,
  },
  {
    title: 'Elementary algorithm analysis',
    content: `elementary algorism, sequential search, binary
    search, sorting \(selection, insertion, merge, heap, quick, radix, and so
    on\), breadth- and depth-first search in \(at least binary\) trees, and most
    importantly, the difference between this list and the previous list.
    `,
  },
  {
    title: 'Mathematical maturity',
    content: `Asymptotic notation \(o, O, Θ, Ω, ω\),
    translating loops into sums and recursive calls into recurrences, evaluating
    simple sums and recurrences.
    `,
  },
];

export default function ExamplePage() {
  return (
    <Wrap>
      <ExampleBookCover />
      <BigTitle title="Preface" _id="preface" />
      <Article
        title="about_this_book"
        content="This textbook grew out of a collection of lecture notes that I wrote for various
algorithms classes at the University of Illinois at Urbana-Champaign, which I
have been teaching about once a year since January 1999. Spurred by changes
of our undergraduate theory curriculum, I undertook a major revision of my
notes in 2016; this book consists of a subset of my revised notes on the most
fundamental course material, mostly reflecting the algorithmic content of our
new required junior-level theory course."
        _id="about_this_book"
      />
      <Article
        title="Prerequisites"
        content="The algorithms classes I teach at Illinois have two significant prerequisites:
a course on discrete mathematics and a course on fundamental data structures.
Consequently, this textbook is probably not suitable for most students as a first
course in data structures and algorithms. In particular, I assume at least passing
familiarity with the following specific topics:"
        _id="prerequisites"
      />
      <BulletList list={bulletList_00} />
      <Article
        content="The book briefly covers some of this prerequisite material when it arises in
context, but more as a reminder than a good introduction. For a more thorough
overview, I strongly recommend the following freely available references:"
        _id="normal_00"
      />
      <BigTitle title="Table of Contents" _id="table_of_contents" />
      <Link title="About This Book" link="about_this_book" />
      <Link title="preface" link="Preface" />
      <Expression expression={'int_0^infty x^2 dx'} />
    </Wrap>
  );
}
