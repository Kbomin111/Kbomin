const dra = document.querySelector("#dra")
const gam = document.querySelector("#gam")
const dra_gal = document.querySelector("#dra_gal")
const gam_gal = document.querySelector("#gam_gal")

dra.addEventListener('click',()=>{
    gam_gal.classList.add('hidden')
    dra_gal.classList.remove('hidden')
})

gam.addEventListener('click',()=>{
    dra_gal.classList.add('hidden')
    gam_gal.classList.remove('hidden')
})
