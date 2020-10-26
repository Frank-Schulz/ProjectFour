// Declare variables
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.nodeValue.trim() === '' || amount.nodeValue.trim === '') {
        alert('Please provide BOTH the text and amount inputs');
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value
        }
        transactions.push(transaction)
    }
}

// Generate Id
function generateId() {
    // Math.floor() function returns the largest integer less than or equal to a given number
    // Math.random function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range
    return Math.floor(Math.random() * 100000000)
}

// Add transaction to list
function addTransactionList(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value of amount
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeItem(${transaction.id})">x</button>`;

    list.appendChild(item);

}

