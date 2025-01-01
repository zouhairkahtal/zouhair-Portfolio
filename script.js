const section = document.querySelectorAll('section')
const navItems = document.querySelectorAll(' header nav a')

window.onscroll = () =>{
    section.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop -250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>= offset && top<offset+height){
            navItems.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })
}
////////////////////////////////////////

const text = document.getElementById('text')
let Ynaw = new Date().getFullYear();
const btn1 = document.getElementById('input1')
const btn2 = document.getElementById('input2')
const btn3 = document.getElementById('input3')

btn1.addEventListener('click',()=>{
    text.innerHTML=`
        <h1>I’m <span class="name">Z</span>ouhair Kahtal. I live in Casablanca, </h1>
                    <p>The story starts when I first explored the world of web design, fascinated by how lines of code could create something interactive and beautiful. It was during my early days in tech that I realized I could combine logic and creativity.</p>
                    <p>But my passion isn’t limited to screens—I also love drawing. With every stroke of a pencil, I find a way to express what words can’t.</p>
                    <q> Between coding and sketching, I’ve found a balance that keeps me inspired every day. </q>
    `
})
btn2.addEventListener('click',()=>{
    text.innerHTML=`
                       
                    <h1><span class="name">Personal information:</span></h1>
                    <p class="uppercase">FULL NAME: <span class="name">Z</span>OUHAIR KAHTAL</p>
                    <p class="uppercase">Location: Casablanca, Morocco</p>
                    <p class="uppercase">My hobbies: drawing, programming, and sports.</p>
                    <p class="uppercase">age: ${Ynaw - 2007} years old</p>
                    <p class="uppercase">e-mail: mi<span class="name">z</span>ouhair4@gmail.com</p>
                    <div class="accounts">
                        <a href="https://www.instagram.com/zouhair.k.17/"><svg class="svg" fill="#1f2937" width="64px" height="64px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" stroke="#1f2937" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></g></svg></a>
                        <a href="https://github.com/zouhairkahtal?tab=overview&from=2024-12-01&to=2024-12-31"><svg class="svg" width="64px" height="64px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#1f2937" stroke="#1f2937" transform="matrix(1, 0, 0, 1, 0, 0)" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.624"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg></a>
                        <a href="https://web.facebook.com/mi.zouhair.3"><svg class="svg" fill="#1f2937" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" width="64px" height="64px" stroke="#1f2937" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1v1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"></path> <rect class="st0" width="24" height="24"></rect> </g></svg></a>
                    </div>
    `
})
btn3.addEventListener('click',()=>{
    text.innerHTML=`
                    <p>The story starts when I first explored the world of web design, fascinated by how lines of code could create something interactive and beautiful. It was during my early days in tech that I realized I could combine logic and creativity.</p>
                    <p>But my passion isn’t limited to screens—I also love drawing. With every stroke of a pencil, I find a way to express what words can’t.</p>
                    <q> Between coding and sketching, I’ve found a balance that keeps me inspired every day. </q>
    `
})