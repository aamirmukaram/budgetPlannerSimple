const expenseReasonEle = document.querySelector('#expense-reason');
const expenseAmountEle = document.querySelector('#expense-amount');
const expenseListEle = document.querySelector('#expense-list');
const alertController = document.querySelector('ion-alert-controller');
const clearExpenseBtnEle = document.querySelector('#clear-expense-btn');
const totalExpenseBtnEle = document.querySelector('#total-expense-btn');

clearExpenseBtnEle.onclick = () => {
    expenseReasonEle.value = '';
    expenseAmountEle.value = '';
};

let totalExpense = 0;

const addNewExpense = async (event) => {
    event.preventDefault();
    const expenseReason = expenseReasonEle.value;
    const expenseAmount = expenseAmountEle.value;

    if (!expenseReason.length || !expenseAmount.length) {
        const alert = await alertController.create({
            header: 'Invalid inputs',
            message: 'Please enter valid reason and amount!',
            buttons: ['Okay']
        });
        alert.present();
        return;
    }

    const expenseListItem = document.createElement('ion-item');

    const expenseListItemLabel = document.createElement('ion-label');
    expenseListItemLabel.textContent = `${expenseReason}: $${expenseAmount}`;
    expenseListItem.appendChild(expenseListItemLabel);

    expenseListEle.appendChild(expenseListItem);

    totalExpense += +expenseAmount;
    totalExpenseBtnEle.textContent = totalExpense;
};
