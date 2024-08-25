// Get elements
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');
const dashboardSection = document.getElementById('dashboard-section');
const receiptsSection = document.getElementById('receipts-section');
const paymentSection = document.getElementById('payment-section');
const scheduleSection = document.getElementById('schedule-section');
const supplementStoreSection = document.getElementById('supplement-store-section');
const nutritionAdviceSection = document.getElementById('nutrition-advice-section');
const personalTrainingSection = document.getElementById('personal-training-section');

const viewReceiptsBtn = document.getElementById('view-receipts-btn');
const makePaymentBtn = document.getElementById('make-payment-btn');
const viewScheduleBtn = document.getElementById('view-schedule-btn');
const supplementStoreBtn = document.getElementById('supplement-store-btn');
const nutritionAdviceBtn = document.getElementById('nutrition-advice-btn');
const personalTrainingBtn = document.getElementById('personal-training-btn');

// Login functionality
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Validate login credentials
  if (email === 'admin@example.com' && password === 'password') {
    loginError.textContent = '';
    dashboardSection.hidden = false;
    loginForm.hidden = true;
  } else {
    loginError.textContent = 'Invalid email or password';
  }
});

// Dashboard functionality
viewReceiptsBtn.addEventListener('click', () => {
  dashboardSection.hidden = true;
  receiptsSection.hidden = false;
});

makePaymentBtn.addEventListener('click', () => {
  dashboardSection.hidden = true;
  paymentSection.hidden = false;
});

viewScheduleBtn.addEventListener('click', () => {
  dashboardSection.hidden = true;
  scheduleSection.hidden = false;
});

supplementStoreBtn.addEventListener('click', () => {
  dashboardSection.hidden = true;
  supplementStoreSection.hidden = false;
});

nutritionAdviceBtn.addEventListener('click', () => {
  dashboardSection.hidden = true;
  nutritionAdviceSection.hidden = false;
});

personalTrainingBtn.addEventListener('click', () => {
  dashboardSection.hidden = true;
  personalTrainingSection.hidden = false;
});

// Receipts functionality
const receiptsList = document.getElementById('receipts-list');
receiptsList.innerHTML = `
  <li>Receipt 1</li>
  <li>Receipt 2</li>
  <li>Receipt 3</li>
`;

// Payment functionality
const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  console.log(`Payment of ${amount} made successfully`);
});

// Schedule functionality
const scheduleList = document.getElementById('schedule-list');
scheduleList.innerHTML = `
  <li>Schedule 1</li>
  <li>Schedule 2</li>
  <li>Schedule 3</li>
`;

// Supplement Store functionality
const supplementList = document.getElementById('supplement-list');
supplementList.innerHTML = `
  <li>Supplement 1</li>
  <li>Supplement 2</li>
  <li>Supplement 3</li>
`;

// Nutrition Advice functionality