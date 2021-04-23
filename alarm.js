function playAlarm() {
    alarm.currentTime = 0
    alarm.play()
}

function stopAlarm() {
    alarm.pause()
}


function alarmCallback() {
    playAlarm()
    setTimeout(stopAlarm, 16000)
}

const alarm = new Audio('https://upload.wikimedia.org/wikipedia/commons/f/f9/Motorsirene_-_Feuerwehralarm.ogg')
const serviceStatusText = document.querySelector(".ServiceStatusText")

const e = document.querySelector(".TodoNotification")
const observer = new MutationObserver(function (event) {
    if (e.classList.contains("TodoNotification-TicketToDo")) {
        alarmCallback()
    }
})

observer.observe(e, {
  attributes: true, 
  attributeFilter: ['class'],
  childList: false, 
  characterData: false
})
