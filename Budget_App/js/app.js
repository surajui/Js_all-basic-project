class UI{
    constructor(){
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector('.expense-feedback');
        this.budgetForm = document.getElementById('budget-form');
        this.budgetInput = document.getElementById('budget-input');
        this.budgetAmount = document.getElementById('budget-amount');
        this.expenseAmount = document.getElementById('expense-amount');
        this.balanceAmount = document.getElementById('balance-amount');
        this.balance = document.getElementById('balance');
        this.expenseForm = document.getElementById('expense-form');
        this.expenseInput = document.getElementById('expense-input');
        this.amountInput = document.getElementById('amount-input');
        this.expenseList = document.getElementById('expense-list');
        this.itemList = [];
        this.itemID = 0;
    }
    //submit budgetForm method
    submitBudgetForm(){
        // console.log('this is from budgetForm method')
        const value = this.budgetInput.value;
        if(value === '' || value < 0){
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = `<p>Value con't be empty or negative</p>`;
            const self = this;
        setTimeout(function(){
         self.budgetFeedback.classList.remove('showItem');
        },3000);
        }
        else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value = '';
            this.showBalance();
        }
    }
    showBalance(){
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
    }
    //submit expense form
    submitExpenseForm(){
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;
        if(  expenseValue === '' ||amountValue === '' || amountValue < 0){
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = `<p>should not be empty and negative</p>`;
        }
        else{
           let amount = parseInt(amountValue);
           this.amountInput.value = "";
           this.expenseInput.value = ""; 
           let expense = {
            id:this.itemID,
            title:expenseValue,
            amount:amount,
           }
           this.itemID++;
           this.itemList.push(expense);
           this.addExpense(expense);
           this.showBalance();
        } 
    }
    //addExpense
    addExpense(expense){
        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML= `
        <div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item">-${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
         <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fa fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fa fa-trash"></i>
          </a>
         </div>
        </div>
        `;
        this.expenseList.appendChild(div);
    }
    totalExpense(){
        let total = 0;
        if(this.itemList.length > 0){
            total = this.itemList.reduce(function(acc,curr){
                acc += curr.amount;
                return acc;
            },0)
        }
        this.expenseAmount.textContent = total;
        return total;
    }
}

function eventListenters(){
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    //create instance of class constructor
    const ui = new UI();

    //create budgetForm submit
    budgetForm.addEventListener('submit',function(event){
        event.preventDefault();
        ui.submitBudgetForm();
        //  console.log("hello from budgerForm");
    })
    //create expense form submit
    expenseForm.addEventListener('submit',function(event){
     event.preventDefault();
     ui.submitExpenseForm();
    })
    //create expense click
    expenseList.addEventListener('click',function(event){
    console.log(event.target);
    })
}
document.addEventListener('DOMContentLoaded',function(){
    eventListenters();
})