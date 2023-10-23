module.exports.handler = async (events) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "HELLO FROM SANAYA"}),
    };
};

