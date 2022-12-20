AOS.init();
/* ================ 
Show menu
=================*/
let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

navToggle.addEventListener('click',() => { 
    navMenu.classList.add('show-menu')
})
navClose.addEventListener('click', () => { 
    navMenu.classList.remove('show-menu')
})


/* ================ 
Show menu
=================*/
let navLink = document.querySelectorAll('.nav-link')
    navLink.forEach((n) =>  { 
        n.addEventListener('click', () => { 
            navMenu.classList.remove('show-menu')
        })
    })

/* ================ 
dark theme
=================*/


let themeButton = document.getElementById('theme-button'), 
    darkTheme = 'dark-theme'

themeButton.addEventListener('click', () => { 
    if(themeButton.classList.contains('light')) { 
        document.body.classList.add(darkTheme)
        themeButton.classList.remove('light')
        themeButton.classList.add('dark')
        themeButton.innerHTML = '<i class="fa-solid fa-sharp fa-sun change-theme"></i>'
    } else { 
        document.body.classList.remove(darkTheme)
        themeButton.classList.remove('dark')
        themeButton.classList.add('light')
        themeButton.innerHTML = '<i class="fa-solid fa-moon change-theme"></i>'
    }

})

/* ================ 
change background header when scroll down
=================*/
let scrollHeader = () => { 
    let header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('background-header')
                        : header.classList.remove('background-header')
}
window.addEventListener('scroll', scrollHeader)
