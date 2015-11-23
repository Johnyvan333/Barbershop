      var LoginLink = document.querySelector(".login");
      var LoginPopup = document.querySelector(".modal_user-login");
      var LoginClose = LoginPopup.querySelector(".modal-close");
      var LoginForm = LoginPopup.querySelector("form");
      var LoginName = LoginPopup.querySelector("[name='modal-login']");
      var LoginPassword = LoginPopup.querySelector("[name='modal-password']");
      var LoginStorage = localStorage.getItem("login");
      
      var MapLink = document.querySelectorAll(".footer-map");      
      var MapPopup = document.querySelector(".modal-map");
      var MapClose = MapPopup.querySelector(".modal-close");
      
      
      LoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        LoginPopup.classList.add('modal-show');
        if (LoginStorage) {
          LoginName.value = LoginStorage;
          LoginPassword.focus();
        } else {
        LoginName.focus();
        }
      });
      
      LoginForm.addEventListener("submit", function(event) {
        if (!LoginName.value || !LoginPassword.value) {
          event.preventDefault();
          LoginPopup.classList.remove("modal-error");
          LoginPopup.offsetWidth = LoginPopup.offsetWidth;
          LoginPopup.classList.add("modal-error");          
        } else {
          localStorage.setItem("login", LoginName.value);
        }
      });
      
      LoginClose.addEventListener('click', function(event) {
        event.preventDefault();
        LoginPopup.classList.remove('modal-show');
        LoginPopup.classList.remove('modal-error');
      });
      
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (LoginPopup.classList.contains("modal-show")) {
            LoginPopup.classList.remove('modal-show');
            LoginPopup.classList.remove('modal-error');            
          }
        }
      });
      

      function openMap(event) {
        event.preventDefault();
        MapPopup.classList.add("modal-show");    
      }

      for (var i = 0; i < MapLink.length; i++) {  
        MapLink[i].addEventListener("click", openMap);
      }

      MapClose.addEventListener('click', function(event) {
        event.preventDefault();
        MapPopup.classList.remove('modal-show');        
      });
      
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (MapPopup.classList.contains("modal-show")) {
            MapPopup.classList.remove('modal-show');                       
          }
        }
      });