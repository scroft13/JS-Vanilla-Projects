//select sidebar toggle and close-button
const toggle = document.querySelector('.sidebar-toggle')
const close = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')
//if sidebar toggle, add .show-sidebar to remove toggle button

toggle.addEventListener('click', function () {
    console.log(sidebar.classList)
    if(!sidebar.classList.contains('show-sidebar')){
      sidebar.classList.add('show-sidebar')
    } else {
      sidebar.classList.remove('show-sidebar')
    }
})

close.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})


//if close-button, remove .show-sidebar class and place toggle back
