const express = require("express")
const router = express.Router()


const question = require("./models/question")

// add a question
router.post("/", async (req, res) => {
    const newQuestion = new question({
        question:req.body.question,
        language:req.body.language
    })
	const post = await newQuestion.save()
	res.send(post)
})

// Get all questions
router.get("/", async (req, res) => {
	const post = await question.find()
	res.send(post)
})

// Get a questions
router.get("/:id", async (req, res) => {
    try {
		const quest = await question.findOne({ _id: req.params.id })
		res.send(quest)
	} catch {
		res.status(404)
		res.send({ error: "Question doesn't exist!" })
	}
})



// comment on a question
router.post("/:id/comment", async (req, res) => {
    try {
		const quest = await question.findOne({ _id: req.params.id })
		quest.comment.push(req.body.comment)
        await quest.save()
        res.send(quest)
	} catch {
		res.status(404)
		res.send({ error: "Question doesn't exist!" })
	}
})




module.exports = router