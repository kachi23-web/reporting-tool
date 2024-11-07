"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Invalid input' });
        }
        return res.status(200).json({ message: 'User signed up successfully' });
    }
    else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
//# sourceMappingURL=email-signup.js.map