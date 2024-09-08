document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const commentTextArea = document.getElementById('new-comment-text');
    const commentsContainer = document.querySelector('.comments-container');

    // Function to handle delete confirmation
    function confirmDelete(commentElement) {
        const confirmationDialog = document.createElement('div');
        confirmationDialog.classList.add('confirmation-dialog');
        confirmationDialog.innerHTML = `
            <div class="dialog-content">
                <p>Are you sure you want to remove this comment? This will remove the comment and can't be undone.</p>
                <button id="cancel-button">NO, CANCEL</button>
                <button id="confirm-button">YES, DELETE</button>
            </div>
        `;

        document.body.appendChild(confirmationDialog);
        confirmationDialog.style.display = 'block'; // Show the dialog

        // Handle cancel
        document.getElementById('cancel-button').addEventListener('click', () => {
            confirmationDialog.remove(); // Close dialog
        });

        // Handle confirm delete
        document.getElementById('confirm-button').addEventListener('click', () => {
            commentElement.remove(); // Remove the comment
            confirmationDialog.remove(); // Close dialog
        });
    }

    // Event delegation to handle delete buttons for both existing and new comments
    commentsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const commentElement = event.target.closest('.comment');
            confirmDelete(commentElement);
        }
    });

    // Function to create a new comment
    function addNewComment(commentText) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <div class="comment-votes">
                <button class="vote-up">+</button>
                <span class="vote-count">0</span>
                <button class="vote-down">-</button>
                <button class="delete-button">🗑️</button>
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <img src="avatars/image-juliusomo.png" alt="Your avatar">
                    <span class="username">yourusername</span>
                    <span class="comment-time">just now</span>
                </div>
                <p class="comment-text">${commentText}</p>
                <button class="reply-button">Reply</button>
            </div>
        `;
        
        commentsContainer.insertBefore(newComment, commentTextArea.parentElement);
    }

    // Handle the send button click to add new comment
    sendButton.addEventListener('click', () => {
        const commentText = commentTextArea.value.trim();

        if (commentText) {
            addNewComment(commentText);
            commentTextArea.value = ''; // Clear the textarea
        }
    });
});

