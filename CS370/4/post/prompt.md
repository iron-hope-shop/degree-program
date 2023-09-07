# Discussion: Applying Reinforcement Learning
For this week's discussion, you will spend some time applying what you have learned about reinforcement learning.

In your initial post, address the following:
- Design a set of states, rewards, and rules for an intelligent agent playing a simple board game. You may choose any board game that you are familiar with. In your design, be sure to consider the following:
  - States, including starting and ending states, and possible actions
  - Rewards or penalties for reaching a state
  - Rules for navigating from one state to another
- Compare your approach to the Markov Decision Process (MDP) that you learned about in this module. What similarities and differences do you see between your approach and the MDP?

---
For the purpose of this post, let's consider a simple board game: checkers.

**States:**
- Starting State: All pieces are in their initial configuration. The agent's pieces are on one side of the board, and the opponent's pieces are on the other.
- Ending State: All of the opponent's pieces are captured, or the agent has no legal moves left.
- Other States: Any configuration of pieces on the board, representing the agent's and the opponent's pieces.

**Possible Actions:**
- Move a piece diagonally forward to an empty square.
- Capture an opponent's piece by jumping over it to an empty square.

**Rewards and Penalties:**
- Rewards: +10 for capturing an opponent's piece, +50 for reaching the opponent's side and getting "kinged" (meaning a piece can move forward or backward), and +100 for winning the game.
- Penalties: -10 for losing a piece, -50 for getting a piece "kinged" by the opponent, and -100 for losing the game.

**Rules for Navigation:**
- The agent can move a piece forward to an empty square diagonally in the direction of the opponent's side.
- The agent can capture an opponent's piece by jumping over it to an empty square on the other side, if the square is unoccupied.
- If the agent reaches the opponent's side with a piece, that piece becomes a "king" and can move forward or backward.
- The agent can only make one move per turn, unless it captures an opponent's piece, in which case it may continue capturing with the same piece within the same turn if possible.

**Comparison to MDP:**
My approach to the design is indeed similar to the Markov Decision Process (MDP) in that it defines states, actions, and rewards, which are the core components of an MDP. The MDP also operates under the Markov property, stating that the next state depends only on the current state and the action taken, not any previous states, which is true for the checkers game.

However, unlike typical MDP scenarios where transition probabilities are often considered (the probability of moving to the next state given the current state and action), the checkers game operates in a deterministic environment where the outcomes are certain given a state and action. In other words, there's no randomness involved in the state transitions of a checkers game. This difference from traditional MDPs may require additional considerations when employing reinforcement learning strategies for the agent's optimal policy.


---

Let's take the classic game of Chess as an example:

**States**: Each state in chess can be represented by the positioning of pieces on the board. The starting state is always the same, with pawns in front and the other pieces lined up behind them in their designated positions. The ending states can be the various possible configurations when one player's king is in a checkmate position, or a stalemate occurs.

**Possible actions**: Each piece has specific rules governing its movement. Pawns move forward one square, rooks move in a straight line horizontally or vertically, knights move in an 'L' shape, bishops move diagonally, queens move in any direction for any number of squares, and kings move one square in any direction. These constitute the possible actions for each state.

**Rewards/Penalties**: The reward in chess could be based on the strategic value of the opponent's pieces captured. For instance, capturing a queen might yield a higher reward than capturing a pawn. Checkmating the opponent's king would provide the highest reward. Conversely, penalties could be associated with losing your own pieces, with a higher penalty for more valuable pieces.

**Rules for navigating**: The transition from one state to another is based on the rules of the game. For instance, only pawns can move two squares forward from their starting position, or a king cannot move into check.

Comparing this with the Markov Decision Process (MDP), there are several similarities. Both involve a set of states, a set of actions, and transitions between these states depending on the chosen actions. They both also involve rewards, and the objective is to optimize the actions taken to maximize the total reward.

However, there are also some differences. For instance, the MDP assumes that the environment is fully observable, meaning that the agent always knows exactly in which state it is. In a complex board game like chess, however, the agent may not always have full knowledge of the opponent's strategy. Additionally, while the MDP includes a discount factor that reduces the present value of future rewards, our simplified model doesn't include this aspect.
