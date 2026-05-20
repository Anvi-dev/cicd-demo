const http = require('http');

const server = http.createServer((req,res) =>	{
	res.end('Hello from CI/CD pipeline! Auto-Triggered by Web-hook! 🚀\n');
});	

server.listen(3000, () => {
	console.log('Server running on port 3000');
});
