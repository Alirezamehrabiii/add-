const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const number = document.querySelector('input[type=number]')
const btn = document.querySelector('button');
const select = document.querySelector('.option1');

select.selected = 'minutes'

let date = new Date();
p1.innerHTML = date;








btn.addEventListener('click' , ()=>{

    function add(num , name){
        let onesec = 1000;
        let onemin = 60000;
        let onehours = 3600000;
        let oneday = 86400000;
        let oneweek = 604800000;
    
    
        if(arguments[1]=='seconds'){
    
            let a = num * onesec;
            let get = Date.parse(date);
            let set = get + a;
            let newdate = new Date(set);
            return newdate;
        }
    
        if(arguments[1]=='minutes'){
            
            let a = num * onemin ;
            let get = Date.parse(date);
            let set = get + a;
            let newdate = new Date(set);
            return newdate;
        }
    
        if(arguments[1]=='hours'){
            let a = num * onehours ;
            let get = Date.parse(date);
            let set = get + a;
            let newdate = new Date(set);
            return newdate;
        }
    
        if(arguments[1]=='days'){
            let a = num * oneday ;
            let get = Date.parse(date);
            let set = get + a;
            let newdate = new Date(set);
            return newdate;
        }
    
        if(arguments[1]=='weeks'){
            let a = num * oneweek ;
            let get = Date.parse(date);
            let set = get + a;
            let newdate = new Date(set);
            return newdate;
        }
    
    }
    p2.innerHTML = (add(Number(number.value), 'minutes'));

})
