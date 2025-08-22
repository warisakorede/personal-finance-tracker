const expenses = [];
let id = 1;

function formatAmount(amount) {
  return amount.toLocaleString();
}

function addExpense(description, amount, category, date = new Date().toISOString().slice(0, 10)) {
  const expense = {
    id: id++,
    description,
    amount,
    category,
    date
  }
  expenses.push(expense)
  console.log(`Expense added: ${description} - ${formatAmount(amount)} [${category}]`)
}

function listExpenses(expense) {
  expenses.forEach(expense => {
    console.log(`Expenses: ${expense.id} - ${expense.description} - ${formatAmount(expense.amount)} [${expense.category}]`)
  })
}

function getTotalExpenses(expense) {
  let total = 0;
  expenses.forEach(expense => {
    total += expense.amount
  })
  console.log(`Total Expenses: ${formatAmount(total)}`)
}

function filterExpenses(category) {
  let filtered = expenses.filter(expense => expense.category === category)

  filtered.forEach(expense => {
    console.log(`${category} Expenses: ${expense.id} - ${expense.description} - ${formatAmount(expense.amount)}`)
  })
}

function filterExpensesByDate(date) {
  let filtered = expenses.filter(expense => expense.date === date)

  filtered.forEach(expense => {
    console.log(`${date} Expenses: ${expense.id} - ${expense.description} - ${formatAmount(expense.amount)}`)
  })
}

function deleteExpense(id) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      expenses.splice(i, 1);
      console.log(`Expense with ID ${id} has been deleted`);
    }
  }
}

function editExpense(id, newDescription, newAmount, newCategory) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      expenses[i].description = newDescription;
      expenses[i].amount = newAmount;
      expenses[i].category = newCategory;
      console.log(`Expense with ID ${id} has been edited`);
      break;
    }
  }

}

addExpense("Dettol", 500, "Skin care", "2025-08-22");
addExpense("Amala", 5000, "Food", "2025-08-22");
addExpense("Books", 10000, "Stationery", "2025-08-22");
addExpense("Fried Chicken", 7000, "Food", "2025-08-23");
addExpense("Egg", 500, "Food", "2025-08-23");

getTotalExpenses()
editExpense(2, "Beef", 4744, "Food");
filterExpenses("food")
deleteExpense(2)
listExpenses();
filterExpensesByDate("2025-08-22")