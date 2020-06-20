module.exports = ({main}) => {
 return `
 <!doctype html>
 <html lang="en">
 <head>
   <meta charset="utf-8">
   <title>Hacker News</title>
   <meta name="description" content="Hacker News">
   <meta name="author" content="KrishnaSagarR">
 </head>
 <body>
   <div id="root" >
     ${main}
   </div>
   <script src="/public/index.js"></script>
 </body>
 </html>
 `
};
