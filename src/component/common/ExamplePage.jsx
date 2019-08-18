import React from 'react';
import styled from 'styled-components';
import { InlineMath, BlockMath } from 'react-katex';

import ExampleBookCover from './ExampleBookCover';
import BigTitle from './BigTitle';
import Article from './Article';
import Run from './Run';
import { BulletList, BulletListItem } from './BulletList'
import Expression from './Expression';
import Link from './Link';
import Remark from './Remark';
import Image from './Image';

const Wrap = styled.div``;


export default function ExamplePage() {
  return (
    <Wrap>
      <ExampleBookCover />
      <BigTitle title="Preface" _id="preface" />
      <Article title="About This Book" _id="about_this_book">
        <Run>
          This textbook grew out of a collection of lecture notes that I wrote for various
          algorithms classes at the University of Illinois at Urbana-Champaign, which I
          have been teaching about once a year since January 1999. Spurred by changes
          of our undergraduate theory curriculum, I undertook a major revision of my
          notes in 2016; this book consists of a subset of my revised notes on the most
          fundamental course material, mostly reflecting the algorithmic content of our
          new required junior-level theory course.
        </Run>
      </Article>
      <Article title="Prerequisites" _id="prerequisites">
        <Run>
          The algorithms classes I teach at Illinois have two significant prerequisites:
          a course on discrete mathematics and a course on fundamental data structures.
          Consequently, this textbook is probably not suitable for most students as a first
          course in data structures and algorithms. In particular, I assume at least passing
          familiarity with the following specific topics:"
        </Run>
      </Article>
      <BulletList>
        <BulletListItem title='Discrete mathematics'>
          <Run>
            High-school algebra, logarithm identities, naive
            set theory, Boolean algebra, first-order predicate logic, sets, functions,
            equivalences, partial orders, modular arithmetic, recursive definitions, trees
            (as abstract objects, not data structures), graphs (vertices and edges, not
            function plots).
          </Run>
        </BulletListItem>
        <BulletListItem title='Proof techniques'>
          <Run>
            direct, indirect, contradiction, exhaustive case analysis, and induction
            (especially “strong” and “structural” induction). Chapter 0 uses induction,
            and whenever Chapter </Run>
          <InlineMath>n-1</InlineMath>
          <Run> uses induction, so does Chapter </Run>
          <InlineMath>n</InlineMath>
          <Run>.</Run>
        </BulletListItem>
        <BulletListItem title='Iterative programming concepts'>
          <Run>
            variables, conditionals, loops, records, indirection (addresses/pointers/references),
            subroutines, recursion. I do not assume fluency in any particular programming language,
            but I do assume experience with at least one language that supports both indirection and
            recursion.
          </Run>
        </BulletListItem>
        <BulletListItem title='Fundamental abstract data types'>
          <Run>
            scalars, sequences, vectors, sets, stacks,
            queues, maps/dictionaries, ordered maps/dictionaries, priority queues.
          </Run>
        </BulletListItem>
        <BulletListItem title='Fundamental data structures'>
          <Run>
            arrays, linked lists (single and double,
            linear and circular), binary search trees, at least one form of balanced binary
            search tree (such as AVL trees, red-black trees, treaps, skip lists, or splay
            trees), hash tables, binary heaps, and most importantly, the difference
            between this list and the previous list.
          </Run>
        </BulletListItem>
        <BulletListItem title='Fundamental computational problems'>
          <Run>
            elementary arithmetic, sorting,
            searching, enumeration, tree traversal (preorder, inorder, postorder, levelorder, and so on).
          </Run>
        </BulletListItem>
        <BulletListItem title='Elementary algorithm analysis'>
          <Run>
            elementary algorism, sequential search, binary
            search, sorting (selection, insertion, merge, heap, quick, radix, and so
            on), breadth- and depth-first search in (at least binary) trees, and most
            importantly, the difference between this list and the previous list.
          </Run>
        </BulletListItem>
        <BulletListItem title='Mathematical maturity'>
          <Run>
            Asymptotic notation </Run>
          <InlineMath>(o, O, \Theta, \Omega, \omega)</InlineMath>
          <Run>
            , translating loops into sums and recursive calls into recurrences, evaluating
            simple sums and recurrences.
          </Run>
        </BulletListItem>
      </BulletList>
      <Article>
        <Run>
          The book briefly covers some of this prerequisite material when it arises in
          context, but more as a reminder than a good introduction. For a more thorough
          overview, I strongly recommend the following freely available references:
        </Run>
      </Article>
      <BulletList>
        <BulletListItem>
          <Run>
            Margaret M. Fleck. Building Blocks for Theoretical Computer Science. Version
            1.3 (January 2013) or later available from <a href='http://mfleck.cs.illinois.edu/building-blocks/'>
              http://mfleck.cs.illinois.edu/building-blocks/</a>.
          </Run>
        </BulletListItem>
        <BulletListItem>
          <Run>
            Eric Lehman, F. Thomson Leighton, and Albert R. Meyer. Mathematics for
            Computer Science. June 2018 revision available from <a
              href='https://courses.csail.mit.edu/6.042/spring18/'>
              https://courses.csail.mit.edu/6.042/spring18/</a>.
(I strongly recommend searching for the most recent revision.)
          </Run>
        </BulletListItem>
        <BulletListItem>
          <Run>
            Pat Morin. Open Data Structures. Edition 0.1Gβ (January 2016) or later
            available from <a href='http://opendatastructures.org/'>http://opendatastructures.org/</a>.
          </Run>
        </BulletListItem>
        <BulletListItem>
          <Run>
            Don Sheehy. A Course in Data Structures and Object-Oriented Design.
            February 2019 or later revision available from <a href='https://donsheehy.github.io/datastructures/'>
              https://donsheehy.github.io/datastructures/</a>.
          </Run>
        </BulletListItem>
      </BulletList>
      <BigTitle title="Table of Contents" _id="table_of_contents" />
      <Link title="About This Book" link="about_this_book" />
      <Link title="Preface" link="preface" />
      <Expression expression={'\\int_{0}^{\\infty} x^2 dx'} />
      <Article title="0.1 What is an algorithm?" _id="0.1_whatisanalgorithm">
        <Run>
          An algorithm is an explicit, precise, unambiguous, mechanically-executable
          sequence of elementary instructions, usually intended to accomplish a specific
          purpose. For example, here is an algorithm for singing that annoying song “99
          Bottles of Beer on the Wall”, for arbitrary values of 99:"
        </Run>
      </Article>
      <Article>
        <Run>The word “algorithm” does </Run>
        <Run style={{ fontStyle: 'italic' }}>not </Run>
        <Run>derive, as algorithmophobic classicists might guess, from the Greek roots </Run>
        <Run style={{ fontStyle: 'italic' }}>arithmos </Run>
        <Run>(άριθμός), meaning “number”, and </Run>
        <Run style={{ fontStyle: 'italic' }}>algos </Run>
        <Run> (ἄλγος), meaning “pain”. Rather, it is a corruption of the name of the 9th century
          Persian scholar Muḥammad ibn Mu̅sa̅ al-Khwa̅rizmi̅. Al-Khwarizmi is perhaps
          best known as the writer of the treatise </Run>
        <Run style={{ fontStyle: 'italic' }}>Al-Kitab al-mukhtaṣar fihisab al-gabr wa'l-muquabala</Run>
        <Run>, from which the modern word </Run>
        <Run style={{ fontStyle: 'italic' }}>algebra </Run>
        <Run>derives. In a different treatise, al-Khwarizmı described the modern decimal system for writing and
        manipulating numbers—in particular, the use of a small circle or </Run>
        <Run style={{ fontStyle: 'italic' }}>̣sifr </Run>
        <Run>to represent a missing quantity—which had been developed in India several centuries earlier.
          The methods described in this latter treatise, using either written figures or
          counting stones, became known in English as algorism or augrym, and its figures
          became known in English as ciphers.
        </Run>
      </Article>
      <Article title="0.2 Multiplication" id="0.2_multiplication_00">
        <Run>
          Although they have been a topic of formal academic study for only a few decades,
          algorithms have been with us since the dawn of civilization. Descriptions of
          step-by-step arithmetic computation are among the earliest examples of written
          human language, long predating the expositions by Fibonacci and al-Khwa̅rizmı̅,
          or even the place-value notation they popularized.
        </Run>
      </Article>
      <Article>
        <Run>This is a </Run>
        <Run style={{ fontStyle: 'italic' }}>Very </Run>
        <Run>Very Exciting! Styling finally works. Equation test: </Run>
        <InlineMath>{`\\sum_{i=1}^{n}{n^2} = \\frac{n(n+1)(2n+1)}{6}.`}</InlineMath>
        <Run> The string can continue after inline math.</Run>
      </Article>
    </Wrap >
  );
}
