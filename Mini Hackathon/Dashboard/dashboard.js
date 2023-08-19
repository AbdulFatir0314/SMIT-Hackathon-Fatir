const publish = document.getElementById("publishBtn");
const title = document.getElementById('title');
const titleDescrip = document.getElementById('descrip').innerText;
const send = document.getElementById("send")
publish.addEventListener('click', () => {

    send.innerHTML+=`
    

    <div style="padding-left: 350px; width: 45%;">
    <div class="row">
    <div class="leftcolumn">    
      <div class="card">
      <div class="fakeimg" style="padding-top:70px;"> <img id="pp" src="../Assets/Images/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="profile pic" style="width: 70px; height: 80px; border-radius: 360px;"></div>

    </div>
       
      </div>
      <div class="card">
        <h2> ${title.value}</h2>
        <h5> ${titleDescrip.value}</h5>
        
      </div>
    </div>
    `
})
