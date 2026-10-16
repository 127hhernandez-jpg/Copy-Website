console.log('Happy developing ✨')
function website(){
    let ls = localStorage.getItem();
}

function toggleSideBar(){
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("mainContent");
    const openButton = document.getElementById("open");
    sidebar.classList.toggle("closed");
    const isClosed = sidebar.classList.contains("closed");
    main.classList.toggle("open", isClosed);
    openButton.classList.toggle("visible", isClosed);
}