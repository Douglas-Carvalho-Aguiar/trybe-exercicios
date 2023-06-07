// Nova pessoa contratada
const employeeGenerator = (nome) =>{
  const email = nome.toLowerCase().replace(' ','_');
return {nome, email:`${email}@trybe.com`};
}

const newEmployees = () => {
  const employees = {
    id1: employeeGenerator('Douglas Aguiar'),
    id3: employeeGenerator('Bruna Garcia'),
    id2: employeeGenerator('carla'),
  };
  return employees;
};
console.log(newEmployees());





