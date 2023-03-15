/*
Introduction
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.
Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2
 

Returns
Return an integer of the score.
Example
Initialise
Kata kata = new Kata();
string[] reel1 = new string[] { "Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack" };
string[] reel2 = new string[] { "Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack" };
string[] reel3 = new string[] { "Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack" };
List<string[]> reels = new List<string[]> { reel1, reel2, reel3 };
int[] spins = new int[] { 5, 5, 5 };
int result = kata.fruit(reels, spins);
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
Return
result == 50
Good luck and enjoy!

*/

function fruit(reels, spins) {
  // Code here
  const items = [
    "Wild",
    "Star",
    "Bell",
    "Shell",
    "Seven",
    "Cherry",
    "Bar",
    "King",
    "Queen",
    "Jack",
  ];
  let hits = [];
  let hitsCache = {};
  if (reels.length > 3) {
    hits = [reels[spins[0]], reels[spins[1]], reels[spins[2]]];
  } else {
    hits = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
  }

  hits.forEach((hit) => {
    if (!hitsCache[hit]) {
      hitsCache[hit] = 0;
    }
    hitsCache[hit] = hitsCache[hit] += 1;
  });

  const isWildIncluded = Object.keys(hitsCache).includes("Wild");
  const hitsKeys = Object.keys(hitsCache).sort(
    (a, b) => hitsCache[b] - hitsCache[a]
  );

  for (let i = 0; i < Object.keys(hitsCache).length; i++) {
    let findIndex = items.indexOf(hitsKeys[i]);

    if (hitsCache[hitsKeys[i]] === 3) {
      return 100 - findIndex * 10;
    } else if (hitsCache[hitsKeys[i]] === 2 && hitsKeys[i] === "Wild") {
      return 10;
    } else if (hitsCache[hitsKeys[i]] === 2 && isWildIncluded) {
      return (10 - findIndex) * 2;
    } else if (hitsCache[hitsKeys[i]] === 2 && !isWildIncluded) {
      return 10 - findIndex;
    } else return 0;
  }
}
