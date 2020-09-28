$(document).ready(()=>{
    
  $('.eat-burger').on('submit', function(e){
    e.preventDefault();

    let burger = $(this).children(".burger").val();
    console.log(burger);
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + burger
    }).then((data)=>{
      location.reload();
    });

  });
});