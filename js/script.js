// Scroll olduğunda header'ın görünümünü değiştir
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('mainHeader');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Scroll aşağı/yukarı kontrolü
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll aşağı
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll yukarı
            header.style.transform = 'translateY(0)';
        }
        
        // Background opacity ve border kontrolü
        if (currentScroll > 10) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.classList.add('scrolled');
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}); 

// Timer countdown function
function updateTimer() {
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  if (!days || !hours || !minutes || !seconds) return;

  let secondsLeft = parseInt(seconds.textContent);
  let minutesLeft = parseInt(minutes.textContent);
  let hoursLeft = parseInt(hours.textContent);
  let daysLeft = parseInt(days.textContent);

  setInterval(() => {
    secondsLeft--;
    
    if (secondsLeft < 0) {
      secondsLeft = 59;
      minutesLeft--;
      
      if (minutesLeft < 0) {
        minutesLeft = 59;
        hoursLeft--;
        
        if (hoursLeft < 0) {
          hoursLeft = 23;
          daysLeft--;
          
          if (daysLeft < 0) {
            daysLeft = 0;
            hoursLeft = 0;
            minutesLeft = 0;
            secondsLeft = 0;
          }
        }
      }
    }

    days.textContent = daysLeft;
    hours.textContent = hoursLeft;
    minutes.textContent = minutesLeft;
    seconds.textContent = secondsLeft;
  }, 1000);
}

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', updateTimer); 