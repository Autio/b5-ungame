/**
 * The Babylon Project - A Conversation Game
 * Main Application Logic
 */

(function() {
    'use strict';

    // ============================================
    // Game State
    // ============================================

    const state = {
        players: [],
        currentPlayerIndex: 0,
        currentCategory: 'all',
        round: 1,
        questionsAsked: 0,
        usedQuestions: {
            green: [],
            blue: [],
            grey: [],
            vorlon: [],
            shadows: []
        },
        cardDrawn: false
    };

    // ============================================
    // DOM Elements
    // ============================================

    const elements = {
        // Screens
        welcomeScreen: document.getElementById('welcome-screen'),
        gameScreen: document.getElementById('game-screen'),
        endScreen: document.getElementById('end-screen'),

        // Welcome screen
        playerList: document.getElementById('player-list'),
        playerNameInput: document.getElementById('player-name-input'),
        addPlayerBtn: document.getElementById('add-player-btn'),
        startGameBtn: document.getElementById('start-game-btn'),

        // Game screen
        currentPlayerName: document.getElementById('current-player-name'),
        roundNumber: document.getElementById('round-number'),
        cardDeck: document.getElementById('card-deck'),
        activeCard: document.getElementById('active-card'),
        cardCategory: document.getElementById('card-category'),
        cardContent: document.getElementById('card-content'),
        cardIcon: document.getElementById('card-icon'),
        categoryButtons: document.querySelectorAll('.category-btn'),
        passBtn: document.getElementById('pass-btn'),
        skipBtn: document.getElementById('skip-btn'),
        queueList: document.getElementById('queue-list'),

        // End screen
        totalQuestions: document.getElementById('total-questions'),
        totalRounds: document.getElementById('total-rounds'),
        playAgainBtn: document.getElementById('play-again-btn'),
        newPlayersBtn: document.getElementById('new-players-btn'),
        endSessionBtn: document.getElementById('end-session-btn')
    };

    // ============================================
    // Utility Functions
    // ============================================

    /**
     * Shuffle an array using Fisher-Yates algorithm
     */
    function shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    /**
     * Get a random item from an array
     */
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Show a specific screen
     */
    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    /**
     * Save state to localStorage
     */
    function saveState() {
        try {
            localStorage.setItem('b5-ungame-state', JSON.stringify({
                players: state.players,
                currentPlayerIndex: state.currentPlayerIndex,
                currentCategory: state.currentCategory,
                round: state.round,
                questionsAsked: state.questionsAsked,
                usedQuestions: state.usedQuestions
            }));
        } catch (e) {
            console.log('Could not save state:', e);
        }
    }

    /**
     * Load state from localStorage
     */
    function loadState() {
        try {
            const saved = localStorage.getItem('b5-ungame-state');
            if (saved) {
                const data = JSON.parse(saved);
                if (data.players && data.players.length >= 2) {
                    return data;
                }
            }
        } catch (e) {
            console.log('Could not load state:', e);
        }
        return null;
    }

    /**
     * Clear saved state
     */
    function clearState() {
        try {
            localStorage.removeItem('b5-ungame-state');
        } catch (e) {
            console.log('Could not clear state:', e);
        }
    }

    // ============================================
    // Player Management
    // ============================================

    /**
     * Add a player to the game
     */
    function addPlayer(name) {
        const trimmedName = name.trim();
        if (!trimmedName) return false;
        if (state.players.includes(trimmedName)) return false;
        if (state.players.length >= 10) return false;

        state.players.push(trimmedName);
        renderPlayerList();
        updateStartButton();
        saveState();
        return true;
    }

    /**
     * Remove a player from the game
     */
    function removePlayer(name) {
        const index = state.players.indexOf(name);
        if (index > -1) {
            state.players.splice(index, 1);
            renderPlayerList();
            updateStartButton();
            saveState();
        }
    }

    /**
     * Render the player list in the welcome screen
     */
    function renderPlayerList() {
        elements.playerList.innerHTML = state.players.map(player => `
            <div class="player-tag">
                <span>${escapeHtml(player)}</span>
                <button class="remove-player" data-player="${escapeHtml(player)}" aria-label="Remove ${escapeHtml(player)}">×</button>
            </div>
        `).join('');

        // Add event listeners to remove buttons
        elements.playerList.querySelectorAll('.remove-player').forEach(btn => {
            btn.addEventListener('click', () => {
                removePlayer(btn.dataset.player);
            });
        });
    }

    /**
     * Update the start button state
     */
    function updateStartButton() {
        elements.startGameBtn.disabled = state.players.length < 2;
    }

    /**
     * Escape HTML to prevent XSS
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ============================================
    // Game Flow
    // ============================================

    /**
     * Start the game
     */
    function startGame() {
        if (state.players.length < 2) return;

        // Shuffle players for random turn order
        state.players = shuffle(state.players);
        state.currentPlayerIndex = 0;
        state.round = 1;
        state.questionsAsked = 0;
        state.cardDrawn = false;

        // Reset used questions
        Object.keys(state.usedQuestions).forEach(key => {
            state.usedQuestions[key] = [];
        });

        showScreen('game-screen');
        updateGameUI();
        resetCardArea();
        saveState();
    }

    /**
     * Update all game UI elements
     */
    function updateGameUI() {
        // Update current player
        elements.currentPlayerName.textContent = state.players[state.currentPlayerIndex];
        elements.roundNumber.textContent = state.round;

        // Update player queue
        renderPlayerQueue();

        // Update buttons
        elements.passBtn.disabled = !state.cardDrawn;
        elements.skipBtn.disabled = !state.cardDrawn;
    }

    /**
     * Render the player queue
     */
    function renderPlayerQueue() {
        elements.queueList.innerHTML = state.players.map((player, index) => {
            let classes = 'queue-player';
            if (index === state.currentPlayerIndex) {
                classes += ' active';
            } else if (index === (state.currentPlayerIndex + 1) % state.players.length) {
                classes += ' next';
            }
            return `<span class="${classes}">${escapeHtml(player)}</span>`;
        }).join('');
    }

    /**
     * Reset the card area to show the deck
     */
    function resetCardArea() {
        elements.cardDeck.classList.remove('disabled');
        elements.activeCard.classList.remove('visible');
        state.cardDrawn = false;
        elements.passBtn.disabled = true;
        elements.skipBtn.disabled = true;
    }

    /**
     * Draw a card
     */
    function drawCard() {
        if (state.cardDrawn) return;

        const question = getQuestion(state.currentCategory);
        if (!question) {
            // All questions used - reshuffle
            Object.keys(state.usedQuestions).forEach(key => {
                state.usedQuestions[key] = [];
            });
            drawCard();
            return;
        }

        // Show the card
        displayCard(question);
        state.cardDrawn = true;
        state.questionsAsked++;

        // Update UI
        elements.cardDeck.classList.add('disabled');
        elements.passBtn.disabled = false;
        elements.skipBtn.disabled = false;

        saveState();
    }

    /**
     * Get a question from the selected category (or random)
     */
    function getQuestion(category) {
        let categories = category === 'all'
            ? Object.keys(QUESTIONS)
            : [category];

        // Try each category until we find an unused question
        const shuffledCategories = shuffle(categories);

        for (const cat of shuffledCategories) {
            const available = QUESTIONS[cat].filter((q, index) =>
                !state.usedQuestions[cat].includes(index)
            );

            if (available.length > 0) {
                const question = getRandomItem(available);
                const index = QUESTIONS[cat].indexOf(question);
                state.usedQuestions[cat].push(index);

                return {
                    ...question,
                    category: cat
                };
            }
        }

        return null;
    }

    /**
     * Display a card with the question
     */
    function displayCard(question) {
        const categoryInfo = CATEGORIES[question.category];

        // Update card content
        elements.cardCategory.textContent = categoryInfo.name;
        elements.cardContent.textContent = question.text;
        elements.cardIcon.textContent = question.icon || categoryInfo.icon;

        // Apply category styling
        const cardFront = elements.activeCard.querySelector('.card-front');
        cardFront.className = 'card-front ' + question.category;

        // Show the card with animation
        elements.activeCard.classList.add('visible');
    }

    /**
     * Pass to the next player
     */
    function passToNext() {
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;

        // Check if we've completed a round
        if (state.currentPlayerIndex === 0) {
            state.round++;
        }

        resetCardArea();
        updateGameUI();
        saveState();
    }

    /**
     * Skip the current question
     */
    function skipQuestion() {
        drawCard();
    }

    /**
     * End the game session
     */
    function endGame() {
        // Update stats
        elements.totalQuestions.textContent = state.questionsAsked;
        elements.totalRounds.textContent = state.round;

        showScreen('end-screen');
        clearState();
    }

    /**
     * Play again with same players
     */
    function playAgain() {
        state.currentPlayerIndex = 0;
        state.round = 1;
        state.questionsAsked = 0;
        state.cardDrawn = false;

        // Reset used questions
        Object.keys(state.usedQuestions).forEach(key => {
            state.usedQuestions[key] = [];
        });

        // Reshuffle players
        state.players = shuffle(state.players);

        showScreen('game-screen');
        updateGameUI();
        resetCardArea();
        saveState();
    }

    /**
     * Start with new players
     */
    function newPlayers() {
        state.players = [];
        state.currentPlayerIndex = 0;
        state.round = 1;
        state.questionsAsked = 0;
        state.cardDrawn = false;

        Object.keys(state.usedQuestions).forEach(key => {
            state.usedQuestions[key] = [];
        });

        renderPlayerList();
        updateStartButton();
        showScreen('welcome-screen');
        clearState();
    }

    /**
     * Set the current category
     */
    function setCategory(category) {
        state.currentCategory = category;

        // Update active button
        elements.categoryButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        saveState();
    }

    // ============================================
    // Event Listeners
    // ============================================

    function initEventListeners() {
        // Add player
        elements.addPlayerBtn.addEventListener('click', () => {
            const name = elements.playerNameInput.value;
            if (addPlayer(name)) {
                elements.playerNameInput.value = '';
                elements.playerNameInput.focus();
            }
        });

        // Enter key to add player
        elements.playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const name = elements.playerNameInput.value;
                if (addPlayer(name)) {
                    elements.playerNameInput.value = '';
                }
            }
        });

        // Start game
        elements.startGameBtn.addEventListener('click', startGame);

        // Draw card
        elements.cardDeck.addEventListener('click', drawCard);

        // Category selection
        elements.categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                setCategory(btn.dataset.category);
            });
        });

        // Game controls
        elements.passBtn.addEventListener('click', passToNext);
        elements.skipBtn.addEventListener('click', skipQuestion);
        elements.endSessionBtn.addEventListener('click', endGame);

        // End screen
        elements.playAgainBtn.addEventListener('click', playAgain);
        elements.newPlayersBtn.addEventListener('click', newPlayers);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (elements.gameScreen.classList.contains('active')) {
                switch(e.key) {
                    case ' ':
                    case 'Enter':
                        if (!state.cardDrawn) {
                            e.preventDefault();
                            drawCard();
                        }
                        break;
                    case 'ArrowRight':
                    case 'n':
                        if (state.cardDrawn) {
                            e.preventDefault();
                            passToNext();
                        }
                        break;
                    case 's':
                        if (state.cardDrawn) {
                            e.preventDefault();
                            skipQuestion();
                        }
                        break;
                }
            }
        });
    }

    // ============================================
    // Initialization
    // ============================================

    function init() {
        initEventListeners();

        // Check for saved state
        const savedState = loadState();
        if (savedState && savedState.players.length >= 2) {
            // Restore state
            state.players = savedState.players;
            state.currentPlayerIndex = savedState.currentPlayerIndex;
            state.currentCategory = savedState.currentCategory;
            state.round = savedState.round;
            state.questionsAsked = savedState.questionsAsked;
            state.usedQuestions = savedState.usedQuestions;

            // Show welcome screen with players already added
            renderPlayerList();
            updateStartButton();

            // Set the saved category
            setCategory(state.currentCategory);
        }

        // Focus the input
        elements.playerNameInput.focus();
    }

    // Start the app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
