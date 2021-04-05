class Question {
  constructor(param1) {
    this.param1 = param1;
  }

  createHeading(someParam) {}
  markSolution() {}
}
class MultipleChoiceQuestion extends Question {
  constructor(param1) {
    this.param1 = param1;
  }

  createChoices(someParam) {}
}

class BigQuestion extends Question {
  constructor(param1) {
    this.param1 = param1;
  }

  someFunction(someParam) {}
}
class Exam {
  constructor(param1) {
    this.param1 = param1;
  }

  appendMultipleChoiceQuestions(someParam) {}
  appendBigQuestions(someParam) {}
  generateExam() {}
  generateExamWithSolutions() {}
}
