let commentWidget = (function(){
    const comments = [];
    let showReplyForComment = null;

    return {
        handleReplyWidget: function(index) {
            showReplyForComment = index;
            this.handleSubmitButton(true);
        },
        onChangeInput: function(e){
            console.log(e);
        },
        handleSubmitButton: function(reRender){
            const commentInput = document.getElementById("comment-input").value;
            if(commentInput.trim().length !== 0){
                let id = comments.length + 1;
                let value = commentInput;
                let commentObj = { id, value }
                comments.push(commentObj);
                document.getElementById("comment-input").value = "";
            }

            if(reRender){
                document.getElementById("comment-list").innerHTML = comments.map((comment,index) => {
                    return ( 
                        `
                            <div class='single-comment-container'>
                                <div class='single-comment'>${comment.value}</div>
                                <div class='button-container'>
                                    <button class='edit-button' onclick=''>Edit</button>
                                    <button class='reply-button' onclick='commentWidget.handleReplyWidget(${index})'>Reply</button>
                                </div>
                                ${showReplyForComment === index?'<input />':''}
                            </div>
                        `
                    )
                })
            }
        },
    }
})();