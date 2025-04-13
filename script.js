
// Countdown timer
function updateCountdown() {
    let minutes = 15;
    let seconds = 0;
    
    const countdownElement = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                countdownElement.textContent = 'OFFER EXPIRED!';
                document.getElementById('claimButton').disabled = true;
                document.getElementById('claimButton').style.opacity = '0.7';
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        
        countdownElement.textContent = `OFFER EXPIRES IN: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Falling coins animation
function createCoins() {
    const animationContainer = document.getElementById('crashAnimation');
    const colors = ['#FFD700', '#FFA500', '#FF8C00'];
    
    setInterval(() => {
        const coin = document.createElement('div');
        coin.className = 'coin';
        
        // Random size between 10 and 25px
        const size = Math.random() * 15 + 10;
        coin.style.width = `${size}px`;
        coin.style.height = `${size}px`;
        
        // Random position at top
        coin.style.left = `${Math.random() * 100}%`;
        coin.style.top = `-${size}px`;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        coin.style.animationDuration = `${duration}s`;
        
        // Remove coin after animation completes
        setTimeout(() => {
            coin.remove();
        }, duration * 1000);
        
        animationContainer.appendChild(coin);
    }, 300);
}

// Button click effect
// document.getElementById('claimButton').addEventListener('click', function() {
    // In a real app, this would redirect to registration
//    alert('Redirecting to bonus claim page...');
    
    // Create a temporary click effect
//     this.style.transform = 'scale(0.95)';
//    setTimeout(() => {
  //      this.style.transform = 'scale(1)';
//    }, 200);
//   });

// Start animations when page loads
window.onload = function() {
    updateCountdown();
    createCoins();
};
