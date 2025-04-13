document.addEventListener('DOMContentLoaded', function() {
    // Handle back button click
    document.getElementById('back-btn').addEventListener('click', function() {
        window.history.back();
    });
    
    // Create animated elements
    createStars();
    
    // Add matrix rain effect
    createMatrixRain();
    
    // Add binary particles
    createBinaryParticles();
    
    // Add parallax effect
    document.addEventListener('mousemove', parallaxEffect);
    
    // Terminal typing effect
    typeTerminalText();
    
    // Initialize game functionality
    initGame();
    
    // Setup SVG interactivity
    setupSvgInteractivity();
    
    // Create matrix code block
    createMatrixCodeBlock();
});

/* Utility function */
function createElementWithClass(tag, className, textContent) {
    const el = document.createElement(tag);
    el.className = className;
    if (textContent) el.textContent = textContent;
    return el;
}

/* ====================
   Stars and Matrix Rain
===================== */
function createStars() {
    // Create stars in the illustration
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.querySelector('.illustration').appendChild(starsContainer);
    
    const starCount = 30;
    
    for (let i = 0; i < starCount; i++) {
        const star = createElementWithClass('div', 'star');
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

function createMatrixRain() {
    const matrixContainer = document.getElementById('matrix-rain');
    const columns = Math.floor(window.innerWidth / 20);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"_&^#@!?;:[]{}|\\<>';
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = `${i * 20}px`;
        column.style.width = '20px';
        column.style.top = '0';
        
        const columnHeight = Math.floor(Math.random() * 20) + 5;
        const animationDelay = Math.random() * 2;
        
        for (let j = 0; j < columnHeight; j++) {
            const char = createElementWithClass('div', 'matrix-rain-char');
            char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            char.style.animationDuration = `${Math.random() * 3 + 1}s`;
            char.style.animationDelay = `${animationDelay + (j * 0.1)}s`;
            char.style.opacity = j === 0 ? '1' : `${1 - (j / columnHeight)}`;
            column.appendChild(char);
        }
        matrixContainer.appendChild(column);
    }
}

function createBinaryParticles() {
    // Create binary particles
    const binaryContainer = document.createElement('div');
    binaryContainer.className = 'binary-particles';
    document.querySelector('.illustration').appendChild(binaryContainer);
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = createElementWithClass('div', 'binary-particle');
        particle.textContent = Math.random() > 0.5 ? '1' : '0';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        binaryContainer.appendChild(particle);
    }
}

function createMatrixCodeBlock() {
    const codeBlock = document.createElement('div');
    codeBlock.className = 'matrix-code-block';
    document.querySelector('.illustration').appendChild(codeBlock);
    
    const characters = '01';
    const rows = 10;
    const cols = 15;
    
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.height = '8px';
        row.style.marginBottom = '2px';
        
        for (let j = 0; j < cols; j++) {
            const char = document.createElement('div');
            char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            char.style.color = 'var(--primary-color)';
            char.style.fontSize = '8px';
            char.style.width = '8px';
            char.style.height = '8px';
            char.style.opacity = Math.random() * 0.5 + 0.3;
            
            // Randomly change the character
            setInterval(() => {
                if (Math.random() > 0.7) {
                    char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
                }
            }, Math.random() * 2000 + 1000);
            
            row.appendChild(char);
        }
        
        codeBlock.appendChild(row);
    }
}

/* ====================
   Parallax Effect
===================== */
function parallaxEffect(e) {
    const svgContainer = document.querySelector('.hacker-svg-container');
    const svg = svgContainer ? svgContainer.querySelector('svg') : null;
    const eyes = svg ? svg.getElementById('eyes') : null;
    const stars = document.querySelector('.stars');
    const errorMessage = document.querySelector('.error-message');
    
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    if(svg) {
        svg.style.transform = `scale(1.05) translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
    
    if(eyes) {
        eyes.style.transform = `translate(${mouseX * 5}px, ${mouseY * 5}px)`;
    }
    
    if(stars) {
        stars.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
    
    if(errorMessage) {
        errorMessage.style.textShadow = `${mouseX * 10}px ${mouseY * 10}px 15px rgba(0, 255, 0, 0.3), ${mouseX * -10}px ${mouseY * -10}px 15px rgba(0, 255, 0, 0.3)`;
    }
}

/* ====================
   Terminal Typing Effect
===================== */
function typeTerminalText() {
    const terminalContainer = createElementWithClass('div', 'terminal-container');
    document.querySelector('.error-container').appendChild(terminalContainer);
    
    const terminal = createElementWithClass('div', 'terminal');
    terminalContainer.appendChild(terminal);
    
    const terminalText = [
        '> ERROR 404: ACCESS_DENIED',
        '> INITIATING HACK PROTOCOL...',
        '> BYPASSING SECURITY LAYERS...',
        '> FIREWALL DETECTED. ENCRYPTION LEVEL: MAXIMUM',
        '> HACK ATTEMPT FAILED. SYSTEM LOCKED.'  
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    const typingDelay = 80;
    
    function typeWriter() {
        if (lineIndex < terminalText.length) {
            const currentLine = terminalText[lineIndex];
            if (charIndex <= currentLine.length) {
                terminal.innerHTML = '';
                // Add previous completed lines
                for (let i = 0; i < lineIndex; i++) {
                    const p = document.createElement('p');
                    p.textContent = terminalText[i];
                    terminal.appendChild(p);
                }
                // Add current typing line
                const currentP = document.createElement('p');
                currentP.innerHTML = `${currentLine.substring(0, charIndex)}<span class="cursor">|</span>`;
                terminal.appendChild(currentP);
                
                charIndex++;
                setTimeout(typeWriter, typingDelay);
            } else {
                setTimeout(() => {
                    lineIndex++;
                    charIndex = 0;
                    typeWriter();
                }, 1000);
            }
        }
    }
    typeWriter();
}

/* ====================
   Game Functionality - Hacker Runner with Enhanced Graphics
===================== */
function initGame() {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    gameContainer.innerHTML = `
        <div class="game-button">
            <i class="fas fa-gamepad"></i>
            <span>Hack The System</span>
        </div>
        <div class="game-area hidden">
            <div class="game-background"></div>
            <div class="game-cityscape"></div>
            <div class="game-grid"></div>
            <div class="game-ground"></div>
            <div class="game-score">Security Level: <span id="score">0</span></div>
            <div class="game-character">
                <div class="character-body">
                    <div class="character-head"></div>
                    <div class="character-visor"></div>
                    <div class="character-torso"></div>
                    <div class="character-legs">
                        <div class="character-leg"></div>
                        <div class="character-leg"></div>
                    </div>
                </div>
            </div>
            <div class="character-trail"></div>
            <div class="game-particles"></div>
            <div class="game-scanlines"></div>
        </div>
    `;
    document.querySelector('.error-container').appendChild(gameContainer);
    
    const gameButton = gameContainer.querySelector('.game-button');
    const gameArea = gameContainer.querySelector('.game-area');
    const gameCharacter = gameContainer.querySelector('.game-character');
    const characterTrail = gameContainer.querySelector('.character-trail');
    const gameParticles = gameContainer.querySelector('.game-particles');
    const scoreElement = document.getElementById('score');
    const gameBackground = gameContainer.querySelector('.game-background');
    const gameCityscape = gameContainer.querySelector('.game-cityscape');
    
    let isGameActive = false;
    let score = 0;
    let highScore = localStorage.getItem('hackerRunnerHighScore') || 0;
    let jumping = false;
    let gravity = 0.9;
    let jumpForce = 0;
    let gameSpeed = 5;
    let leftKeyPressed = false;
    let obstacles = [];
    let lastObstacleTime = 0;
    let obstacleInterval = 1500; // Time between obstacles in ms
    let animationFrameId;
    let backgroundPosition = 0;
    let cityscapePosition = 0;
    let trailParticles = [];
    let gameParticlesList = [];
    
    // Create ambient particles
    function createAmbientParticles() {
        // Clear existing particles
        gameParticles.innerHTML = '';
        gameParticlesList = [];
        
        // Create new particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'game-particle';
            particle.style.width = `${Math.random() * 3 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            
            gameParticles.appendChild(particle);
            gameParticlesList.push(particle);
        }
    }
    
    // Create character trail particles
    function createTrailParticle() {
        if (!isGameActive) return;
        
        const characterRect = gameCharacter.getBoundingClientRect();
        const trailParticle = document.createElement('div');
        trailParticle.className = 'trail-particle';
        
        // Position at the character's feet
        trailParticle.style.left = `${Math.random() * 10 - 5}px`;
        
        characterTrail.appendChild(trailParticle);
        trailParticles.push({
            element: trailParticle,
            life: 500 // milliseconds
        });
        
        // Remove particle after animation
        setTimeout(() => {
            if (trailParticle.parentNode) {
                trailParticle.parentNode.removeChild(trailParticle);
            }
            trailParticles = trailParticles.filter(p => p.element !== trailParticle);
        }, 500);
    }
    
    // Update trail position
    function updateTrail() {
        const characterRect = gameCharacter.getBoundingClientRect();
        characterTrail.style.left = gameCharacter.style.left;
        characterTrail.style.bottom = gameCharacter.style.bottom;
        
        // Create trail particles periodically when not jumping
        if (!jumping && Math.random() > 0.7) {
            createTrailParticle();
        }
    }
    
    // Game controls
    function handleKeyPress(e) {
        if ((e.code === 'Space' || e.code === 'ArrowUp' || e.key === ' ')) {
            if (!jumping) {
                jump();
            } else if (!isGameActive) {
                // Restart game with Space key if game is over
                const restartBtn = gameArea.querySelector('.game-restart-btn');
                if (restartBtn) {
                    restartBtn.remove();
                    startGame();
                }
            }
        } else if (e.code === 'ArrowLeft' && isGameActive) {
            // Slow down with left arrow key
            gameSpeed = Math.max(2, gameSpeed - 0.5);
        }
    }
    
    // Touch controls for mobile
    gameArea.addEventListener('touchstart', function() {
        if (!jumping) {
            jump();
        }
    });
    
    // Jump function
    function jump() {
        if (!jumping) {
            jumping = true;
            jumpForce = -15; // Negative value to go up
            gameCharacter.classList.add('jumping');
            
            // Create jump effect particles
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createTrailParticle();
                }, i * 50);
            }
        }
    }
    
    // Create obstacle
    function createObstacle() {
        const obstacle = document.createElement('div');
        obstacle.classList.add('game-obstacle');
        
        // Randomly choose obstacle type
        const obstacleType = Math.random() > 0.7 ? 'firewall' : 'virus';
        obstacle.classList.add(obstacleType);
        
        // Add glitch effect to some obstacles
        if (Math.random() > 0.7) {
            obstacle.classList.add('glitch-effect');
        }
        
        // Create detailed obstacle graphics
        if (obstacleType === 'virus') {
            obstacle.innerHTML = `
                <div class="virus-body"></div>
                <div class="virus-spike"></div>
                <div class="virus-spike"></div>
                <div class="virus-spike"></div>
                <div class="virus-spike"></div>
            `;
        } else {
            obstacle.innerHTML = `
                <div class="firewall-body"></div>
                <div class="firewall-particles"></div>
            `;
            
            // Add fire particles
            const particlesContainer = obstacle.querySelector('.firewall-particles');
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement('div');
                particle.className = 'firewall-particle';
                particle.style.left = `${Math.random() * 20}px`;
                particle.style.top = `${Math.random() * 30}px`;
                particle.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
                particle.style.animationDelay = `${Math.random() * 0.5}s`;
                particlesContainer.appendChild(particle);
            }
        }
        
        gameArea.appendChild(obstacle);
        obstacles.push({
            element: obstacle,
            position: 100, // Start at right edge (100%)
            type: obstacleType
        });
    }
    
    // Create power-up
    function createPowerUp() {
        if (Math.random() > 0.9) { // 10% chance to spawn a power-up
            const powerUp = document.createElement('div');
            powerUp.classList.add('game-power-up');
            powerUp.innerHTML = `
                <div class="power-up-body"></div>
                <div class="power-up-core"></div>
                <div class="power-up-glow"></div>
            `;
            gameArea.appendChild(powerUp);
            obstacles.push({
                element: powerUp,
                position: 100,
                type: 'power-up'
            });
        }
    }
    
    // Update game state
    function updateGame() {
        if (!isGameActive) return;
        
        // Update score
        score++;
        scoreElement.textContent = score;
        
        // Increase game speed gradually
        if (score % 500 === 0) {
            gameSpeed += 0.5;
            // Decrease obstacle interval as game progresses
            obstacleInterval = Math.max(obstacleInterval - 100, 800);
        }
        
        // Gradually return to normal speed if left arrow is not pressed
        if (!leftKeyPressed && gameSpeed < 5) {
            gameSpeed = Math.min(5, gameSpeed + 0.05);
        }
        
        // Update character position (jumping physics)
        if (jumping) {
            // Apply gravity to jump force
            jumpForce += gravity;
            
            // Update character position
            let characterBottom = parseFloat(window.getComputedStyle(gameCharacter).bottom) || 20;
            let newBottom = characterBottom - jumpForce;
            
            // Check if character has landed
            if (newBottom <= 20) { // 20px is ground level
                newBottom = 20;
                jumping = false;
                jumpForce = 0;
                gameCharacter.classList.remove('jumping');
            }
            
            gameCharacter.style.bottom = newBottom + 'px';
        }
        
        // Update trail
        updateTrail();
        
        // Move background (parallax scrolling effect)
        backgroundPosition -= gameSpeed * 0.05;
        cityscapePosition -= gameSpeed * 0.1;
        
        if (backgroundPosition <= -100) {
            backgroundPosition = 0;
        }
        
        if (cityscapePosition <= -100) {
            cityscapePosition = 0;
        }
        
        gameBackground.style.transform = `translateX(${backgroundPosition}%)`;
        gameCityscape.style.transform = `translateX(${cityscapePosition}%)`;
        
        // Create new obstacles
        const currentTime = Date.now();
        if (currentTime - lastObstacleTime > obstacleInterval) {
            createObstacle();
            lastObstacleTime = currentTime;
            
            // Occasionally create power-ups
            createPowerUp();
        }
        
        // Update obstacles
        const characterRect = gameCharacter.getBoundingClientRect();
        
        for (let i = 0; i < obstacles.length; i++) {
            const obstacle = obstacles[i];
            obstacle.position -= gameSpeed * 0.1;
            
            if (obstacle.position < -10) {
                // Remove obstacle that went off-screen
                obstacle.element.remove();
                obstacles.splice(i, 1);
                i--;
                continue;
            }
            
            obstacle.element.style.right = (100 - obstacle.position) + '%';
            
            // Collision detection
            const obstacleRect = obstacle.element.getBoundingClientRect();
            
            if (
                characterRect.right > obstacleRect.left + 5 && 
                characterRect.left < obstacleRect.right - 5 &&
                characterRect.bottom > obstacleRect.top + 5 && 
                characterRect.top < obstacleRect.bottom - 5
            ) {
                if (obstacle.type === 'power-up') {
                    // Collect power-up
                    obstacle.element.remove();
                    obstacles.splice(i, 1);
                    i--;
                    
                    // Power-up effect: +100 points
                    score += 100;
                    scoreElement.textContent = score;
                    
                    // Visual feedback
                    showMessage('+100', 'power-up');
                    
                    // Create power-up collection effect
                    createPowerUpEffect(obstacleRect);
                } else {
                    // Game over on collision with obstacle
                    gameOver();
                    return;
                }
            }
        }
        
        // Continue game loop
        animationFrameId = requestAnimationFrame(updateGame);
    }
    
    // Create power-up collection effect
    function createPowerUpEffect(rect) {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'game-particle';
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.background = '#00ffff';
            particle.style.boxShadow = '0 0 5px #00ffff';
            
            // Position at power-up location
            const gameAreaRect = gameArea.getBoundingClientRect();
            const left = ((rect.left + rect.width/2) - gameAreaRect.left) / gameAreaRect.width * 100;
            const top = ((rect.top + rect.height/2) - gameAreaRect.top) / gameAreaRect.height * 100;
            
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            
            // Custom animation
            particle.style.animation = `particle-float ${Math.random() * 1 + 0.5}s linear forwards`;
            
            gameParticles.appendChild(particle);
            
            // Remove after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }
    }
    
    // Show message
    function showMessage(text, type) {
        const message = document.createElement('div');
        message.textContent = text;
        message.className = 'game-message ' + type;
        gameArea.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 1000);
    }
    
    // Start game
    function startGame() {
        isGameActive = true;
        score = 0;
        gameSpeed = 5;
        obstacles = [];
        jumping = false;
        jumpForce = 0;
        lastObstacleTime = Date.now();
        obstacleInterval = 1500;
        backgroundPosition = 0;
        cityscapePosition = 0;
        leftKeyPressed = false;
        
        // Clear any existing obstacles
        gameArea.querySelectorAll('.game-obstacle, .game-power-up').forEach(el => el.remove());
        
        // Reset character position
        gameCharacter.style.bottom = '20px';
        gameCharacter.style.left = '20%';
        
        // Create ambient particles
        createAmbientParticles();
        
        // Show game area
        gameArea.classList.remove('hidden');
        gameButton.innerHTML = '<i class="fas fa-stop"></i><span>Stop Game</span>';
        
        // Add event listeners
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        
        // Start game loop
        animationFrameId = requestAnimationFrame(updateGame);
    }
    
    // Key down handler
    function handleKeyDown(e) {
        handleKeyPress(e);
        if (e.code === 'ArrowLeft') {
            leftKeyPressed = true;
        }
    }
    
    // Key up handler
    function handleKeyUp(e) {
        if (e.code === 'ArrowLeft') {
            leftKeyPressed = false;
        }
    }
    
    // Game over
    function gameOver() {
        isGameActive = false;
        cancelAnimationFrame(animationFrameId);
        
        // Create explosion effect
        const characterRect = gameCharacter.getBoundingClientRect();
        const gameAreaRect = gameArea.getBoundingClientRect();
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'game-particle';
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            
            // Position at character location
            const left = ((characterRect.left + characterRect.width/2) - gameAreaRect.left) / gameAreaRect.width * 100;
            const top = ((characterRect.top + characterRect.height/2) - gameAreaRect.top) / gameAreaRect.height * 100;
            
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            particle.style.background = '#ff3300';
            
            // Add a specific event listener for space key to restart game
            document.addEventListener('keydown', function spaceRestart(e) {
                if (e.code === 'Space' || e.key === ' ') {
                    const restartBtn = gameArea.querySelector('.game-restart-btn');
                    if (restartBtn) {
                        restartBtn.remove();
                        startGame();
                        // Remove this specific event listener after restart
                        document.removeEventListener('keydown', spaceRestart);
                    }
                }
            });
            particle.style.boxShadow = '0 0 5px #ff3300';
            
            // Custom explosion animation
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 20;
            const duration = Math.random() * 1 + 0.5;
            
            particle.style.animation = 'none';
            particle.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                fill: 'forwards'
            });
            
            gameParticles.appendChild(particle);
            
            // Remove after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, duration * 1000);
        }
        
        // Check for high score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('hackerRunnerHighScore', highScore);
            showMessage('NEW HIGH SCORE: ' + score, 'high-score');
        } else {
            showMessage('GAME OVER - SCORE: ' + score, 'game-over');
        }
        
        // Add restart button
        const restartBtn = document.createElement('div');
        restartBtn.className = 'game-restart-btn';
        restartBtn.innerHTML = '<i class="fas fa-redo"></i> Retry';
        gameArea.appendChild(restartBtn);
        
        restartBtn.addEventListener('click', function() {
            restartBtn.remove();
            startGame();
        });
        
        // Remove event listeners
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        leftKeyPressed = false;
    }
    
    // Stop game
    function stopGame() {
        if (isGameActive) {
            isGameActive = false;
            cancelAnimationFrame(animationFrameId);
            gameArea.classList.add('hidden');
            gameButton.innerHTML = '<i class="fas fa-gamepad"></i><span>Hack The System</span>';
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            leftKeyPressed = false;
            
            // Clear obstacles
            gameArea.querySelectorAll('.game-obstacle, .game-power-up').forEach(el => el.remove());
        }
    }
    
    // Game button click handler
    gameButton.addEventListener('click', function() {
        if (!isGameActive) {
            startGame();
        } else {
            stopGame();
        }
    });
}

/* ====================
   SVG Interactivity
===================== */
function setupSvgInteractivity() {
    const svgContainer = document.querySelector('.hacker-svg-container');
    if (!svgContainer) return;
    
    const svg = svgContainer.querySelector('svg');
    if (!svg) return;
    
    const hackerHitbox = svg.getElementById('hacker-hitbox');
    const eyes = svg.getElementById('eyes');
    
    // Click interaction
    if (hackerHitbox) {
        hackerHitbox.addEventListener('click', function() {
            // Flash the eyes
            const eyeElements = svg.querySelectorAll('#eyes ellipse');
            eyeElements.forEach(eye => {
                eye.setAttribute('fill', '#39FF14');
                eye.setAttribute('rx', '10');
                eye.setAttribute('ry', '5');
                
                setTimeout(() => {
                    eye.setAttribute('fill', '#00ff00');
                    eye.setAttribute('rx', '8');
                    eye.setAttribute('ry', '4');
                }, 300);
            });
            
            // Show a "hacking" message
            const message = document.createElement('div');
            message.textContent = 'HACKING...';
            message.style.position = 'absolute';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
            message.style.color = 'var(--primary-color)';
            message.style.fontFamily = '"VT323", monospace';
            message.style.fontSize = '24px';
            message.style.fontWeight = 'bold';
            message.style.zIndex = '10';
            message.style.textShadow = '0 0 10px var(--primary-color)';
            svgContainer.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 1500);
        });
    }
}