const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('🦕 Деякі динозаври мали пір’я! Хоча ми звикли уявляти динозаврів як лускатих рептилій, багато з них — особливо з групи тероподів (родичів тиранозавра) — мали пір’я. Вчені вважають, що пір’я спочатку з’явилися для збереження тепла, а вже пізніше — для польоту. Деякі з цих "пухнастих" динозаврів стали предками сучасних птахів.', 'success')
  })
}