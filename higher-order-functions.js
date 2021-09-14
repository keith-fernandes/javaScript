const lukeLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke successfuly loged!"
  }
  
  const leiaLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia successfuly loged!"
  }
  
  console.log(lukeLogin())
  console.log(leiaLogin())

  // DRY - dont repeat yourself
  const userLogin = (person) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return `${person} successfuly loged on the system!`
  }
  
  console.log(userLogin("Luke"))

  // higher order function 

  const access = (name) => {
    return `${name} successfuly loged on the system!`
  }
  
  const loginUser = (name) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return access(name)
  }
  
  console.log(loginUser("Luke"))

  // receiving and returning function
  const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }
  console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))