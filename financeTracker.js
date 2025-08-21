// Personal Finance Tracker

// Store all expenses
let expenses = [];
let nextId = 1; // Auto-incrementing ID

// Utility function: format numbers with commas
function formatAmount(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 1. Add a New Expense
function addExpense(description, amount, category, date = new Date().toISOString().slice(0, 10)) {
  let expense = {
    id: nextId++,
    description: description,
    amount: amount,
    category: category,
    date: date
  };
  expenses.push(expense);
  console.log(`Expense added: ${description} - ${formatAmount(amount)} [${category}] on ${date}`);
}

// 2. List All Expenses
function listExpenses() {
  if (expenses.length === 0) {
    console.log("No expenses recorded.");
    return;
  }

  console.log("Expenses:");
  expenses.forEach(exp => {
    console.log(`${exp.id}. ${exp.description} - ${formatAmount(exp.amount)} [${exp.category}] on ${exp.date}`);
  });
}

// 3. Calculate Total Expenses
function getTotalExpenses() {
  let total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  console.log(`Total Expenses: ${formatAmount(total)}`);
}

// 4. Filter by Category
function filterExpenses(category) {
  let filtered = expenses.filter(exp => exp.category.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    console.log(`No expenses found for category: ${category}`);
    return;
  }

  console.log(`${category} Expenses:`);
  filtered.forEach(exp => {
    console.log(`${exp.id}. ${exp.description} - ${formatAmount(exp.amount)} [${exp.category}] on ${exp.date}`);
  });
}

// 5. Delete an Expense
function deleteExpense(id) {
  let index = expenses.findIndex(exp => exp.id === id);
  if (index === -1) {
    console.log(`No expense found with ID ${id}`);
    return;
  }
  expenses.splice(index, 1);
  console.log(`Expense with ID ${id} has been deleted.`);
}

// BONUS: Edit an Expense
function editExpense(id, newDescription, newAmount, newCategory, newDate) {
  let expense = expenses.find(exp => exp.id === id);
  if (!expense) {
    console.log(`No expense found with ID ${id}`);
    return;
  }

  if (newDescription) expense.description = newDescription;
  if (newAmount) expense.amount = newAmount;
  if (newCategory) expense.category = newCategory;
  if (newDate) expense.date = newDate;

  console.log(`Expense with ID ${id} has been updated.`);
}

// BONUS: Filter by Date
function filterExpensesByDate(date) {
  let filtered = expenses.filter(exp => exp.date === date);

  if (filtered.length === 0) {
    console.log(`No expenses found for date: ${date}`);
    return;
  }

  console.log(`Expenses on ${date}:`);
  filtered.forEach(exp => {
    console.log(`${exp.id}. ${exp.description} - ${formatAmount(exp.amount)} [${exp.category}] on ${exp.date}`);
  });
}

// Test calls
addExpense("Lunch", 2000, "Food", "2025-08-18");
addExpense("Bus Fare", 500, "Transport", "2025-08-18");
addExpense("Coffee", 1500, "Food", "2025-08-19");

listExpenses();
getTotalExpenses();
filterExpenses("Food");
