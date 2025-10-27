
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

/*
Simple Teen Patti-style app:
- 3 players: you (index 0) and two AIs
- Cards are textual (e.g., A♠, 10♥)
- Betting is simplified: fixed bet per round
*/

const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

function createDeck() {
  const deck = [];
  for (const r of RANKS) {
    for (const s of SUITS) {
      deck.push(`${r}${s}`);
    }
  }
  return deck;
}

function shuffle(array) {
  let a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function deal(deck) {
  // returns hands: array of 3 arrays (3 cards each)
  const hands = [[], [], []];
  let dIdx = 0;
  for (let r = 0; r < 3; r++) {
    for (let p = 0; p < 3; p++) {
      hands[p].push(deck[dIdx++]);
    }
  }
  return hands;
}

export default function App() {
  const [deck, setDeck] = useState(shuffle(createDeck()));
  const [hands, setHands] = useState([[], [], []]);
  const [showHands, setShowHands] = useState([false, false, false]); // reveal
  const [folded, setFolded] = useState([false, false, false]);
  const [pot, setPot] = useState(0);
  const [playerChips, setPlayerChips] = useState([100, 100, 100]);
  const [betAmount, setBetAmount] = useState(10);
  const [message, setMessage] = useState("Press DEAL to start");

  function startNewRound() {
    const newDeck = shuffle(createDeck());
    const newHands = deal(newDeck);
    setDeck(newDeck.slice(9)); // consumed 9 cards
    setHands(newHands);
    setShowHands([false, false, false]);
    setFolded([false, false, false]);
    setPot(0);
    setMessage("Round started. Place bets or Fold/Show.");
  }

  function placeBet(playerIndex) {
    if (playerChips[playerIndex] < betAmount) {
      Alert.alert("Not enough chips to bet");
      return;
    }
    const chips = playerChips.slice();
    chips[playerIndex] -= betAmount;
    setPlayerChips(chips);
    setPot(pot + betAmount);
    setMessage(`Player ${playerIndex + 1} bet ${betAmount}`);
  }

  function fold(playerIndex) {
    const f = folded.slice();
    f[playerIndex] = true;
    setFolded(f);
    setMessage(`Player ${playerIndex + 1} folded`);
  }

  function show(playerIndex) {
    const s = showHands.slice();
    s[playerIndex] = true;
    setShowHands(s);

    // If all remaining players showed or folded except one, decide winner.
    setTimeout(() => decideWinner(), 300);
  }

  function decideWinner() {
    // Very simple evaluator: highest sum of ranks by index in RANKS
    const rankValues = {};
    RANKS.forEach((r, i) => rankValues[r] = RANKS.length - i); // A highest

    let bestScore = -1;
    let winner = -1;
    for (let p = 0; p < 3; p++) {
      if (folded[p]) continue;
      const hand = hands[p];
      if (!hand || hand.length === 0) continue;
      let score = 0;
      for (const c of hand) {
        // card like "10♥" or "A♠"
        let rank = c.slice(0, c.length - 1);
        score += rankValues[rank] || 0;
      }
      if (score > bestScore) {
        bestScore = score;
        winner = p;
      }
    }
    if (winner === -1) {
      setMessage("No winner this round.");
      return;
    }
    const chips = playerChips.slice();
    chips[winner] += pot;
    setPlayerChips(chips);
    setMessage(`Player ${winner + 1} wins the pot of ${pot} chips!`);
    setPot(0);
  }

  function aiActions() {
    // simple AI: random bet or fold
    for (let p = 1; p < 3; p++) {
      if (Math.random() < 0.2) {
        fold(p);
      } else {
        placeBet(p);
      }
    }
  }

  function quickDeal() {
    startNewRound();
    // autoplay: give AI a chance to bet
    setTimeout(() => { aiActions(); }, 300);
  }

  function renderHand(hand, playerIndex) {
    const revealed = showHands[playerIndex];
    const isFolded = folded[playerIndex];
    if (isFolded) return <Text style={styles.foldedText}>Folded</Text>
    return (
      <View style={styles.cardRow}>
        {hand.map((c, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardText}>{revealed ? c : "🂠"}</Text>
          </View>
        ))}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Teen Patti - Starter</Text>
      <View style={styles.statusRow}>
        <Text>Pot: {pot}</Text>
        <Text>Bet: {betAmount}</Text>
      </View>

      <View style={styles.players}>
        <View style={styles.playerBox}>
          <Text style={styles.playerTitle}>You (Player 1)</Text>
          <Text>Chips: {playerChips[0]}</Text>
          {renderHand(hands[0] || [], 0)}
          <View style={styles.controls}>
            <TouchableOpacity style={styles.btn} onPress={() => placeBet(0)}>
              <Text>Bet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => fold(0)}>
              <Text>Fold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => show(0)}>
              <Text>Show</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.playerBox}>
          <Text style={styles.playerTitle}>AI (Player 2)</Text>
          <Text>Chips: {playerChips[1]}</Text>
          {renderHand(hands[1] || [], 1)}
          <View style={styles.controls}>
            <TouchableOpacity style={styles.btn} onPress={() => placeBet(1)}>
              <Text>Bet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => fold(1)}>
              <Text>Fold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => show(1)}>
              <Text>Show</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.playerBox}>
          <Text style={styles.playerTitle}>AI (Player 3)</Text>
          <Text>Chips: {playerChips[2]}</Text>
          {renderHand(hands[2] || [], 2)}
          <View style={styles.controls}>
            <TouchableOpacity style={styles.btn} onPress={() => placeBet(2)}>
              <Text>Bet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => fold(2)}>
              <Text>Fold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => show(2)}>
              <Text>Show</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.actionBtn} onPress={quickDeal}>
          <Text style={{ color: '#fff' }}>DEAL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => { placeBet(0); aiActions(); }}>
          <Text style={{ color: '#fff' }}>BET</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => { fold(0); aiActions(); }}>
          <Text style={{ color: '#fff' }}>FOLD</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.message}>{message}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f7f7f7' },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 10 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  players: { flex: 1 },
  playerBox: { padding: 10, borderRadius: 8, backgroundColor: '#fff', marginBottom: 10, elevation: 2 },
  playerTitle: { fontWeight: '600', marginBottom: 4 },
  cardRow: { flexDirection: 'row', marginVertical: 6 },
  card: { width: 48, height: 64, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', alignItems: 'center', marginRight: 6, backgroundColor: '#fff' },
  cardText: { fontSize: 16 },
  controls: { flexDirection: 'row', marginTop: 6 },
  btn: { padding: 8, borderRadius: 6, borderWidth: 1, borderColor: '#ddd', marginRight: 6 },
  foldedText: { color: '#999', fontStyle: 'italic' },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  actionBtn: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, backgroundColor: '#007bff' },
  message: { textAlign: 'center', marginTop: 10, color: '#333' }
});
