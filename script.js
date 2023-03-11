
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname)
        {
            for(let tablink of tablinks)
            {
                tablink.classList.remove("active-links");
            }

            for(let tabcontent of tabcontents)
            {
                tabcontent.classList.remove("active-tab");
            }
            //for the red underline on click
            event.currentTarget.classList.add("active-links");
            //display the content on click
            document.getElementById(tabname).classList.add("active-tab");
        }

       

            var sdmenu = document.getElementById("sidemenu");

            function openmenu()
            {
                sdmenu.style.right="0";
            }
            function closemenu()
            {
                sdmenu.style.right="-200px";
            }

        
    
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzroomJfBz8E9uybEN5ks28HMrkHN-MLYjHSHzu80Vd3geD5SzAaeOVpOQxV3ObdK-g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
      {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function()
        {
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })