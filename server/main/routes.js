var express = require("express");

var router = express.Router();
var pool = require('./db')

router.get("/hello", function(req, res) {
    res.json("the partogram")
})

router.get('/api/get/allposts', (req, res, next) => {
    pool.query("select * from posts order by date_created desc", (q_err, q_res) => {
        res.json(q_res.rows)
    } )
})

router.post('api/posts/poststodb', (req, res, next) => {
    const values = [req.body.title, req.body.body, req.body.uid, req.body.username]
    pool.query(`insert into posts(title, body, user_id, author, date_created) 
    values($1, $2, $3, $4, now())`, values, (q_err, q_res) => {
        if(q_err) return next(q_err);
        res.json(q_err.rows)
    })
})

router.put('api/put/post', (req, res, next) => {
    const values = [req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username]
    pool.query(`update posts set title= $1, body = $2, user_id = $3, author = $5, date_created = now()
    where pid = $4`, values,
    (q_err, q_res) => {
        res.json(q_res.rows)
    }  )
})

router.delete('/api/delete/postcomments', (req, res, next) => {
    const post_id = req.body.post_id
    pool.query(`delete from comments 
    where post_id = $1`, [post_id], 
    (q_err, q_res) => {
        res.json(q_res.rows)
        console.log(q_err)
    })
})

router.delete('/api/delete/post', (req, res, next) => {
    const post_id = req.body.post_id
    pool.query(`delete from posts where pid = $1`, [ post_id ],
    (q_err, q_res) => {
        res.json(q_res.rows)
        console.log(q_err)
    })
})

// =========================================USER PROFILE==========================================================


router.post('/api/posts/userprofiletodb', (req, res, next) => {
    const values = [req.body.profile.nickname, req.body.profile.email, req.body.profile.email_verified]
    pool.query(`INSERT INTO users(username, email, email_verified, date_created)
                VALUES($1, $2, $3, NOW())
                ON CONFLICT DO NOTHING`, values,
                (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  router.get('/api/get/userprofilefromdb', (req, res, next) => {
    const email = req.query.email
    console.log(email)
    pool.query(`SELECT * FROM users
                WHERE email=$1`, [ email ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  router.get('/api/get/userposts', (req, res, next) => {
    const user_id = req.query.user_id
    console.log(user_id)
    pool.query(`SELECT * FROM posts
                WHERE user_id=$1`, [ user_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  
  router.put('/api/put/likes', (req, res, next) => {
    const uid = [req.body.uid]
    const post_id = String(req.body.post_id)
  
    const values = [ uid, post_id ]
    console.log(values)
    pool.query(`UPDATE posts
                SET like_user_id = like_user_id || $1, likes = likes + 1
                WHERE NOT (like_user_id @> $1)
                AND pid = ($2)`,
       values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      console.log(q_res)
      res.json(q_res.rows);
    });
  });

module.exports = router;

