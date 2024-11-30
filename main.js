// 1. //
 class Student{
    constructor( fname, lname, tel, address){
        this.fname = fname
        this.lname = lname
        this.tel = tel
        this.address = address
    }
    set ism(newName){
        this.fname = newName
    }
    get ism(){
        return this.fname
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
    info(){
        return `${this.fname} ${this.lname} ${this.tel} ${this.address}`
    }
}

export let student = new Student("Xalilillo", "Jamoliddinov", +998889990969, "Sergeli")
 export let student2 = new Student("Xalilillo", "Jamoliddinov","tel: " +998889990969, "manzil: Sergeli")
student.ism = "Jamshid"
student2.ism = "Jamshid"


//2. //
  class Teacher{
        constructor( fname, lname, address, salary, level){
            this.fname = fname
            this.lname = lname
            this.address = address
            this.salary = salary
            this.level = level
        }
        set joy(newAddress){
            this.address = newAddress
        }
        get joy(){
            return this.address
        }
        getFullName(){
            return `${this.fname} ${this.lname}`
        }
        info(){
           return `${this.fname} ${this.lname} ${this.address}  ${this.salary} ${this.level}`
        }
    }

    export  let teacher = new Teacher("Boburmirzo", "Rasulov", " Olmazor", "4000 mln", 1  )
    export let teacher2 = new Teacher("Boburmirzo", "Rasulov", "manzil: Olmazor", "level: 1", "ish haqi - 4000 mln"  )
    teacher.joy = "Qo'yliq"
    teacher2.joy = "manzil: Qo'yliq"


// 3. //
    class Group{
        constructor(name, room, teacher, level, studentCounts){
            this.name = name
            this.room = room
            this.teacher = teacher
            this.level = level
            this.studentCounts = studentCounts
        }
        set oy(newLevel){
            this.level = newLevel
        }
        get oy(){
            return this.level
        }
        fullInformation(){
          return  `${this.name} ${this.room} ${this.teacher} ${this.level} ${this.studentCounts}`
        }
    }
    export  let group = new Group("ReactJS | Frontend (Standard) ","Slack ", "Rasulov Boburmirzo", "level 4", 15)
    export let group2 = new Group("ReactJS | Frontend (Standard) yo'nalish","Slack xonasi", "O'qituvchining ismi: Rasulov Boburmirzo", "level 4", "O'quvchilar soni (15) ta")
    group.oy = 5
    group2.oy = "level: 5"
   

 // 4. //
    class Payment{
        constructor(from, to, amount, date, status){
            this.from = from
            this.to = to
            this.amount = amount
            this.date = date
            this.status = status
        }
        set ism(newFrom){
            this.from = newFrom
        }
        get ismoy(){
            return this.from
        }
        getStatus(){
            return ` ${this.from} ${this.to} ${this.amount} ${this.date} ${this.status}`
        }
    }
    export let payment = new Payment("Asror", "Jamshidga", 1000, `14:15:45`, true)
    export let payment2 = new Payment("Asrordan", "Jamshidga",  "14:15:45", "1000 so'm pul", "muvaffaqqyatli o'tkazildi.")
    payment.ism = "Baxodir"
    payment2.ism = "baxodir"


// 5. //
    class Salary{
        constructor( to, amount, date, type, status){
            this.to = to
            this.amount = amount
            this.type = type
            this.date = date
            this.status = status
        }
        set pul(newAmount){
            this.amount = newAmount
        }
        get pul(){
            return this.amount
        }
        getInfo(){
            return `  ${this.to} ${this.amount} ${this.date} ${this.type}  ${this.status}`
        }
    }
    export let salary = new Salary("Mike", 150, "21:52:05",  `USD`,   true)
    export let salary2 = new Salary("Mike", "21:52:05", 100, "USD", "oyligini oldi.")
    salary.pul = 100
   

// 6. //
    class Organization{
        constructor( name, founder, address, employeeCount){
            this.name = name
            this.founder = founder
            this.address = address
            this.employeeCount = employeeCount
        }
        set son(newEmployeeCount){
            this.employeeCount = newEmployeeCount
        }
        get son(){
            return this.employeeCount
        }
        getInfo(){
            return `  ${this.name} ${this.founder} ${this.address} ${this.employeeCount}`
        }
    }
    export let organization = new Organization("Najot talim", "Temurbek Adhamov", "Chilonzor", 400)
    export let organization2 = new Organization("Najot talim. ", "Asoschisi: Temurbek Adhamov ", "manzil: Chilonzor", "xodimlar soni 400dan ortiq.")
    organization.son = 450
    organization2.son = " xodimlar soni 450 dan ortiq."