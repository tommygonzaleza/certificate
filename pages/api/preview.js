export default (req, res) => {
    if(req.query.token !== ""){
        return res.status(401).json({ message: 'Invalid token' });
    }
    res.setPreviewData({});
    res.end("Test");
}