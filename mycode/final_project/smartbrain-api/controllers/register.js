const handleRegister = (req, res, db, bcrypt, saltRounds) => {
  console.log(req.body);
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('empty field detected');
  }
  else {
    // console.log('empty not detected!')
    const hash = bcrypt.hashSync(password, saltRounds);
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
        .returning('*') // this enables returning only all the columns of what we inserted 
        .insert({
          email: loginEmail[0],
          name: name,
          joined: new Date()
        })
        .then(user => {
          res.json(user[0]);
        })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
  }
}

module.exports = {
  handleRegister
};