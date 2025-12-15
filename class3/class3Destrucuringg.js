 const arr1 = [10,20,30,40];
        let [a,b,c] = arr1;
        console.log(a);
        //console.log(b);
        console.log(c);

        //default value
        const arr2 = [100,300];
        const [a1,a2,a3 = 500] = arr2;
        console.log(a1,a2,a3);

        //swapping values
         let x = 20, y = 50;
         [x,y] = [y,x];
         console.log(x , y);

         //object destructing

        const student = {
            name : "Alice",
            age : 30,
            subjects:{
                sub1: "React",
                sub2: "Node"
            }
        };
        const {age,name, state = "Punjab",subjects} = student;
        console.log(age);
        console.log(name);
        console.log(state);
        console.log(subjects.sub1, subjects.sub2);