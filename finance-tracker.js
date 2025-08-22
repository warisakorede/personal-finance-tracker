const expenses = [];
let id = 1;

function formatAmount(amount) {
  return amount.toLocaleString();
}

function addExpense(description, amount, category) {
  const expense = {
    id: id++,
    description,
    amount,
    category
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

function deleteExpense(id) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      expenses.splice(i, 1);
      console.log(`Expense with ID ${id} has been deleted`);
    }
  }
}


// function editExpense(id, newDescription, newAmount, newCategory) {
//   for (let i = 0; i < expenses.length; i++) {
//     if (expenses[i] = {
//       id: id,
//       description: newDescription,
//       amount: newAmount,
//       category: newCategory
//     });
//     console.log(`Expense with ID ${id} has been edited`);
//     break;
//   }
// }

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




addExpense("Amala", 2300, "Food");
addExpense("Fish", 2300, "Food");
addExpense("Amala", 2300, "Food");

getTotalExpenses()
editExpense(2, "Beef", 4744, "Food");
listExpenses();