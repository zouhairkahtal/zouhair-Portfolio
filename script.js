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