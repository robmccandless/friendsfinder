$(document).ready(() => {
    console.log("Hello")
    $.ajax({
        method: "GET",
        url: "/api/friends"
    }).then(res => {
        console.log(res)
    })
})