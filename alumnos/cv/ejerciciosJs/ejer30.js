// 30.
(function blackJack() {
  let count = 0;
  function cc(card) {
    const highCards = [10, 'J', 'Q', 'K', 'A'];
    if (card >= 2 && card <= 6) {
      count++;
    } else if (highCards.find((item) => item === card)) {
      count--;
    }
    let decision = count > 0 ? 'Bet' : 'hold';
    console.log(count + ' ' + decision);
  }
  cc(2);
  cc(3);
  cc(7);
  cc('K');
  cc('A');
})();
