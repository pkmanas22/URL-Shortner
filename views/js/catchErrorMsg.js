function catchErrorMsg(errorMessage) {
    return `
        <div style="font-family: 'Arial', sans-serif; text-align: center; margin: 30px; padding: 15px; background-color: #f8d7da; font-size:30px; color: #721c24; border: 1px solid #f5c6cb; border-radius: 5px;">
            ${errorMessage}
        </div>
    `;
}

module.exports = {
    catchErrorMsg,
}