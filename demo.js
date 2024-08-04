
function hi(){
    return "hi";
}
class Employee{
    empid;
    ename;
    salary;

  constructor(empid,ename,salary){
    this.empid=empid
    this.ename=ename
    this.salary=salary
  }

  hello(){
    return "hello world"
  }

  printEmp(){
    console.log("empid:"+this.empid)
    console.log("ename:"+this.ename)
    console.log("salary:"+this.salary)
  }

}

class Manager extends Employee{
 managerAllowance;

    constructor(empid,ename,salary){
        super(empid,ename,salary);
        this.managerAllowance=0.1*salary;

      }

      printEmp(){
        super.printEmp()
        console.log("Allowance:"+this.managerAllowance)
      }

}

m=new Manager(1,"abc",99000);
m.printEmp()