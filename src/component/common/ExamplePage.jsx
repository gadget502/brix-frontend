import React from 'react';
import styled from 'styled-components';
import { InlineMath, BlockMath } from 'react-katex';

import ExampleBookCover from './ExampleBookCover';
import BigTitle from './BigTitle';
import SmallTitle from './SmallTitle';
import Article from './Article';
import Run from './Run';
import { BulletList, BulletListItem } from './BulletList'
import Expression from './Expression';
import Link from './Link';
import Remark from './Remark';
import Image from './Image';

const Wrap = styled.div``;
const Italic = styled.i`
  font-style: italic
`;
const Bold = styled.b`
  font-weight: bold
`;
class InlMat extends React.Component {
  render() {
    return (
      <InlineMath>
        {this.props.children}
      </InlineMath>
    )
  }
}

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
            (especially "strong" and "structural" induction). Chapter 0 uses induction,
            and whenever Chapter <InlMat>n-1</InlMat> uses induction, so does
            Chapter <InlMat>n</InlMat>.</Run>
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
            elementary algorithm, sequential search, binary
            search, sorting (selection, insertion, merge, heap, quick, radix, and so
            on), breadth- and depth-first search in (at least binary) trees, and most
            importantly, the difference between this list and the previous list.
          </Run>
        </BulletListItem>
        <BulletListItem title='Mathematical maturity'>
          <Run>
            Asymptotic notation <InlMat>(o, O, \Theta, \Omega, \omega)</InlMat>,
            translating loops into sums and recursive calls into recurrences,
            evaluating simple sums and recurrences.
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
      <Article title="0.1 What is an algorithm?" _id="0.1_whatisanalgorithm">
        <Run newline='true'>
          An algorithm is an explicit, precise, unambiguous, mechanically-executable
          sequence of elementary instructions, usually intended to accomplish a specific
          purpose. For example, here is an algorithm for singing that annoying song "99
          Bottles of Beer on the Wall", for arbitrary values of 99:"
        </Run>
        <Run newline='true'>
          <span style={{ display: 'inline-block', width: '30px' }} />BottlesOfBeer(n): <br></br>
          <span style={{ display: 'inline-block', width: '60px' }} />For i ← n down to 1<br></br>
          <span style={{ display: 'inline-block', width: '90px' }} />Sing “i bottles of beer on the wall, i bottles of beer, ”<br></br>
          <span style={{ display: 'inline-block', width: '90px' }} />Sing “ Take one down, pass it around, i −1 bottles of beer on the wall. ”<br></br>
          <span style={{ display: 'inline-block', width: '90px' }} />Sing “ No bottles of beer on the wall, no bottles of beer, ”<br></br>
          <span style={{ display: 'inline-block', width: '90px' }} />Sing “ Go to the store, buy some more, n bottles of beer on the wall. ”
        </Run>
        <Run newline='true'>
          The word "algorithm" does <Italic>not</Italic> derive, as algorithmophobic classicists
          might guess, from the Greek roots <Italic>arithmos</Italic> (άριθμός), meaning "number",
          and <Italic>algos</Italic> (ἄλγος), meaning "pain". Rather, it is a corruption of
          the name of the 9th century Persian scholar Muḥammad ibn Mu̅sa̅ al-Khwa̅rizmi̅.
          Al-Khwa̅rizmi̅ is perhaps best known as the writer of
          the treatise <Italic>Al-Kita̅b al-mukhtaṣar fi̅hi̅sa̅b al-gabr wa'l-muqua̅bala</Italic>,
          from which the modern word <Italic>algebra</Italic> derives. In a different treatise,
          al-Khwa̅rizmi̅ described the modern decimal system for writing and
          manipulating numbers—in particular, the use of a small circle or <Italic>ṣifr</Italic> to
          represent a missing quantity—which had been developed in India several centuries earlier.
          The methods described in this latter treatise, using either written figures or
          counting stones, became known in English as algorism or augrym, and its figures
          became known in English as ciphers.
        </Run>
        <Run newline='true'>
          Although both place-value notation and al-Khwa̅rizmi̅’s works were already
          known by some European scholars, the "Hindu-Arabic" numeric system was
          popularized in Europe by the medieval Italian mathematician and tradesman
          Leonardo of Pisa, better known as Fibonacci. Thanks in part to his
          1202 book <Italic>Liber Abaci</Italic>, written figures began to replace the counting table (then known as
          an <Italic>abacus</Italic>) and finger arithmetic as the preferred platform for calculation in
          Europe in the 13th century—<Italic>not</Italic> because written decimal figures were easier to
          learn or use, but because they provided an audit trail. Ciphers became common
          in Western Europe only with the advent of movable type, and truly ubiquitous
          only after cheap paper became plentiful in the early 19th century.
        </Run>
        <Run>
          Eventually the word <Italic>algorism</Italic> evolved into the
          modern <Italic>algorithm</Italic>, via folk etymology
          from the Greek <Italic>arithmos</Italic> (and perhaps the previously
          mentioned <Italic>algos</Italic>). Thus, until very recently,
          the word <Italic>algorithm</Italic> referred exclusively to
          mechanical techniques for place-value arithmetic using "Arabic" numerals.
          People trained in the fast and reliable execution of these procedures were called
          algorists or computators, or more simply, computers.
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
      <SmallTitle title='Lattice Multiplication' />
      <Article>
        <Run newline='true'>
          The most familiar method for multiplying large numbers, at least for American
          students, is the <Bold><Italic>lattice algorithm</Italic></Bold>.
          This algorithm was popularized by Fibonacci in <Italic>Liber Abaci</Italic>,
          who learned it from Arabic sources including al-Khwa̅rizmi̅, who
          in turn learned it from Indian sources including Brahmagupta’s 7th-century
          treatise <Italic>Bra̅hmasphuṭasiddha̅nta</Italic>,
          who may have learned it from Chinese sources.
          The oldest surviving descriptions of the algorithm appear
          in <Italic>The Mathematical Classic of Sunzi</Italic>,
          written in China between the 3rd and 5th centuries, and in
          Eutocius of Ascalon’s commentaries on Archimedes’ <Italic>Measurement of the Circle</Italic>,
          written around 500 CE, but there is evidence that the algorithm was known much
          earlier. Eutocius credits the method to a lost treatise of Apollonius of Perga,
          who lived around 300 BCE, entitled <Italic>Okytokion</Italic> ('Ωκυτόκιον). The Sumerians
          recorded multiplication tables on clay tablets as early as 2600 BCE, suggesting
          that they may have used the lattice algorithm.
        </Run>
        <Run>
          The lattice algorithm assumes that the input numbers are represented as
          explicit strings of digits; I’ll assume here that we’re working in base ten, but the
          algorithm generalizes immediately to any other base. To simplify notation, the
          input consists of a pair of arrays <InlMat>X\lbrack 0..m-1\rbrack</InlMat> and
          <InlMat>Y\lbrack 0..n-1\rbrack</InlMat>, representing the numbers
        </Run>
        <BlockMath>
          {`x = \\sum_ { i = 0 }^ { m- 1} X\\lbrack i \\rbrack\\cdot 10 ^ i \\text{ and } y = \\sum_ { j = 0 }^ { n- 1} Y\\lbrack j \\rbrack\\cdot 10 ^ j`}
        </BlockMath>
        <Run>and similarly, the output consists of a single array <InlMat>
          Z \lbrack 0..m+n-1 \rbrack</InlMat>, representing the product</Run>
        <BlockMath>
          {`z = x \\cdot y = \\sum_{ k = 0 }^ { m+ n - 1} Z\\lbrack k \\rbrack \\cdot 10 ^ k.`}
        </BlockMath>
        <Run>
          The algorithm uses addition and single-digit multiplication as primitive operations.
          Addition can be performed using a simple for-loop. In practice, single-digit
          multiplication is performed using a lookup table, either carved into clay tablets,
          painted on strips of wood or bamboo, written on paper, stored in read-only
          memory, or memorized by the computator. The entire lattice algorithm can be
          summarized by the formula
        </Run>
        <BlockMath>
          {`x\\cdot y = \\sum_{ i = 0 }^ { m- 1}\\sum_{ j = 0 }^ { n- 1} \\left(X[i]\\cdot Y[j]\\cdot 10 ^ { i+ j}\\right).`}
        </BlockMath>
        <Run>
          Different variants of the lattice algorithm evaluate the partial products <InlMat>
            {`X[i]\\cdot Y[j]\\cdot 10 ^ { i + j}`}
          </InlMat> in different orders
          and use different strategies for computing their
          sum. For example, in <Italic>Liber Abaco</Italic>,
          Fibonacci describes a variant that considers the
          <InlMat>mn</InlMat> partial products in increasing order of significance,
          as shown in modern pseudocode below.
        </Run>
      </Article>
      <SmallTitle title='Duplation and Mediation' />
      <Article>
        <Run newline='true'>
          The lattice algorithm is not the oldest multiplication algorithm for which we
          have direct recorded evidence. An even older and arguably simpler algorithm,
          which does not rely on place-value notation, is sometimes
          called <Italic>Russian peasant multiplication</Italic>, <Italic>Ethiopian peasant multiplication</Italic>,
          or just <Bold><Italic>peasant multiplication</Italic></Bold>.
          A variant of this algorithm was copied into the Rhind papyrus by the Egyptian
          scribe Ahmes around 1650 BCE, from a document he claimed was (then) about
          350 years old. 10 This algorithm was still taught in elementary schools in Eastern
          Europe in the late 20th century; it was also commonly used by early digital
          computers that did not implement integer multiplication directly in hardware.
        </Run>
        <Run>
          The peasant multiplication algorithm reduces the difficult task of multiplying
          arbitrary numbers to a sequence of four simpler operations: (1) determining
          parity (even or odd), (2) addition, (3) <Bold><Italic>duplation</Italic></Bold> (doubling a number),
          and (4) <Bold><Italic>mediation</Italic></Bold> (halving a number, rounding down).
        </Run>
      </Article>
    </Wrap >
  );
}
