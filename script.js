document.addEventListener("DOMContentLoaded",function()
{
    let c=document.querySelectorAll(".c label")

    let About=document.querySelectorAll(".About > *")
    let Education=document.querySelectorAll(".Education > *")
    let Skills=document.querySelectorAll(".Skills > *")
    let Projects=document.querySelectorAll(".Projects > *")
    let Experience=document.querySelectorAll(".Experience > *")
    let Ambition=document.querySelectorAll(".Ambition > *")
    let Hobbies=document.querySelectorAll(".Hobbies > *")
    let Contact=document.querySelectorAll(".Contact > *")
    c[0].style.color="white"

    let array=[About,Education,Skills,Projects,Experience,Ambition,Hobbies,Contact]
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array[i].length;j++)
        {
        array[i][j].style.display="none"
        }
    }
    for(let i=0;i<About.length;i++)
    {
        About[i].style.display="block"
    }
    for(let i=0;i<c.length;i++)
    {
        c[i].addEventListener("click",function()
    {
        let thing=i
        for(let j=0;j<c.length;j++)
        {
        c[j].style.color="black"
        }
        c[i].style.color="white"
        for(let i=0;i<array.length;i++)
            {
                for(let j=0;j<array[i].length;j++)
                {
                    if(i==thing){array[i][j].style.display="block"}
                    else{array[i][j].style.display="none"}
                    
                }
            }
    })
    }    
})