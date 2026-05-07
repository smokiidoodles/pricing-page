
let isAnnual = true;

const prices = {
  per: {
    a: '£8.33',
    m: '£10.99',
    ap: '/ mo · billed annually',
    mp: '/ month'
  },

  pro: {
    a: '£10.83',
    m: '£13.99',
    ap: '/ mo · billed annually',
    mp: '/ month'
  },

  team: {
    a: '£14.17',
    m: '£17.99',
    ap: '/ mo per user · annually',
    mp: '/ month per user'
  }
};


const toggleButton = document.getElementById('togBtn');
const annualLabel = document.getElementById('lbl-a');
const monthlyLabel = document.getElementById('lbl-m');


function updatePricing() {

  const mode = isAnnual ? 'a' : 'm';
  const period = isAnnual ? 'ap' : 'mp';

  document.getElementById('perP').textContent = prices.per[mode];
  document.getElementById('perPer').textContent = prices.per[period];

  document.getElementById('proP').textContent = prices.pro[mode];
  document.getElementById('proPer').textContent = prices.pro[period];

  document.getElementById('teamP').textContent = prices.team[mode];
  document.getElementById('teamPer').textContent = prices.team[period];

  toggleButton.classList.toggle('monthly');

  annualLabel.classList.toggle('active');
  monthlyLabel.classList.toggle('active');
}


toggleButton.addEventListener('click', () => {
  isAnnual = !isAnnual;
  updatePricing();
});


const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {

  button.addEventListener('click', () => {

    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');

    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer').forEach(item => {
      item.classList.remove('open');
    });

    document.querySelectorAll('.faq-icon').forEach(item => {
      item.textContent = '+';
    });

    if (!isOpen) {
      answer.classList.add('open');
      icon.textContent = '−';
    }
  });
});