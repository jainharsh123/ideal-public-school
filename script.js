let principle = document.getElementById("principle");
let accountant = document.getElementById("accountant");


let allteachers = [
    {
        PrincipleObj : [
            {
                img :"images/ayuC.jpg",
                title : "Ayushman C"
            },
            {
                img :"images/ayuC.jpg",
                title : "Harsh S"
            },
            {
                img :"images/ayuC.jpg",
                title : "Shivam A"
            }

        ],
        AccountantObj : [
            {
                img :"images/accountant.avif",
                title :  "Harsh S"
            },
            {
                img :"images/accountant.avif",
                title : "Ayushman C"
            },
            {
                img :"images/accountant.avif",
                title : "Himanshu G"
            }
        ]
    }
]


for(let i=0; i< allteachers.length; i++){
    console.log(allteachers[i])
    let getdata = allteachers[i].PrincipleObj;
    for(let i of getdata){
        principle.innerHTML += ` <div class="card mt-3 me-3" style="width: 18rem;">
        <img src="${i.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${i.title}</p>
        </div>
    </div>`
    }
   
}
for(let i=0; i< allteachers.length; i++){
    console.log(allteachers[i])
    let getdata = allteachers[i].AccountantObj;
    for(let i of getdata){
        accountant.innerHTML += ` <div class="card mt-3 me-3" style="width: 18rem;">
        <img src="${i.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${i.title}</p>
        </div>
    </div>`
    }
 
}

