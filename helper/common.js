function HasProperty(obj, ...properties) {
    for (let prop of properties) {
        if (!obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}

async function ConnectToDatabase(dbObj, uri) {
    try {
        await dbObj.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    } catch (err) {
        console.log(err);
        return false;
    }

    console.log("MongoDB database connection established successfully");
    return true;
}

export { HasProperty, ConnectToDatabase }