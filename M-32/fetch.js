

  function loadData(){
    fetch("https://jsonplaceholder.typicode.com/todos/1") //promises to provide data
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  .then((res) => res.json()) //promises to provide data in object
  .then((data) => console.log(data)
  );

  }