# stackoverflow-clone
a sample four-api project to mimic stactover-flow
the four api are listed below

#### post a question
method  POST
endpoint /api/questions
#### comment on a question
method  POST
endpoint /question/comment

#### retrieve all question without comments
method  GET
endpoint /api/questions
#### retrieve a question with its comments
method  GET
endpoint /api/questions/:id
#### search a question
method  GET
endpoint /question?lang=python
