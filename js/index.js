const accordionQuestions = document.querySelectorAll('.accordion__question')
const accordionAnswers = document.querySelectorAll('.accordion__response')
const picture = document.querySelector('.picture')


const closeAccordion = () => {
    accordionAnswers.forEach(response => {
        response.classList.remove('accordion-open')
    })
}

const removeColorQuestion = () => {
    accordionQuestions.forEach(question => {
        question.classList.remove('accordion__question--black')
    })
}

const removeArrowRotate = () => {
    accordionQuestions.forEach(item => {
        item.classList.remove('arrow-show')
    })
}

accordionQuestions.forEach(item => {
    item.addEventListener('click', (e) => {

        const accordionQuestion = e.target
        const accordionResponse = e.target.nextElementSibling

        removeArrowRotate()

        if (accordionResponse.className === 'accordion__response accordion-open') {
            closeAccordion()
            removeColorQuestion()
        } else {
            closeAccordion()
            removeColorQuestion()

            accordionResponse.classList.add('accordion-open')
            accordionQuestion.classList.add('accordion__question--black')
            accordionQuestion.classList.add('arrow-show')
        }

    })
    item.addEventListener('mouseenter', () => {
        picture.classList.add('box-show')
    })
    item.addEventListener('mouseleave', () => {
        picture.classList.remove('box-show')
    })
})