const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Project</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 40px;
          margin-bottom: 10px;
        }
        p {
          font-size: 20px;
        }
        .box {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="box">
          <h1>🚀 DevOps Project</h1>
          <p>CI/CD Pipeline Working Successfully!</p>
          <p>Docker | Jenkins | Terraform | Kubernetes</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});
