import React from 'react';
import styled from 'styled-components';
import { BlockMath } from 'react-katex';
import YouTube from 'react-youtube';

import '../../style/index.css'

import * as P from '../common';

const Wrap = styled.div``;

const opts = {
  width: '100%',
  height: '100vh',

  playerVars: { // https://developers.google.com/youtube/player_parameters
    controls: 1,
    autoplay: 0,
    disablekb: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0
  }
};

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
        <P.Run newline="true">
          For example, the peasant multiplication algorithm described in the previous
          chapter reduces the problem of multiplying two arbitrary positive integers to
          three simpler problems: addition, mediation (halving), and parity-checking. The
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
        <P.Run newline="true">
          Similarly, the Huntington-Hill algorithm reduces the problem of apportioning Congress
          to the problem of maintaining a priority queue that supports the operations Insert and ExtractMax.
          The abstract data type “priority queue” is a black box; the correctness of the apportionment algorithm
          does not depend on any specific priority queue data structure. Of course, the <P.Italic>running time</P.Italic> of
          the apportionment algorithm depends on the <P.Italic>running time</P.Italic> of the Insert and ExtractMax algorithms,
          but that’s a separate issue from the <P.Italic>correctness</P.Italic> of the algorithm. The beauty of the reduction is that
          we can create a more efficient apportionment algorithm by simply swapping in a new priority queue data structure.
          Moreover, the designer of that data structure does not need to know or care that it will be used to apportion Congress.
        </P.Run>
        <P.Run>
          When we design algorithms, we may not know exactly how the basic building blocks we use are implemented,
          or how our algorithms might be used as building blocks to solve even bigger problems. That ignorance is uncomfortable for many beginners,
          but it is both unavoidable and extremely useful. Even when you do know precisely how your components work, it is often <P.Italic>extremely</P.Italic> helpful to
          pretend that you don’t.
        </P.Run>
      </P.Article>
      <P.Article title="1.2 Simplify and Delegate" _id="1.2_simplify_and_delegate">
        <P.Run newline="true">
          <P.Italic>Recursion</P.Italic> is a particularly powerful kind of reduction, which can be described  loosely as follows:
        </P.Run>
        <P.BulletList>
          <P.BulletListItem title="">
            <P.Run>
              If the given instance of the problem can be solved directly, solve it directly.
            </P.Run>
          </P.BulletListItem>
          <P.BulletListItem title="">
            <P.Run>
              Otherwise, reduce it to one or more <P.BoldItalic>simpler instances of the same problem.</P.BoldItalic>
            </P.Run>
          </P.BulletListItem>
        </P.BulletList>
        <P.Run newline="true">
          If the self-reference is confusing, it may be helpful to imagine that someone else is going to solve the simpler problems,
          just as you would assume for other types of reductions. I like to call that someone else the <P.BoldItalic>Recursion Fairy.</P.BoldItalic> Your only task is to simplify the original problem,
          or to solve it directly when simplification  is either unnecessary or impossible; the Recursion Fairy will solve all the simpler subproblems for you,
          using Methods That Are None Of Your Business So Butt Out. Mathematically sophisticated readers might recognize the Recursion Fairy by its more formal name: the <P.BoldItalic>Induction Hypothesis.</P.BoldItalic>
        </P.Run>
        <P.Run newline="true">
          There is one mild technical condition that must be satisfied in order for any recursive method to work correctly:
          There must be no infinite sequence of reductions to simpler and simpler instances.
          Eventually, the recursive reductions must lead to an <P.BoldItalic>elementary base</P.BoldItalic> case that can be solved by some other method;
          otherwise, the recursive algorithm will loop forever. The most common way to satisfy this condition is to reduce to one or more <P.BoldItalic>smaller</P.BoldItalic> instances of the
          same problem. For example, if the original input is a skreeble with <P.InlMat>{'n'}</P.InlMat> glurps, the input to each recursive call should be a skreeble with strictly less than <P.InlMat>{'n'}</P.InlMat> glurps.
          Of course this is impossible if the skreeble has no glurps at all—You can’t have negative glurps; that would be silly!—so in that case we must grindlebloff the
          skreeble using some other method.
        </P.Run>
        <P.Run>
          We’ve already seen one instance of this pattern in the peasant multiplication algorithm, which is based directly on the following recursive identity.
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
        <P.Run>
          The same recurrence can be expressed algorithmically as follows:
        </P.Run>
        <P.CodeBox>
          <P.FuncNameUL>PeasantMultiply(<P.InlMat>x,y</P.InlMat>):</P.FuncNameUL><br></br>
          <P.CodeBoxTab />if <P.InlMat>x = 0</P.InlMat><br />
          <P.CodeBoxTab /><P.CodeBoxTab />return <P.InlMat>0</P.InlMat><br></br>
          <P.CodeBoxTab />else <br />
          <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>x^\prime \leftarrow \lfloor x/2 \rfloor</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>y^\prime \leftarrow y + y</P.InlMat><br></br>
          <P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat>prod \leftarrow</P.InlMat> <P.FuncName>PeasantMultiply</P.FuncName>(<P.InlMat>x^\prime,y^\prime</P.InlMat>)<br></br>
          <P.CodeBoxTab /><P.CodeBoxTab />if <P.InlMat>x</P.InlMat> is odd<br></br>
          <P.CodeBoxTab /><P.CodeBoxTab /><P.CodeBoxTab /><P.InlMat> prod \leftarrow prod + y</P.InlMat><br />
          <P.CodeBoxTab />return <P.InlMat>prod</P.InlMat>
        </P.CodeBox>
        <P.Run>
          A lazy Egyptian scribe could execute this algorithm
          by computing <P.InlMat>x^\prime</P.InlMat> and <P.InlMat>y^\prime</P.InlMat>, <P.Italic>asking a more junior scribe
          to multiply <P.InlMat>x^\prime</P.InlMat> and <P.InlMat>y^\prime</P.InlMat></P.Italic>,
          and then possibly adding <P.InlMat>y</P.InlMat> to the junior scribe’s response.
          The junior scribe’s problem is simpler because <P.InlMat>{`x^\\prime < x`}</P.InlMat> and
          repeatedly decreasing a positive integer eventually leads to 0.
          How the junior scribe actually computes <P.InlMat>x^\prime \cdot y^\prime</P.InlMat> is
          none of the senior scribe’s business (and it’s none of your business, either).
        </P.Run>
      </P.Article>
      <P.Article title="1.3 Tower of Hanoi" _id="1.3_tower_of_hanoi">
        <P.Run newline="true">
          The Tower of Hanoi puzzle was first published—as an actual physical puzzle!—by the French teacher and recreational mathematician Édouard Lucas in 1883, under the pseudonym “N. Claus (de Siam)” (an anagram of “Lucas d’Amiens”).
          The following year, Henri de Parville described the puzzle with the following remarkable story:
            </P.Run>
        <P.Run>
          <P.Italic>In the great temple at Benares... beneath the dome which marks the centre of the world, rests a brass plate in which are fixed three diamond needles, each a cubit high and as thick as the body of a bee. On one of these needles, at the creation, God placed sixty-four discs of pure gold, the largest disc resting on the brass plate, and the others getting smaller and smaller up to the top one. This is the Tower of Bramah. Day and night unceasingly the priests transfer the discs from one diamond needle to another according to the fixed and immutable laws of Bramah, which require that the priest on duty must not move more than one disc at a time and that he must place this disc on a needle so that there is no smaller disc below it. When the sixty-four discs shall have been thus transferred from the needle on which at the creation God placed them to one of the other needles, tower, temple, and Brahmins alike will crumble into dust, and with a thunderclap the world will vanish.
          </P.Italic>
        </P.Run>
        <P.Figure num='1.1' desc={
          <P.Run>The (8-disk) Tower of Hanoi puzzle</P.Run>
        }>
          <P.Image src="/static/Figure1.1_(a).png" />
        </P.Figure>
        <P.Run newline="true">
          Of course, as good computer scientists, our first instinct on reading this story is to substitute the variable n for the hardwired constant 64. And because most physical instances of the puzzle are made of wood instead of diamonds and gold, I will call the three possible locations for the disks “pegs” instead of “needles”. How can we move a tower of n disks from one peg to another, using a third spare peg as an occasional placeholder, without ever placing a disk on top of a smaller disk?
        </P.Run>
        <P.Run newline="true">
          As N. Claus (de Siam) pointed out in the pamphlet included with his puzzle,
          the secret to solving this puzzle is to think recursively. Instead of trying to solve
          the entire puzzle at once, let’s concentrate on moving just the largest disk. We  can’t move it at the beginning,
          because all the other disks are in the way. So  first we have to move those <P.InlMat>n-1</P.InlMat> smaller disks to the spare peg.
          Once that’s  done, we can move the largest disk directly to its destination. Finally, to finish the puzzle, we have to move the <P.InlMat>n-1</P.InlMat> smaller disks from the spare peg to their destination.
        </P.Run>
        <P.Figure num='1.2' desc={
          <P.Run>The Tower of Hanoi algorithm; ignore everything but the bottom disk.</P.Run>
        }>
          <P.Image src="/static/Figure1.2_(a).png" />
        </P.Figure>
        <P.Run newline="true" />
        <P.Figure num='1.3' desc={
          <P.Run>The Tower of Hanoi algorithm; Full-video.</P.Run>
        }>
          <P.Center padding='10px 50px 10px 50px'>
            <YouTube
              videoId="YstLjLCGmgg"
              opts={opts}
            />
          </P.Center>
        </P.Figure>
        <P.Run newline="true">
          That’s it! We’re done! We’ve successfully reduced the <P.InlMat>n</P.InlMat>-disk Tower of Hanoi problem to two instances of
          the <P.InlMat>(n-1)</P.InlMat>-disk Tower of Hanoi problem, which we can gleefully hand off to the Recursion Fairy—or to carry Lucas’s metaphor
          further, to the junior monks at the temple. Our job is finished. If we didn’t trust the junior monks, we wouldn’t have hired them; let them do their job in peace.
        </P.Run>
        <P.Run newline="true">
          Our reduction does make one subtle but extremely important assumption: There is a largest disk. Our recursive algorithm works for any positive number of disks,
          but it breaks down when <P.InlMat>n = 0</P.InlMat>. We must handle that case using a  different method. Fortunately, the monks at Benares, being good Buddhists,
    are quite adept at moving zero disks from one peg to another in no time at all, by  doing nothing.
        </P.Run>
        <P.Figure num='1.4' desc={
          <P.Run>The vacuous base case for the Tower of Hanoi algorithm. There is no spoon.</P.Run>
        }>
          <P.Image src="/static/Figure1.4_(a).png" />
        </P.Figure>
        <P.Run newline="true">
          It may be tempting to think about how all those smaller disks move around or more generally,
          what happens when the recursion is unrolled—but really, don’t do it.
          For most recursive algorithms, unrolling the recursion is neither necessary nor helpful.
          Our <P.BoldItalic>only</P.BoldItalic> task is to reduce the problem instance we’re given to one or more simpler instances,
          or to solve the problem directly if such a reduction is impossible. Our recursive Tower of Hanoi algorithm is trivially
          correct when <P.InlMat>n=0</P.InlMat>. For any <P.InlMat>n \ge 1</P.InlMat>, the Recursion Fairy correctly moves
          the top <P.InlMat>n-1</P.InlMat> disks (more formally, the Inductive Hypothesis implies that our recursive
          algorithm correctly moves the top <P.InlMat>n-1</P.InlMat> disks) so our algorithm is correct.

        </P.Run>
      </P.Article>
    </Wrap >
  );
}
