const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile-img")
const name = document.getElementById("name")
const date = document.getElementById("date")


const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData(){
    header.innerHTML ='<img src="https://images.unsplash.com/photo-1593640495481-2fa682ab2297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"alt="">'
    title.innerHTML ='Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, ea?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'john Doe'
    date.innerHTML = 'nov 29, 2021'
 
    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))

    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}