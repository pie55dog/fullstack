const express = require('express')
const router = express.Router()
const EarringSchema = require('../models/Earring.js')
const OutSchema = require('../models/Brace.js')
console.log(EarringSchema)

//GENERAL
//Read/get by id
router.get('/earring/:id', (req, res) => {
    EarringSchema.findById(req.params.id)
    .then(earring => {
      console.log("succesfully got one!")
      console.log(earring)
      res.json(earring)
    })
    .catch(err => {
      console.error(err)
    })
})

//
//
//
//EARRING
//
//
//

//this makes a new earring
router.post('/new/earring', (req, res) => {
    EarringSchema.create(req.body)
    .then(earring => {
      console.log("succesfully added name!")
      console.log(earring)
      res.json(earring)
    })
    .catch(err => {
      console.error(err)
      console.log('I GOT A BIG FAT ERROR YOU BLOOD CAT VOMIT CREATURE')
    })
})


//this deletes an earing
   
router.delete('/remove/ear', (req, res) => {
  EarringSchema.findOneAndDelete(req.body)
  .then(earring => {
    console.log("succesfully deleted new guy!")
    console.log(earring)
    res.json(earring)
  })
  .catch(err => {
    console.error(err)
    console.log('THIS ERROR IS UGLIER THAN UR RECEDING HAIRLINE <3333')
  })

})

// this gets all the earring data
router.get('/earrings', (req, res) => {
  EarringSchema.find({
  })
  //'then' happens if find is succesful
  .then(earring => {
    console.log("succesfully got entire db!")
    console.log(earring)
    res.send(earring)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err)
    res.send(err)
  })
})
   
module.exports = router


///
///
///
// BOX THINGS
///
///
///
///
//



//replace :boxname with name of box ?box=closet
//1. find earring
//2. add to box
//3. save box version with earring
// This adds an earing to a box
router.put('/addtobox/:boxname', (req, res) => {
  EarringSchema.findOne((req.query)) .then(newEar => {
  OutSchema.findOne({boxmaster: req.params.boxname})
  .then(coolBox => {
   coolBox.items.push(newEar)
   coolBox.save() .then (coolerBox => res.send(coolerBox))
  })
  })
  .catch(err => {
    console.error(err)
    res.json(err)
    console.log('you round foul scented scoopula xo xo i hate u')
  })

})

//this makes a new box
router.post('/new/box', (req, res) => {
  OutSchema.create(req.body)
  .then(box => {
    console.log('i made a box!!')
    res.json(box)
  })
  .catch(err => {
    console.error(err)
    console.log('I GOT A BIG FAT ERROR YOU BLOOD CAT VOMIT CREATURE')
  })
  
})

//this gets all the box data

router.get('/box', (req, res) => {
  OutSchema.find({
  })
  .then(box => {
    console.log("succesfully got entire db!")
    console.log(box)
    res.send(box)
  })
  .catch(err => {
    console.error(err)
    res.send(err)
  })
})

//this one gets one box based on the name of the box in the url
router.get('/onebox/:name', (req, res) => {
  OutSchema.findOne({boxmaster: req.params.name}
  )
  .then(box => {
    console.log("succesfully got one box")
    console.log(box)
    res.send(box)
  })
  .catch(err => {
    console.error(err)
    res.send(err)
  })
})