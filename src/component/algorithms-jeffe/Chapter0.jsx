import React from 'react';
import styled from 'styled-components';
import { BlockMath } from 'react-katex';

import * as P from '../common';

const Wrap = styled.div``;

export default function Chapter0() {
  return (
    <Wrap>
      <P.BigTitle title="Chapter 0. Introduction" _id="0_introduction" />
      <P.Article title="0.1 What is an algorithm?" _id="0.1_whatisanalgorithm">
        <P.Run newline='true'>
          An algorithm is an explicit, precise, unambiguous, mechanically-executable
          sequence of elementary instructions, usually intended to accomplish a specific
          purpose. For example, here is an algorithm for singing that annoying song "99
          Bottles of Beer on the Wall", for arbitrary values of 99:
        </P.Run>
        <P.CodeBox>
          <P.FuncNameUL>BottlesOfBeer(<P.InlMat>n</P.InlMat>):</P.FuncNameUL><br></br>
          <P.CodeBoxTab />For <P.InlMat>i \leftarrow n</P.InlMat> down to <P.InlMat>1</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab />Sing “ <P.Italic><P.InlMat>i</P.InlMat> bottles of beer on the wall, <P.InlMat>i</P.InlMat> bottles of beer, </P.Italic>”<br></br>
          <P.CodeBoxTab /><P.CodeBoxTab />Sing “ <P.Italic>Take one down, pass it around, <P.InlMat>i-1</P.InlMat> bottles of beer on the wall. </P.Italic>”<br></br>
          <P.CodeBoxTab />Sing “ <P.Italic>No bottles of beer on the wall, no bottles of beer, </P.Italic>”<br></br>
          <P.CodeBoxTab />Sing “ <P.Italic>Go to the store, buy some more, <P.InlMat>n</P.InlMat> bottles of beer on the wall. </P.Italic>”
        </P.CodeBox>
        <P.Run newline='true'>
          The word "algorithm" does <P.Italic>not</P.Italic> derive, as algorithmophobic classicists
          might guess, from the Greek roots <P.Italic>arithmos</P.Italic> (άριθμός), meaning "number",
          and <P.Italic>algos</P.Italic> (ἄλγος), meaning "pain". Rather, it is a corruption of
          the name of the 9th century Persian scholar Muḥammad ibn Mu̅sa̅ al-Khwa̅rizmi̅.
          Al-Khwa̅rizmi̅ is perhaps best known as the writer of
          the treatise <P.Italic>Al-Kita̅b al-mukhtaṣar fi̅hi̅sa̅b al-gabr wa'l-muqua̅bala</P.Italic>,
          from which the modern word <P.Italic>algebra</P.Italic> derives. In a different treatise,
          al-Khwa̅rizmi̅ described the modern decimal system for writing and
          manipulating numbers—in particular, the use of a small circle or <P.Italic>ṣifr</P.Italic> to
          represent a missing quantity—which had been developed in India several centuries earlier.
          The methods described in this latter treatise, using either written figures or
          counting stones, became known in English as algorism or augrym, and its figures
          became known in English as ciphers.
        </P.Run>
        <P.Run newline='true'>
          Although both place-value notation and al-Khwa̅rizmi̅’s works were already
          known by some European scholars, the "Hindu-Arabic" numeric system was
          popularized in Europe by the medieval Italian mathematician and tradesman
          Leonardo of Pisa, better known as Fibonacci. Thanks in part to his
          1202 book <P.Italic>Liber Abaci</P.Italic>, written figures began to replace the counting table (then known as
          an <P.Italic>abacus</P.Italic>) and finger arithmetic as the preferred platform for calculation in
          Europe in the 13th century—<P.Italic>not</P.Italic> because written decimal figures were easier to
          learn or use, but because they provided an audit trail. Ciphers became common
          in Western Europe only with the advent of movable type, and truly ubiquitous
          only after cheap paper became plentiful in the early 19th century.
        </P.Run>
        <P.Run>
          Eventually the word <P.Italic>algorism</P.Italic> evolved into the
          modern <P.Italic>algorithm</P.Italic>, via folk etymology
          from the Greek <P.Italic>arithmos</P.Italic> (and perhaps the previously
          mentioned <P.Italic>algos</P.Italic>). Thus, until very recently,
          the word <P.Italic>algorithm</P.Italic> referred exclusively to
          mechanical techniques for place-value arithmetic using "Arabic" numerals.
          People trained in the fast and reliable execution of these procedures were called
          algorists or computators, or more simply, computers.
        </P.Run>
      </P.Article>
      <P.Article title="0.2 Multiplication" _id="0.2_multiplication">
        <P.Run>
          Although they have been a topic of formal academic study for only a few decades,
          algorithms have been with us since the dawn of civilization. Descriptions of
          step-by-step arithmetic computation are among the earliest examples of written
          human language, long predating the expositions by Fibonacci and al-Khwa̅rizmı̅,
          or even the place-value notation they popularized.
        </P.Run>
      </P.Article>
      <P.SmallTitle title='Lattice Multiplication' />
      <P.Article>
        <P.Run newline='true'>
          The most familiar method for multiplying large numbers, at least for American
          students, is the <P.Bold><P.Italic>lattice algorithm</P.Italic></P.Bold>.
          This algorithm was popularized by Fibonacci in <P.Italic>Liber Abaci</P.Italic>,
          who learned it from Arabic sources including al-Khwa̅rizmi̅, who
          in turn learned it from Indian sources including Brahmagupta’s 7th-century
          treatise <P.Italic>Bra̅hmasphuṭasiddha̅nta</P.Italic>,
          who may have learned it from Chinese sources.
          The oldest surviving descriptions of the algorithm appear
          in <P.Italic>The Mathematical Classic of Sunzi</P.Italic>,
          written in China between the 3rd and 5th centuries, and in
          Eutocius of Ascalon’s commentaries on Archimedes’ <P.Italic>Measurement of the Circle</P.Italic>,
          written around 500 CE, but there is evidence that the algorithm was known much
          earlier. Eutocius credits the method to a lost treatise of Apollonius of Perga,
          who lived around 300 BCE, entitled <P.Italic>Okytokion</P.Italic> ('Ωκυτόκιον). The Sumerians
          recorded multiplication tables on clay tablets as early as 2600 BCE, suggesting
          that they may have used the lattice algorithm.
        </P.Run>
        <P.Run>
          The lattice algorithm assumes that the input numbers are represented as
          explicit strings of digits; I’ll assume here that we’re working in base ten, but the
          algorithm generalizes immediately to any other base. To simplify notation, the
          input consists of a pair of arrays <P.InlMat>X\lbrack 0..m-1\rbrack</P.InlMat> and
          <P.InlMat>Y\lbrack 0..n-1\rbrack</P.InlMat>, representing the numbers
        </P.Run>
        <BlockMath>
          {`x = \\sum_ { i = 0 }^ { m- 1} X\\lbrack i \\rbrack\\cdot 10 ^ i \\text{ and } y = \\sum_ { j = 0 }^ { n- 1} Y\\lbrack j \\rbrack\\cdot 10 ^ j`}
        </BlockMath>
        <P.Run>and similarly, the output consists of a single array <P.InlMat>
          Z \lbrack 0..m+n-1 \rbrack</P.InlMat>, representing the product</P.Run>
        <BlockMath>
          {`z = x \\cdot y = \\sum_{ k = 0 }^ { m+ n - 1} Z\\lbrack k \\rbrack \\cdot 10 ^ k.`}
        </BlockMath>
        <P.Run>
          The algorithm uses addition and single-digit multiplication as primitive operations.
          Addition can be performed using a simple for-loop. In practice, single-digit
          multiplication is performed using a lookup table, either carved into clay tablets,
          painted on strips of wood or bamboo, written on paper, stored in read-only
          memory, or memorized by the computator. The entire lattice algorithm can be
          summarized by the formula
        </P.Run>
        <BlockMath>
          {`x\\cdot y = \\sum_{ i = 0 }^ { m- 1}\\sum_{ j = 0 }^ { n- 1} \\left(X[i]\\cdot Y[j]\\cdot 10 ^ { i+ j}\\right).`}
        </BlockMath>
        <P.Run newline='true'>
          Different variants of the lattice algorithm evaluate the partial products <P.InlMat>
            {`X[i]\\cdot Y[j]\\cdot 10 ^ { i + j}`}
          </P.InlMat> in different orders
          and use different strategies for computing their
          sum. For example, in <P.Italic>Liber Abaco</P.Italic>,
          Fibonacci describes a variant that considers the <P.InlMat>mn</P.InlMat> partial
          products in increasing order of significance,
          as shown in modern pseudocode below.
        </P.Run>
        <P.CodeBox>
          <P.FuncNameUL>FibonacciMultiply(<P.InlMat>X[0..m-1], Y[0..n-1]</P.InlMat>):</P.FuncNameUL><br></br>
          <P.CodeBoxTab /><P.InlMat>hold \leftarrow 0</P.InlMat><br></br>
          <P.CodeBoxTab />for <P.InlMat>k \leftarrow 0</P.InlMat> to <P.InlMat>n+m-1</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab />for all <P.InlMat>i</P.InlMat> and <P.InlMat>j</P.InlMat> such that <P.InlMat>i+j=k</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>hold \leftarrow hold + X[i]\cdot Y[j]</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>{`Z[k] \\leftarrow hold \\text{ mod } 10`}</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>hold \leftarrow \lfloor hold/10 \rfloor</P.InlMat><br></br>
          <P.CodeBoxTab />return <P.InlMat>Z[0..m+n-1]</P.InlMat>
        </P.CodeBox>
        <P.Run>
          Fibonacci’s algorithm is often executed by storing all the partial products in a
          two-dimensional table (often called a "tableau" or "grate" or "lattice") and then
          summing along the diagonals with appropriate carries, as shown on the right
          in <P.LinkInl title='Figure 0.1' link='Figure 0.1.' />. American elementary-school students are taught to multiply one
          factor (the "multiplicand") by each digit in the other factor (the "multiplier"),
          writing down all the multiplicand-by-digit products before adding them up, as
          shown on the left in <P.LinkInl title='Figure 0.1' link='Figure 0.1.' />. This was also the method described by Eutocius,
          although he fittingly considered the multiplier digits from left to right, as shown
          in <P.LinkInl title='Figure 0.2' link='Figure 0.2.' />. Both of these variants (and several others) are described and
          illustrated side by side in the anonymous 1458 textbook <P.Italic>L’Arte dell’Abbaco</P.Italic>, also
          known as the <P.Italic>Treviso Arithmetic</P.Italic>,
          the first <P.Italic>printed</P.Italic> mathematics book in the West.
        </P.Run>
        <P.Figure num='0.1' desc={
          <P.Run>Computing 934 × 314 = 293276 using "long" multiplication
            (with error-checking by casting out nines) and "lattice" multiplication,
            from <P.Italic>L’Arte dell’Abbaco</P.Italic> (1458). (See Image Credits at the end of the book.)</P.Run>
        }>
          <P.WrapPanel>
            <P.Image src='/static/Figure0.1_(a).png' />
            <P.Image src='/static/Figure0.1_(b).png' />
          </P.WrapPanel>
        </P.Figure>
        <P.Figure num='0.2' desc={
          <P.Run> Eutocius’s 6th-century calculation of <P.InlMat>
            {`1172\\frac{1}{8}\\times 1172\\frac{1}{8} = 1373877\\frac{1}{64}`}</P.InlMat>,
            in his commentary on Archimedes’ <P.Italic>Measurement of the Circle</P.Italic>,
            transcribed (left) and translated into modern notation (right) by
            Johan Heiberg (1891). (See Image Credits at the end of the book.)</P.Run>
        }>
          <P.WrapPanel>
            <P.Image src='/static/Figure0.2_(a).png' />
            <P.Image src='/static/Figure0.2_(b).png' />
          </P.WrapPanel>
        </P.Figure>
        <P.Run>
          All of these variants of the lattice algorithm—and other similar variants
          described by Sunzi, al-Khwa̅rizmi̅, Fibonacci, <P.Italic>L’Arte dell’Abbaco</P.Italic>, and many other
          sources—compute the product of any <P.InlMat>m</P.InlMat>-digit number and any <P.InlMat>n</P.InlMat>-digit number
          in <P.InlMat>{`\\bm{O(mn)}`}</P.InlMat><P.Bold> time</P.Bold>; the running time of every variant is
          dominated by the number of single-digit multiplications.
        </P.Run>
      </P.Article>
      <P.SmallTitle title='Duplation and Mediation' />
      <P.Article>
        <P.Run newline='true'>
          The lattice algorithm is not the oldest multiplication algorithm for which we
          have direct recorded evidence. An even older and arguably simpler algorithm,
          which does not rely on place-value notation, is sometimes
          called <P.Italic>Russian peasant multiplication</P.Italic>, <P.Italic>Ethiopian peasant multiplication</P.Italic>,
          or just <P.Bold><P.Italic>peasant multiplication</P.Italic></P.Bold>.
          A variant of this algorithm was copied into the Rhind papyrus by the Egyptian
          scribe Ahmes around 1650 BCE, from a document he claimed was (then) about
          350 years old. 10 This algorithm was still taught in elementary schools in Eastern
          Europe in the late 20th century; it was also commonly used by early digital
          computers that did not implement integer multiplication directly in hardware.
        </P.Run>
        <P.Run>
          The peasant multiplication algorithm reduces the difficult task of multiplying
          arbitrary numbers to a sequence of four simpler operations: (1) determining
          parity (even or odd), (2) addition, (3) <P.Bold><P.Italic>duplation</P.Italic></P.Bold> (doubling a number),
          and (4) <P.Bold><P.Italic>mediation</P.Italic></P.Bold> (halving a number, rounding down).
        </P.Run>
        <P.Figure num="0.3" desc="Multiplication by duplation and mediation">
          <P.CodeBox>
            <P.FuncNameUL>PeasantMultiply(<P.InlMat>x,y</P.InlMat>):</P.FuncNameUL><br></br>
            <P.CodeBoxTab /><P.InlMat>prod \leftarrow 0</P.InlMat><br></br>
            <P.CodeBoxTab />while <P.InlMat>x > 0</P.InlMat><br></br>
            <P.CodeBoxTab /><P.CodeBoxTab />if <P.InlMat>x</P.InlMat> is odd<br></br>
            <P.CodeBoxTab /><P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>prod \leftarrow prod + y</P.InlMat><br></br>
            <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>x \leftarrow \lfloor x/2 \rfloor</P.InlMat><br></br>
            <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>y \leftarrow y + y</P.InlMat><br></br>
            <P.CodeBoxTab />return <P.InlMat>prod</P.InlMat>
          </P.CodeBox>
          <P.Image src='/static/Figure0.3_(b).png' />
        </P.Figure>
        <P.Run>
          The correctness of this algorithm follows by induction from the following
          recursive identity, which holds for all non-negative integers <P.InlMat>x</P.InlMat> and <P.InlMat>y</P.InlMat>:
        </P.Run>
        <BlockMath>
          {`
            x\\cdot y = \\begin{cases}
              0 & \\text{if } x = 0 \\\\
              \\lfloor x/2 \\rfloor \\cdot (y + y) & \\text{if } x \\text{ is even} \\\\
              \\lfloor x/2 \\rfloor \\cdot (y + y) + y & \\text{if } x \\text{ is odd} \\\\
            \\end{cases}
          `}
        </BlockMath>
        <P.Run newline='true'>
          Arguably, this recurrence <P.Italic>is</P.Italic> the peasant multiplication algorithm. Don’t let the
          iterative pseudocode fool you; the algorithm is fundamentally recursive!
        </P.Run>
      </P.Article>
    </Wrap>
  );
}
