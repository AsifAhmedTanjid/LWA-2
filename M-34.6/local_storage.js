const addNumberToLS = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("number", number);
};
const getNumberFromLS = () => {
  const number = localStorage.getItem("number");
  console.log("number from saved local storage", number);
};

const setObjectToLS =()=>{
    const customer ={name:'Asif', products:3,price:3400}
    const customerJSON =JSON.stringify(customer);
    localStorage.setItem("customer",customerJSON)

}

const getCustomerFromLS = () => {
  const customerJSON = localStorage.getItem("customer");
  const customer= JSON.parse(customerJSON);
  console.log("customer from saved local storage", customer);
};
