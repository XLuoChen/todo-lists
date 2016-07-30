const express = require('express');
const router = express();

router.get('/',function (req,res) {
  res.sendfile('views/index.html', 'utf8');
})

module.exports = router;
